exports.up = function(knex) {
  return knex.schema.createTable("messages", messagesTable => {
    messagesTable.increments("message_id");
    messagesTable
      .string("author")
      .references("users.username")
      .notNullable();
    messagesTable
      .integer("channel_id")
      .references("channels.channel_id")
      .notNullable();
    messagesTable.text("body").notNullable();
    messagesTable.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("messages");
};
