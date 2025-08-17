import express from "express";
import router from "./routes";
import cors from "cors";

export default function createApp() {
  const app = express();
  app.use(express.json());
  app.use("/api", router);

  const corsOption = {
    origin: "https://viana-vinhos.netlify.app",
    method: ["GET"],
  }

  app.use(cors(corsOption));

  return app;
}
