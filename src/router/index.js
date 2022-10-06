import { UserRouter, MessageRouter } from "../components";

// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [
  //["/test", TestRouter],
  ["/user", UserRouter],
  ["/message", MessageRouter],
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
