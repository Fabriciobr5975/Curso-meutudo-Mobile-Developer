import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisodes } from "../services/listEpisodesService";
import { serviceFilterEpisodes } from "../services/filterEpisodesService";
import { ContentType } from "../utils/ContentType";
import { PodcastDTO } from "../models/filterPodcastModel";

const DEFAULT_CONTENT = {"content-type": ContentType.JSON};

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastDTO = await serviceListEpisodes();

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body))
  res.end();
};

export const getFilterListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastDTO = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body))
  res.end();
};
