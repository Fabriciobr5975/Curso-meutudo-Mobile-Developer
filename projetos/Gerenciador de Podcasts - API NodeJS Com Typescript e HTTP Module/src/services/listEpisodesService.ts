import { PodcastDTO } from "../models/filterPodcastModel";
import { repositoryPodcast } from "../repository/podcastRepository";
import { StatusCode } from "../utils/StatusServer";

export const serviceListEpisodes = async (): Promise<PodcastDTO> => {
  let responseFormat: PodcastDTO = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  return (responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  });
};
