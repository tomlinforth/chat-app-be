const {
  channelData,
  userData,
  messagesData,
  channelPerms
} = require("../data/index");
const { makeRefObj, formatChannelPerms } = require("../utils/utils");

exports.seed = knex => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      const insertChannelData = knex("channels")
        .insert(channelData)
        .returning("*");
      const insertUserData = knex("users").insert(userData);
      const insertMessageData = knex("messages").insert(messagesData);
      return Promise.all([
        insertChannelData,
        insertMessageData,
        insertUserData
      ]);
    })
    .then(([channelRows]) => {
      const formattedChannels = formatChannelPerms(
        channelPerms,
        makeRefObj(channelRows)
      );
      return knex("channelperms").insert(formattedChannels);
    });
};
