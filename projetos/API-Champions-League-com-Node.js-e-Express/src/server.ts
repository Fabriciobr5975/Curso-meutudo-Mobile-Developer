import createApp from "./app";

const server = createApp();
const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`🔥 Server running at port http://localhost:${PORT}`));