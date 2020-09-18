
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('projects').insert([
    { project_name: 'Web persistent data sprint' },
    { project_name: 'Foundatamentals of UX design' },
    { project_name: 'RoyerAdamesPorfolio.com uptemize' },
    { project_name: 'Build front end for all Lambda projects API' },
    {
      project_name: 'extra projects: building a backend for all the build week lambda projects',
      description: 'What do to has an extra project? Good question. Here is an answer, do the build week early with my current skills. Why? It levels you up faster.'
    },
  ]);
};
