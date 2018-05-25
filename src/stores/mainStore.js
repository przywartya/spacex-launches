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
      if (this.activeViewName === 'list' && this.listState.filteredLaunches.length === 0) {
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
    this.launchState.launch = launch;
    const launchPadId = launch.launch_site.site_id;
    //wydzielic te fetchowania do funkcji
    let URL = `https://api.spacexdata.com/v2/launchpads/${launchPadId}`;
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    this.launchState.launchPad = jsonResponse;

    const rocketId = launch.rocket.rocket_id;
    URL = `https://api.spacexdata.com/v2/rockets/${rocketId}`;
    response = await fetch(URL);
    jsonResponse = await response.json();
    this.launchState.rocket = jsonResponse;

    this.activeViewName = 'details';
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
        const response = await fetch(URL);
        const jsonResponse = await response.json();
        this.listState.isLoading = false;
        return jsonResponse;
      } catch(error) {
        this.listState.isLoading = false;
        this.listState.error = error;
      }
  }
}

const instance = new MainStore();

export default instance;
