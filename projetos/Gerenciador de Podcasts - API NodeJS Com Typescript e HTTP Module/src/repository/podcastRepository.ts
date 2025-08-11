import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcastModel";

const pathData = path.join(__dirname, "../repository/podcast.json");
const language = "utf-8";

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
  const rawData: string = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);

  if(podcastName) {
    jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
  }

  return jsonFile;
};
