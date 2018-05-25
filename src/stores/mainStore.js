import { action, autorun, computed, observable } from 'mobx';

export class MainStore {
  @observable activeViewName = 'list';
  
  @observable launchState = {
    launch: null,
    launchPad: null,
    rocket: null,
  };

  @observable listState = {
    rocketNameFilter: "FALCON 1",
    filteredLaunches: [],
    isLoading: false,
    error: null,
  }

  constructor() {
    this.disposeAutorun = autorun(() => {
      if (this.activeViewName === 'list') {
        this.fetchLaunchByRocketName(this.listState.rocketNameFilter).then(
          filteredLaunches => {
            this.listState.filteredLaunches = filteredLaunches;
          }
        );
      }
    });
  }

  @action.bound
  async handleLaunchClick(launch) {
    let launchPadURL = `https://api.spacexdata.com/v2/launchpads/${launch.launch_site.site_id}`;
    let rocketURL = `https://api.spacexdata.com/v2/rockets/${launch.rocket.rocket_id}`;
    [this.launchState.launchPad, this.launchState.rocket] = await Promise.all([
      this.getResponseFromUrl(launchPadURL),
      this.getResponseFromUrl(rocketURL)  
    ]);
    this.launchState.launch = launch;
    this.activeViewName = 'details';
    window.scrollTo(0, 0);
  }

  @action.bound
  handleBackClick() {
    this.activeViewName = 'list';
  }

  @action.bound
  async setFilter(rocketNameFilter){
    this.listState.isLoading = false;
    this.listState.error = null;
    this.listState.rocketNameFilter = rocketNameFilter;
    let filteredLaunches;
    if(rocketNameFilter === "ALL ROCKETS") {
      filteredLaunches = await this.fetchLaunchByRocketName('');
    } else {
      filteredLaunches = await this.fetchLaunchByRocketName(rocketNameFilter);
    }
    if (!filteredLaunches) {
      filteredLaunches = [];
    }
    this.listState.filteredLaunches = filteredLaunches;
  }

  async fetchLaunchByRocketName(rocketNameFilter) {
      try {
        const rocketId = rocketNameFilter.split(" ").join("").toLowerCase();
        const URL = `https://api.spacexdata.com/v2/launches?rocket_id=${rocketId}`;
        this.listState.isLoading = true;
        const jsonResponse = await this.getResponseFromUrl(URL);
        this.listState.isLoading = false;
        return jsonResponse;
      } catch(error) {
        this.listState.isLoading = false;
        this.listState.error = error;
      }
  }

  async getResponseFromUrl(URL) {
    let response = await fetch(URL);
    return await response.json();
  };

}

const instance = new MainStore();

export default instance;
