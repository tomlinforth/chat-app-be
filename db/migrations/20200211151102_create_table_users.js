exports.up = function(knex) {
  return knex.schema.createTable("users", usersTable => {
    usersTable
      .string("username")
      .unique()
      .primary()
      .notNullable();
    usersTable.string("password").notNullable();
    usersTable.string("name").notNullable();
    usersTable
      .string("avatar-url")
      .defaultTo(
        "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
      );
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
