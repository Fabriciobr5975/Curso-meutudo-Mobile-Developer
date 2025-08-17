import HttpResponse from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null
  };
};

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: { message: "Error" }
  };
};

export const create = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: { message: "successful" }
  };
};