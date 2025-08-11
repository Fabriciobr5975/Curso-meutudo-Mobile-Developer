import { PodcastModel } from "./podcastModel";

export interface PodcastDTO {
    statusCode: number,
    body: PodcastModel[];
}