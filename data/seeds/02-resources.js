
exports.seed = function(knex) {
 // Inserts seed entries
      return knex('table_name').insert([
        {
          description: 'asus laptop'
        },
        {
          description: 'Coding Journal'
        },
        {
          description: 'Galaxy s8 smarthphone'
        },
        {
          description: 'Austin Slack team'
        },
        {
          description: 'Extra hours'
        },
        {
          description: 'Lambda school build week project list webpage'
        },
      ]);
};
