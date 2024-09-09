const announcementRoutes = require("./announcement.route");
const dueRoutes = require("./due.route");
const routes = (app) => {
  app.use("/announcement", announcementRoutes);
  app.use("/due", dueRoutes);
};

module.exports = routes;
