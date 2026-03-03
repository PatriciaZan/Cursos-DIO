import { response } from "express";
import { PlayerModel } from "../models/player-model";
import {
  deleteOnePLayer,
  findAllPlayers,
  findAndModifyPlayer,
  findPlayerById,
  insertPlayer,
} from "../repositories/players-repository";
import { ok, noContent, badRequest, created } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = ok(data);
  } else {
    response = noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;
  if (Object.keys(player).length !== 0) {
    // console.log(player);
    await insertPlayer(player);
    response = created();
  } else {
    response = badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await deleteOnePLayer(id);
  if (isDeleted) {
    response = await ok({ message: "Deleted" });
  } else {
    response = await badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel,
) => {
  const data = await findAndModifyPlayer(id, statistics);
  // Tratamento para id não existente
  let response = null;
  if (Object.keys(data).length === 0) {
    response = await badRequest();
  }
  response = await ok(data);
  return response;
};
