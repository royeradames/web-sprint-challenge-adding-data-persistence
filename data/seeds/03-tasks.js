
exports.seed = function(knex) {
  // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'Go to the lambda page for build week choice',
          project_id: 5,
          step: 1
        },
        {
          description: 'pick a project that I have not completed',
          project_id: 5,
          step: 2
        },
        {
          description: 'start applying everything I know so far to get MVP.',
          project_id: 5,
          step: 3,

        },
        {
          description: 'Pick a project to focus on',
          project_id: 2,
          step: 1,
        },
      ]);
};
