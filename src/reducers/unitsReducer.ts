import { UnitsFetchedAction, UnitsState } from "../types/entities/unit.d";

const initialState: UnitsState = {};

const UnitsReducer = (state = initialState, action: UnitsFetchedAction) => {
  switch (action.type) {
    case "UNIT_FETCHED":
    case "UNITS_FETCHED":
      return { ...state, ...action.entities.units };
    default:
      return state;
  }
};

export default UnitsReducer;
