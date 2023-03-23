import { normalize, schema } from "normalizr";
import { Dispatch } from "redux";
import { Asset } from "./../types/entities/asset.d";
import { apiGet } from "./api";

const assetsR = [
  {
    assignedassetIds: [1, 2, 3],
    companyId: 1,
    healthHistory: [
      {
        status: "inOperation",
        timestamp: "2022-12-01T00:00:00.000Z",
      },
      {
        status: "inDowntime",
        timestamp: "2022-12-08T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-15T00:00:00.000Z",
      },
      {
        status: "inAlert",
        timestamp: "2022-12-22T00:00:00.000Z",
      },
      {
        status: "unplannedStop",
        timestamp: "2022-12-29T00:00:00.000Z",
      },
    ],
    healthscore: 70,
    id: 1,
    image:
      "https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg",
    metrics: {
      lastUptimeAt: "2023-01-01T16:17:50.180Z",
      totalCollectsUptime: 7516,
      totalUptime: 1419.620084999977,
    },
    model: "motor",
    name: "Motor H13D-1",
    sensors: ["GSJ1535"],
    specifications: {
      maxTemp: 80,
    },
    status: "inAlert",
    unitId: 1,
  },
  {
    assignedassetIds: [4],
    companyId: 1,
    healthHistory: [
      {
        status: "inOperation",
        timestamp: "2022-12-01T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-08T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-15T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-22T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-29T00:00:00.000Z",
      },
    ],
    healthscore: 73.7,
    id: 2,
    image:
      "https://tractian-img.s3.amazonaws.com/dc8a497655c688ce381d6a3ba4af684d.jpeg",
    metrics: {
      lastUptimeAt: "2023-01-01T16:12:18.342Z",
      totalCollectsUptime: 1279,
      totalUptime: 1420.5929977777462,
    },
    model: "motor",
    name: "Motor H12D-1",
    sensors: ["IBS1636"],
    specifications: {
      maxTemp: 53,
      power: 1.5,
      rpm: null,
    },
    status: "inDowntime",
    unitId: 1,
  },
  {
    assignedassetIds: [2, 4],
    companyId: 1,
    healthHistory: [
      {
        status: "inOperation",
        timestamp: "2022-12-01T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-08T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-15T00:00:00.000Z",
      },
      {
        status: "inAlert",
        timestamp: "2022-12-22T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-29T00:00:00.000Z",
      },
    ],
    healthscore: 90.9,
    id: 3,
    image:
      "https://tractian-img.s3.amazonaws.com/646a1fe6494d3a7405908076a5ac1429.jpeg",
    metrics: {
      lastUptimeAt: "2023-01-01T16:20:51.029Z",
      totalCollectsUptime: 889,
      totalUptime: 1500.29189638886,
    },
    model: "motor",
    name: "Motor H12D-3",
    sensors: ["JVC1134"],
    specifications: {
      maxTemp: 57,
      power: 0,
      rpm: 1750,
    },
    status: "inOperation",
    unitId: 1,
  },
  {
    assignedassetIds: [1, 3],
    companyId: 1,
    healthHistory: [
      {
        status: "inOperation",
        timestamp: "2022-12-01T00:00:00.000Z",
      },
      {
        status: "plannedStop",
        timestamp: "2022-12-08T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-15T00:00:00.000Z",
      },
      {
        status: "plannedStop",
        timestamp: "2022-12-22T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-29T00:00:00.000Z",
      },
    ],
    healthscore: 88.3,
    id: 4,
    image:
      "https://tractian-img.s3.amazonaws.com/73a0d014d00f704b73965a049695ad0d.jpeg",
    metrics: {
      lastUptimeAt: "2023-01-01T16:20:43.786Z",
      totalCollectsUptime: 8540,
      totalUptime: 1523.0280638888194,
    },
    model: "motor",
    name: "Motor H12D-2",
    sensors: ["LZY5230"],
    specifications: {
      maxTemp: 55,
      power: 0,
      rpm: 1740,
    },
    status: "inOperation",
    unitId: 2,
  },
  {
    assignedassetIds: [1, 2, 3],
    companyId: 1,
    healthHistory: [
      {
        status: "inOperation",
        timestamp: "2022-12-01T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-08T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-15T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-22T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-29T00:00:00.000Z",
      },
    ],
    healthscore: 60.4,
    id: 5,
    image:
      "https://tractian-img.s3.amazonaws.com/16fbd9f50d3c6cfca8c6c2bc834ac0f0.jpeg",
    metrics: {
      lastUptimeAt: "2023-01-01T16:25:28.989Z",
      totalCollectsUptime: 8276,
      totalUptime: 1474.8898133332748,
    },
    model: "fan",
    name: "Fan D21",
    sensors: ["NBX2120"],
    specifications: {
      maxTemp: 64,
      power: 1.5,
      rpm: 840,
    },
    status: "inAlert",
    unitId: 2,
  },
  {
    assignedassetIds: [2],
    companyId: 1,
    healthHistory: [
      {
        status: "inOperation",
        timestamp: "2022-12-01T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-08T00:00:00.000Z",
      },
      {
        status: "plannedStop",
        timestamp: "2022-12-15T00:00:00.000Z",
      },
      {
        status: "plannedStop",
        timestamp: "2022-12-22T00:00:00.000Z",
      },
      {
        status: "inOperation",
        timestamp: "2022-12-29T00:00:00.000Z",
      },
    ],
    healthscore: 91.2,
    id: 6,
    image:
      "https://tractian-img.s3.amazonaws.com/2f7eb04cfa255ab00088534f7d51f6f4.jpeg",
    metrics: {
      lastUptimeAt: "2023-01-01T16:23:58.801Z",
      totalCollectsUptime: 6231,
      totalUptime: 1542.8288661110903,
    },
    model: "fan",
    name: "Fan D22",
    sensors: ["MOE1378"],
    specifications: {
      maxTemp: 58,
      power: 1.5,
      rpm: 832,
    },
    status: "inDowntime",
    unitId: 2,
  },
];

const assetSchema = new schema.Entity<Asset>("assets");
const assetSchemaArray = new schema.Array(assetSchema);

export const fetchAssets = (dispatch: Dispatch) => {
  return apiGet("/assets").then((response: any) => {
    dispatch({
      type: "ASSETS_FETCHED",
      ...normalize(response.body, assetSchemaArray),
    });
  });
};
