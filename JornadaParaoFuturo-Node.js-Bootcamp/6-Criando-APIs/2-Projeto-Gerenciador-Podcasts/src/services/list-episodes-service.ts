import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/http-code";

export const serviceListEpisodes = async (): Promise<FilterPodCastModel> => {
  let responseFormat: FilterPodCastModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

  responseFormat.body = data;

  return responseFormat;
};
