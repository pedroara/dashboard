export interface Unit {
  id: number;
  name: string;
  companyId: number;
}

export interface UnitsState {
  [id: number]: Unit;
}

export interface UnitsFetchedAction {
  type: "UNIT_FETCHED" | "UNITS_FETCHED";
  entities: {
    units: UnitsState;
  };
}
