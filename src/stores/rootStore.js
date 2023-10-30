import {types as t} from 'mobx-state-tree';
import {
  UserModel,
  AuthModel,
  VehicleModel,
  CurrentActivityModel,
} from '../models';
import {LocationModel} from '../models/Locations';
// Now instantiate the store!
export const RootStore = t
  .model({
    auth: t.maybeNull(AuthModel),
    user: t.maybeNull(UserModel),
    selectedVehicle: t.maybeNull(VehicleModel),
    locations: t.optional(t.map(LocationModel), {}),
    wayPoints: t.optional(t.map(LocationModel), {}),
    currentActivity: t.maybeNull(CurrentActivityModel),
  })
  .actions(self => ({
    login(data) {
      self.auth.login(data);
      self.user.update(data.user);
    },
    addLocation(data) {
      self.locations.set(data.timestamp, LocationModel.create(data));
    },
    addWayPoint(id, data) {
      self.wayPoints.set(id, LocationModel.create(data));
    },
    addLocations(locations) {
      locations.map(({timestamp, coords}) => {
        self.locations.set(
          timestamp,
          LocationModel.create({timestamp, ...coords}),
        );
      });
    },
    initLocations(locations) {
      locations.map(({timestamp, coords}) => {
        self.locations.set(
          timestamp,
          LocationModel.create({timestamp, ...coords}),
        );
      });
    },
    addWayPoints(locations) {
      locations.map(({timestamp, coords}) => {
        self.wayPoints.set(
          timestamp,
          LocationModel.create({timestamp, ...coords}),
        );
      });
    },
    resetSubState(subState) {
      const subStateName = subState.$treenode?.subpath;
      if (subStateName) {
        self[subStateName] = {};
      }
    },
    setSelectedVehicle(vehicle) {
      if (vehicle) {
        const veh = VehicleModel.create();
        veh.update(vehicle);
        self.selectedVehicle = veh;
      } else {
        self.selectedVehicle = null;
      }
    },
  }));

export const rootStore = RootStore.create({
  auth: AuthModel.create(),
  user: UserModel.create(),
  selectedVehicle: null,
  currentActivity: CurrentActivityModel.create(),
});
export default RootStore;
