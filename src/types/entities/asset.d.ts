export interface HealtHistory {
  status: string; //TODO: Contraint only to allowed strings
  timestamp: string;
}

export interface Metrics {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

export interface Specifications {
  // TODO: Add another specifications
  maxTemp: number;
}

export interface Asset {
  id: number;
  healthHistory: HealtHistory[];
  specifications: Specifications;
  metrics: Metrics;
  assignedassetIds: number[];
  companyId: number;
  healthscore: number;
  image: string;
  model: string;
  name: string;
  sensors: string[];
  status: string; //TODO: Contraint only to allowed strings
  unitId: number;
}

export interface AssetsState {
  [id: number]: Asset;
}

export interface AssetsFetchedAction {
  type: "ASSET_FETCHED" | "ASSETS_FETCHED";
  entities: {
    assets: AssetsState;
  };
}
