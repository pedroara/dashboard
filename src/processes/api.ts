import superagent, { SuperAgentStatic } from "superagent";

interface DynamicSuperAgentRequest extends SuperAgentStatic {
  [key: string]: any;
}

const request: DynamicSuperAgentRequest = superagent;

const BASE_URL = "https://my-json-server.typicode.com/tractian/fake-api";

const api = (method: string) => (url: string) => {
  return request[method](`${BASE_URL}${url}`).type("json").accept("json");
};

export const apiGet = api("get");
