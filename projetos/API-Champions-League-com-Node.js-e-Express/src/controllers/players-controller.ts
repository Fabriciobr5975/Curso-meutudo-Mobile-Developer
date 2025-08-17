import { Request, Response } from "express";
import * as service from "../services/players-service";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, resp: Response) => {
  const httpResponse = await service.getPlayerService();
  resp.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, resp: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.getPlayerByIdService(id);
  resp.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, resp: Response) => {
  const bodyValue = req.body;
  const httpResponse = await service.createPlayerService(bodyValue);

  if (httpResponse) {
    resp.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await noContent();
    resp.status(response.statusCode).json(response.body);
  }
};

export const deletePlayer = async (req: Request, resp: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.deletePlayerService(id);

  if (httpResponse) {
    resp.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await noContent();
    resp.status(response.statusCode).json(response.body);
  }
};

export const updatePlayer = async (req: Request, resp: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue: StatisticsModel = req.body;
  const httpResponse = await service.updatePlayerService(id, bodyValue);

  resp.status(httpResponse.statusCode).json(httpResponse.body);
};
