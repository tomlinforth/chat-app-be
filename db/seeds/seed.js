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
      return Promise.all([insertChannelData, insertUserData]);
    })
    .then(([channelRows]) => {
      const formattedChannels = formatChannelPerms(
        channelPerms,
        makeRefObj(channelRows)
      );
      const insertMessageData = knex("messages").insert(messagesData);
      const insertChannelPerms = knex("channelperms").insert(formattedChannels);
      return Promise.all([insertMessageData, insertChannelPerms]);
    });
};
