import { appConfigs } from "./app.js";
import { getEnvPort } from "./configs/envs-configs/getEnvPort.js";

const port = (await getEnvPort()) || 4000;
const server = appConfigs().listen(port, () =>
  console.log(`Server run in port ${port}`)
);

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server kil\n", `Date: ${Date.now()}`);
  });
});
