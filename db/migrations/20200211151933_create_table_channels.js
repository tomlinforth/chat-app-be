exports.up = function(knex) {
  return knex.schema.createTable("channels", channelTable => {
    channelTable.increments("channel_id");
    channelTable.string("channel_name").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("channels");
};
