const apiRouter = require("express").Router();

apiRouter.use("/users");

apiRouter.route("/users").get(getUsers);
apiRouter.route("/users/:username").get(getUserByUserName);
apiRouter.route("/channels").get(getChannels);
apiRouter
  .route("/channels/:channel_id/messages")
  .get(getMessages)
  .post(postMessage);

module.exports = apiRouter;
