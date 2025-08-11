import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });
server.register(cors, {
    origin: "*"
})

const application: string = "application/json";

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
];

server.get("/teams", async (request, response) => {
  response.type(application).code(200);

  return { teams };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/driver/:id",
  async (request, response) => {
    const id: number = parseInt(request.params.id);

    const driver = drivers.find((drive) => drive.id === id);

    if (!driver) {
      response.type(application).code(404);
      return { message: "Driver Not Found" };
    } else {
      response.type(application).code(200);
      return { driver };
    }
  }
);

server.get("/drivers", async (request, response) => {
  response.type(application).code(200);

  return { drivers };
});

server.listen({ port: 3333 }, () =>
  console.log(`Servidor ligado na porta ${3333} com sucesso`)
);
