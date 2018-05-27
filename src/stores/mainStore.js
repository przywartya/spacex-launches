import { action, autorun, computed, observable, runInAction, flow } from 'mobx';

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

  setListState = flow(function * (rocketNameFilter) {
    this.listState.isLoading = false;
    this.listState.error = null;
    if (!this.listState.allLaunches.hasOwnProperty(rocketNameFilter)) {
      this.listState.isLoading = true;
      try {
        this.listState.allLaunches[rocketNameFilter] = yield this.fetchLaunchByRocketName(rocketNameFilter);
      } catch (error) {
        this.listState.error = error;
      }
      this.listState.isLoading = false;
    }
  })

  setLaunchState = flow(function * () {
    this.launchState.isLoading = true;
    this.launchState.error = null;
    try {
      let { launch } = this.launchState;
      [this.launchState.launchPad, this.launchState.rocket] = yield Promise.all([
        this.getResponseFromUrl(`https://api.spacexdata.com/v2/launchpads/${launch.launch_site.site_id}`),
        this.getResponseFromUrl(`https://api.spacexdata.com/v2/rockets/${launch.rocket.rocket_id}`)
      ]);
    } catch (error) {
      this.launchState.error = error;
    }
    this.launchState.isLoading = false;
    window.scrollTo(0, 0);
  });

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
