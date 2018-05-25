import { action, autorun, computed, observable } from 'mobx';

export class MainStore {
  @observable listState = {
    rocketNameFilter: "FALCON 1",
    filteredLaunches: [],
    isLoading: false,
    error: null,
  }

  constructor() {
    this.disposeAutorun = autorun(() => {
      this.fetchLaunchByRocketName(this.listState.rocketNameFilter).then(
        filteredLaunches => {
          this.listState.filteredLaunches = filteredLaunches;
        }
      );
    });
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
