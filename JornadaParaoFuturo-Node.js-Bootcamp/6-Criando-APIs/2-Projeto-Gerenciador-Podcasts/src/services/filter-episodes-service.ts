import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { FilterPodCastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/http-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined,
): Promise<FilterPodCastModel> => {
  // Define a interface de retorno
  let responseFormat: FilterPodCastModel = {
    statusCode: 0,
    body: [],
  };

  // Busca os dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  // Faz a verificação de conteúdo
  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

  // if (data.length !== 0) {
  //   responseFormat.statusCode = StatusCode.OK;
  // } else {
  //   responseFormat.statusCode = StatusCode.NoContent;
  // }

  responseFormat.body = data;

  return responseFormat;
};
