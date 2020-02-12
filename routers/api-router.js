const apiRouter = require("express").Router();
const { getUsers, getUserByUserName } = require("../controllers/c-users");
const {
  getChannels,
  getMessagesByChannel,
  postMessage
} = require("../controllers/c-channels");

apiRouter.use("/users");

apiRouter.route("/users").get(getUsers);
apiRouter.route("/users/:username").get(getUserByUserName);
apiRouter.route("/channels").get(getChannels);
apiRouter
  .route("/channels/:channel_id/messages")
  .get(getMessagesByChannel)
  .post(postMessage);

module.exports = apiRouter;
