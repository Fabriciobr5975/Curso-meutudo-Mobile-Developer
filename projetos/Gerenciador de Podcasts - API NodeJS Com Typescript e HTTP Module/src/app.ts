import * as http from "http";

import {
  getFilterListEpisodes,
  getListEpisodes,
} from "./controllers/podcastsController";
import { Routes } from "./routes/router";
import { HttpMethod } from "./utils/HttpMethods";

export const app = async (
  req: http.IncomingMessage,
  resp: http.ServerResponse
) => {
  const baseUrl = req.url?.split("?")[0] ?? "";

  if (req.method === HttpMethod.GET && req.url === Routes.LIST) {
    await getListEpisodes(req, resp);
  }

  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterListEpisodes(req, resp);
  }
};
