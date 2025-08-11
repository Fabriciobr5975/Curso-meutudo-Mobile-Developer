import { repositoryPodcast } from "../repository/podcastRepository";
import { PodcastDTO } from "../models/filterPodcastModel";
import { StatusCode } from "../utils/StatusServer";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastDTO> => {
  const queryString: string = podcastName?.split("?p=")[1] ?? "";

  let responseFormat: PodcastDTO = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast(queryString);

  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT; 
  responseFormat.body = data;

  return responseFormat;
};
