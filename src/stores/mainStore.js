import { action, autorun, computed, observable, runInAction } from 'mobx';

export class MainStore {
  get availableRocketNames() {
    return ["ALL ROCKETS", "FALCON 1", "FALCON 9", "FALCON 10", "FALCON HEAVY"];
  };

  @observable activeViewName = 'list';
  
  @observable launchState = {
    launch: null,
    launchPad: null,
    rocket: null,
    isLoading: false,
    error: null,
  };

  @observable listState = {
    rocketNameFilter: "FALCON 1",
    allLaunches: {},
    isLoading: false,
    error: null,
  }

  constructor() {
    this.disposeAutorun = autorun(() => {
      switch (this.activeViewName) {
        case 'list':
          this.setListState(this.listState.rocketNameFilter);
          break;
        case 'details':
          this.setLaunchState();
          break;
      }
    });
  }

  @action.bound
  async setListState(rocketNameFilter) {
    this.listState.isLoading = false;
    this.listState.error = null;
    if (!this.listState.allLaunches.hasOwnProperty(rocketNameFilter)) {
      this.listState.isLoading = true;
      try {
        const fetchedLaunches = await this.fetchLaunchByRocketName(rocketNameFilter);
        runInAction(() => {
          this.listState.allLaunches[rocketNameFilter] = fetchedLaunches;
        })
      } catch (error) {
        runInAction(() => {
          this.listState.error = error;
        })
      }
      runInAction(() => {
        this.listState.isLoading = false;
      })
    }
  }

  @action.bound
  async setLaunchState() {
    this.launchState.isLoading = true;
    this.launchState.error = null;
    try {
      let { launch } = this.launchState;
      let launchPad, rocket;
      [launchPad, rocket] = await Promise.all([
        this.getResponseFromUrl(`https://api.spacexdata.com/v2/launchpads/${launch.launch_site.site_id}`),
        this.getResponseFromUrl(`https://api.spacexdata.com/v2/rockets/${launch.rocket.rocket_id}`)
      ]);
      runInAction(() => {
        this.launchState.launchPad = launchPad;
        this.launchState.rocket = rocket;
      })
    } catch (error) {
      runInAction(() => {
        this.launchState.error = error;
      })
    }
    runInAction(() => {
      this.launchState.isLoading = false;
    })
    window.scrollTo(0, 0);
  }

  @action.bound
  handleLaunchClick(launch) {
    this.launchState.launch = launch;
    this.activeViewName = 'details';
  }

  @action.bound
  handleBackClick() {
    this.activeViewName = 'list';
  }

  @action.bound
  setFilter(event) {
    this.listState.rocketNameFilter = event.currentTarget.text;
  }

  async fetchLaunchByRocketName(rocketNameFilter) {
    rocketNameFilter = (rocketNameFilter === "ALL ROCKETS") ? '' : rocketNameFilter;
    const rocketId = rocketNameFilter.split(" ").join("").toLowerCase();
    const URL = `https://api.spacexdata.com/v2/launches?rocket_id=${rocketId}`;
    let jsonResponse = await this.getResponseFromUrl(URL);
    jsonResponse = (!jsonResponse) ? [] : jsonResponse;
    return jsonResponse;
  }

  async getResponseFromUrl(URL) {
    let response = await fetch(URL);
    return await response.json();
  };

}

const instance = new MainStore();

export default instance;
