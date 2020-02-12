exports.up = function(knex) {
  return knex.schema.createTable("channelperms", channelPermsTable => {
    channelPermsTable.increments("id");
    channelPermsTable.string("username").references("users.username");
    channelPermsTable.integer("channel_id").references("channels.channel_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("channelperms");
};
