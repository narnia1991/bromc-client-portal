
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          "first_name": "Ramos",
          "last_name": "Kirk",
          "email": "ramos.kirk@yondu.com",
          "is_active": 1
        },
        {
          "first_name": "Brown",
          "last_name": "Ashley",
          "email": "brown.ashley@yondu.com",
          "is_active": 1
        },
        {
          "first_name": "Hill",
          "last_name": "Mcdaniel",
          "email": "hill.mcdaniel@yondu.com",
          "is_active": 0
        }
      ]);
    });
};
