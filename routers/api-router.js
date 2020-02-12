const apiRouter = require("express").Router();
const { getUsers, getUserByUserName } = require("../controllers/c-users");
const { getChannels } = require("../controllers/c-channels");
const {
  getMessagesByChannel,
  postMessage
} = require("../controllers/c-messages");

apiRouter.use("/users");

apiRouter.route("/users").get(getUsers);
apiRouter.route("/users/:username").get(getUserByUserName);
apiRouter.route("/channels").get(getChannels);
apiRouter
  .route("/channels/:channel_id/messages")
  .get(getMessagesByChannel)
  .post(postMessage);

module.exports = apiRouter;
