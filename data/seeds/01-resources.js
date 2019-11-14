exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        { name: "resource1", description: "r1 description" },
        { name: "resource2", description: "r2 description" },
        { name: "resource3", description: "r3 description" }
      ]);
    });
};
