/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-24T02:44:37+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T14:19:22+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user').insert([
        {
          user_info_id: 1,
          username: 'taylornewman@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Taylor Newman',
          role: 'client',
          status: 'deactivated',
          date_created: '1/22/2014',
          date_updated: '1/22/2014'
        },
        {
          user_info_id: 2,
          username: 'karinacochran@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Karina Cochran',
          role: 'reception',
          status: 'active',
          date_created: '1/6/2014',
          date_updated: '1/6/2014'
        },
        {
          user_info_id: 3,
          username: 'harriettboone@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Harriett Boone',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '9/9/2011',
          date_updated: '9/9/2011'
        },
        {
          user_info_id: 4,
          username: 'montoyaoliver@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Montoya Oliver',
          role: 'client',
          status: 'deactivated',
          date_created: '9/17/2017',
          date_updated: '9/17/2017'
        },
        {
          user_info_id: 5,
          username: 'genevieveodom@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Genevieve Odom',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2/26/2017',
          date_updated: '2/26/2017'
        },
        {
          user_info_id: 6,
          username: 'karinmaddox@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Karin Maddox',
          role: 'client',
          status: 'disabled',
          date_created: '8/26/2011',
          date_updated: '8/26/2011'
        },
        {
          user_info_id: 7,
          username: 'adapotter@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ada Potter',
          role: 'client',
          status: 'hardlocked',
          date_created: '8/29/2013',
          date_updated: '8/29/2013'
        },
        {
          user_info_id: 8,
          username: 'fletchercombs@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Fletcher Combs',
          role: 'admin',
          status: 'deactivated',
          date_created: '10/25/2012',
          date_updated: '10/25/2012'
        },
        {
          user_info_id: 9,
          username: 'mcguirecabrera@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mcguire Cabrera',
          role: 'admin',
          status: 'deactivated',
          date_created: '7/4/2010',
          date_updated: '7/4/2010'
        },
        {
          user_info_id: 10,
          username: 'addiebradford@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Addie Bradford',
          role: 'client',
          status: 'temporary',
          date_created: '6/12/2017',
          date_updated: '6/12/2017'
        },
        {
          user_info_id: 11,
          username: 'augustagraham@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Augusta Graham',
          role: 'therapist',
          status: 'active',
          date_created: '8/9/2013',
          date_updated: '8/9/2013'
        },
        {
          user_info_id: 12,
          username: 'chrystalvega@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Chrystal Vega',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '12/8/2017',
          date_updated: '12/8/2017'
        },
        {
          user_info_id: 13,
          username: 'cobblarsen@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Cobb Larsen',
          role: 'reception',
          status: 'disabled',
          date_created: '11/23/2017',
          date_updated: '11/23/2017'
        },
        {
          user_info_id: 14,
          username: 'audraflores@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Audra Flores',
          role: 'client',
          status: 'active',
          date_created: '3/18/2015',
          date_updated: '3/18/2015'
        },
        {
          user_info_id: 15,
          username: 'mackespinoza@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mack Espinoza',
          role: 'admin',
          status: 'temporary',
          date_created: '6/21/2014',
          date_updated: '6/21/2014'
        },
        {
          user_info_id: 16,
          username: 'bobbibridges@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Bobbi Bridges',
          role: 'therapist',
          status: 'temporary',
          date_created: '3/24/2015',
          date_updated: '3/24/2015'
        },
        {
          user_info_id: 17,
          username: 'thelmapollard@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Thelma Pollard',
          role: 'client',
          status: 'deactivated',
          date_created: '9/29/2013',
          date_updated: '9/29/2013'
        },
        {
          user_info_id: 18,
          username: 'meghansnider@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Meghan Snider',
          role: 'client',
          status: 'deactivated',
          date_created: '6/16/2013',
          date_updated: '6/16/2013'
        },
        {
          user_info_id: 19,
          username: 'sarahhoffman@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sarah Hoffman',
          role: 'admin',
          status: 'disabled',
          date_created: '7/16/2017',
          date_updated: '7/16/2017'
        },
        {
          user_info_id: 20,
          username: 'stevensbaxter@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Stevens Baxter',
          role: 'client',
          status: 'active',
          date_created: '3/29/2015',
          date_updated: '3/29/2015'
        },
        {
          user_info_id: 21,
          username: 'juanafuller@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Juana Fuller',
          role: 'reception',
          status: 'deactivated',
          date_created: '2/4/2014',
          date_updated: '2/4/2014'
        },
        {
          user_info_id: 22,
          username: 'lorainethomas@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Loraine Thomas',
          role: 'client',
          status: 'deactivated',
          date_created: '10/13/2015',
          date_updated: '10/13/2015'
        },
        {
          user_info_id: 23,
          username: 'deirdremcclain@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Deirdre Mcclain',
          role: 'client',
          status: 'temporary',
          date_created: '3/10/2014',
          date_updated: '3/10/2014'
        },
        {
          user_info_id: 24,
          username: 'leliaburris@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lelia Burris',
          role: 'admin',
          status: 'disabled',
          date_created: '5/16/2013',
          date_updated: '5/16/2013'
        },
        {
          user_info_id: 25,
          username: 'owensmcleod@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Owens Mcleod',
          role: 'admin',
          status: 'active',
          date_created: '4/27/2017',
          date_updated: '4/27/2017'
        },
        {
          user_info_id: 26,
          username: 'valenzuelaroth@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Valenzuela Roth',
          role: 'client',
          status: 'active',
          date_created: '1/11/2014',
          date_updated: '1/11/2014'
        },
        {
          user_info_id: 27,
          username: 'angelaowens@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Angela Owens',
          role: 'therapist',
          status: 'active',
          date_created: '3/24/2011',
          date_updated: '3/24/2011'
        },
        {
          user_info_id: 28,
          username: 'daughertydowns@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Daugherty Downs',
          role: 'admin',
          status: 'temporary',
          date_created: '9/29/2010',
          date_updated: '9/29/2010'
        },
        {
          user_info_id: 29,
          username: 'pagemaxwell@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Page Maxwell',
          role: 'admin',
          status: 'softlocked',
          date_created: '2/21/2016',
          date_updated: '2/21/2016'
        },
        {
          user_info_id: 30,
          username: 'barberkerr@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Barber Kerr',
          role: 'therapist',
          status: 'softlocked',
          date_created: '6/1/2014',
          date_updated: '6/1/2014'
        },
        {
          user_info_id: 31,
          username: 'dotsonholland@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Dotson Holland',
          role: 'client',
          status: 'disabled',
          date_created: '10/16/2010',
          date_updated: '10/16/2010'
        },
        {
          user_info_id: 32,
          username: 'karynleon@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Karyn Leon',
          role: 'reception',
          status: 'softlocked',
          date_created: '12/16/2011',
          date_updated: '12/16/2011'
        },
        {
          user_info_id: 33,
          username: 'elvirasolomon@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Elvira Solomon',
          role: 'reception',
          status: 'deactivated',
          date_created: '12/28/2011',
          date_updated: '12/28/2011'
        },
        {
          user_info_id: 34,
          username: 'cookemullins@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Cooke Mullins',
          role: 'reception',
          status: 'deactivated',
          date_created: '5/10/2014',
          date_updated: '5/10/2014'
        },
        {
          user_info_id: 35,
          username: 'margretstone@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Margret Stone',
          role: 'client',
          status: 'active',
          date_created: '11/30/2016',
          date_updated: '11/30/2016'
        },
        {
          user_info_id: 36,
          username: 'jennyfrederick@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jenny Frederick',
          role: 'admin',
          status: 'disabled',
          date_created: '9/11/2011',
          date_updated: '9/11/2011'
        },
        {
          user_info_id: 37,
          username: 'nashoneil@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Nash Oneil',
          role: 'client',
          status: 'softlocked',
          date_created: '10/24/2016',
          date_updated: '10/24/2016'
        },
        {
          user_info_id: 38,
          username: 'salliejones@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sallie Jones',
          role: 'admin',
          status: 'softlocked',
          date_created: '12/16/2013',
          date_updated: '12/16/2013'
        },
        {
          user_info_id: 39,
          username: 'rosariopacheco@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Rosario Pacheco',
          role: 'client',
          status: 'disabled',
          date_created: '1/12/2011',
          date_updated: '1/12/2011'
        },
        {
          user_info_id: 40,
          username: 'irmaflores@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Irma Flores',
          role: 'therapist',
          status: 'active',
          date_created: '4/8/2016',
          date_updated: '4/8/2016'
        },
        {
          user_info_id: 41,
          username: 'thorntonlevine@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Thornton Levine',
          role: 'reception',
          status: 'deactivated',
          date_created: '5/30/2011',
          date_updated: '5/30/2011'
        },
        {
          user_info_id: 42,
          username: 'barnettbird@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Barnett Bird',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2/18/2012',
          date_updated: '2/18/2012'
        },
        {
          user_info_id: 43,
          username: 'brookevasquez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Brooke Vasquez',
          role: 'therapist',
          status: 'deactivated',
          date_created: '1/8/2013',
          date_updated: '1/8/2013'
        },
        {
          user_info_id: 44,
          username: 'munozberger@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Munoz Berger',
          role: 'admin',
          status: 'active',
          date_created: '7/5/2016',
          date_updated: '7/5/2016'
        },
        {
          user_info_id: 45,
          username: 'whitakerbruce@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Whitaker Bruce',
          role: 'client',
          status: 'disabled',
          date_created: '5/1/2015',
          date_updated: '5/1/2015'
        },
        {
          user_info_id: 46,
          username: 'liliacombs@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lilia Combs',
          role: 'client',
          status: 'deactivated',
          date_created: '7/31/2016',
          date_updated: '7/31/2016'
        },
        {
          user_info_id: 47,
          username: 'bakermay@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Baker May',
          role: 'client',
          status: 'active',
          date_created: '4/10/2010',
          date_updated: '4/10/2010'
        },
        {
          user_info_id: 48,
          username: 'elnoradaniel@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Elnora Daniel',
          role: 'admin',
          status: 'temporary',
          date_created: '5/30/2017',
          date_updated: '5/30/2017'
        },
        {
          user_info_id: 49,
          username: 'allysondelgado@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Allyson Delgado',
          role: 'therapist',
          status: 'disabled',
          date_created: '1/30/2012',
          date_updated: '1/30/2012'
        },
        {
          user_info_id: 50,
          username: 'nadinemunoz@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Nadine Munoz',
          role: 'admin',
          status: 'hardlocked',
          date_created: '7/21/2013',
          date_updated: '7/21/2013'
        },
        {
          user_info_id: 51,
          username: 'candicetillman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Candice Tillman',
          role: 'client',
          status: 'active',
          date_created: '11/20/2017',
          date_updated: '11/20/2017'
        },
        {
          user_info_id: 52,
          username: 'lorenerichard@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lorene Richard',
          role: 'reception',
          status: 'temporary',
          date_created: '3/7/2014',
          date_updated: '3/7/2014'
        },
        {
          user_info_id: 53,
          username: 'elbakennedy@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Elba Kennedy',
          role: 'admin',
          status: 'disabled',
          date_created: '9/13/2011',
          date_updated: '9/13/2011'
        },
        {
          user_info_id: 54,
          username: 'patricabean@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Patrica Bean',
          role: 'admin',
          status: 'deactivated',
          date_created: '10/26/2016',
          date_updated: '10/26/2016'
        },
        {
          user_info_id: 55,
          username: 'aguilarchang@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Aguilar Chang',
          role: 'reception',
          status: 'deactivated',
          date_created: '5/11/2014',
          date_updated: '5/11/2014'
        },
        {
          user_info_id: 56,
          username: 'macdonaldcochran@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Macdonald Cochran',
          role: 'reception',
          status: 'softlocked',
          date_created: '6/7/2016',
          date_updated: '6/7/2016'
        },
        {
          user_info_id: 57,
          username: 'tashadavis@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Tasha Davis',
          role: 'therapist',
          status: 'temporary',
          date_created: '2/15/2014',
          date_updated: '2/15/2014'
        },
        {
          user_info_id: 58,
          username: 'kanereid@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Kane Reid',
          role: 'reception',
          status: 'hardlocked',
          date_created: '3/31/2014',
          date_updated: '3/31/2014'
        },
        {
          user_info_id: 59,
          username: 'victoriaduke@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Victoria Duke',
          role: 'admin',
          status: 'softlocked',
          date_created: '11/26/2017',
          date_updated: '11/26/2017'
        },
        {
          user_info_id: 60,
          username: 'caseygibson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Casey Gibson',
          role: 'client',
          status: 'hardlocked',
          date_created: '9/28/2015',
          date_updated: '9/28/2015'
        },
        {
          user_info_id: 61,
          username: 'jimenezwatkins@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jimenez Watkins',
          role: 'admin',
          status: 'hardlocked',
          date_created: '6/25/2012',
          date_updated: '6/25/2012'
        },
        {
          user_info_id: 62,
          username: 'barkervelasquez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Barker Velasquez',
          role: 'admin',
          status: 'softlocked',
          date_created: '12/25/2013',
          date_updated: '12/25/2013'
        },
        {
          user_info_id: 63,
          username: 'mayratrujillo@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mayra Trujillo',
          role: 'therapist',
          status: 'disabled',
          date_created: '3/30/2014',
          date_updated: '3/30/2014'
        },
        {
          user_info_id: 64,
          username: 'roblesmurphy@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Robles Murphy',
          role: 'admin',
          status: 'active',
          date_created: '3/17/2017',
          date_updated: '3/17/2017'
        },
        {
          user_info_id: 65,
          username: 'haleyelliott@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Haley Elliott',
          role: 'client',
          status: 'deactivated',
          date_created: '8/20/2015',
          date_updated: '8/20/2015'
        },
        {
          user_info_id: 66,
          username: 'lilliealvarado@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lillie Alvarado',
          role: 'client',
          status: 'disabled',
          date_created: '11/23/2011',
          date_updated: '11/23/2011'
        },
        {
          user_info_id: 67,
          username: 'cristinacastillo@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Cristina Castillo',
          role: 'client',
          status: 'temporary',
          date_created: '3/15/2015',
          date_updated: '3/15/2015'
        },
        {
          user_info_id: 68,
          username: 'nevastanley@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Neva Stanley',
          role: 'therapist',
          status: 'softlocked',
          date_created: '8/1/2017',
          date_updated: '8/1/2017'
        },
        {
          user_info_id: 69,
          username: 'annierosario@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Annie Rosario',
          role: 'admin',
          status: 'temporary',
          date_created: '1/16/2015',
          date_updated: '1/16/2015'
        },
        {
          user_info_id: 70,
          username: 'ewinghumphrey@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ewing Humphrey',
          role: 'reception',
          status: 'temporary',
          date_created: '6/28/2015',
          date_updated: '6/28/2015'
        },
        {
          user_info_id: 71,
          username: 'ivamueller@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Iva Mueller',
          role: 'admin',
          status: 'temporary',
          date_created: '7/16/2016',
          date_updated: '7/16/2016'
        },
        {
          user_info_id: 72,
          username: 'kempbryant@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Kemp Bryant',
          role: 'reception',
          status: 'disabled',
          date_created: '10/21/2014',
          date_updated: '10/21/2014'
        },
        {
          user_info_id: 73,
          username: 'paulineemerson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Pauline Emerson',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2/26/2012',
          date_updated: '2/26/2012'
        },
        {
          user_info_id: 74,
          username: 'deloreskaufman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Delores Kaufman',
          role: 'reception',
          status: 'disabled',
          date_created: '7/7/2017',
          date_updated: '7/7/2017'
        },
        {
          user_info_id: 75,
          username: 'hahnbernard@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Hahn Bernard',
          role: 'therapist',
          status: 'softlocked',
          date_created: '9/22/2010',
          date_updated: '9/22/2010'
        },
        {
          user_info_id: 76,
          username: 'duffygregory@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Duffy Gregory',
          role: 'therapist',
          status: 'deactivated',
          date_created: '3/22/2014',
          date_updated: '3/22/2014'
        },
        {
          user_info_id: 77,
          username: 'stricklandodom@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Strickland Odom',
          role: 'admin',
          status: 'temporary',
          date_created: '9/6/2013',
          date_updated: '9/6/2013'
        },
        {
          user_info_id: 78,
          username: 'pattycruz@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Patty Cruz',
          role: 'reception',
          status: 'softlocked',
          date_created: '8/21/2012',
          date_updated: '8/21/2012'
        },
        {
          user_info_id: 79,
          username: 'dillonwitt@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Dillon Witt',
          role: 'therapist',
          status: 'active',
          date_created: '9/29/2013',
          date_updated: '9/29/2013'
        },
        {
          user_info_id: 80,
          username: 'gaymccarty@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gay Mccarty',
          role: 'admin',
          status: 'disabled',
          date_created: '3/20/2011',
          date_updated: '3/20/2011'
        },
        {
          user_info_id: 81,
          username: 'riceklein@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Rice Klein',
          role: 'therapist',
          status: 'deactivated',
          date_created: '5/6/2014',
          date_updated: '5/6/2014'
        },
        {
          user_info_id: 82,
          username: 'bridgettedecker@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Bridgette Decker',
          role: 'reception',
          status: 'softlocked',
          date_created: '5/6/2016',
          date_updated: '5/6/2016'
        },
        {
          user_info_id: 83,
          username: 'gretahickman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Greta Hickman',
          role: 'client',
          status: 'active',
          date_created: '1/5/2017',
          date_updated: '1/5/2017'
        },
        {
          user_info_id: 84,
          username: 'wilkinsoneverett@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Wilkinson Everett',
          role: 'admin',
          status: 'softlocked',
          date_created: '4/30/2014',
          date_updated: '4/30/2014'
        },
        {
          user_info_id: 85,
          username: 'briggsdaniels@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Briggs Daniels',
          role: 'reception',
          status: 'softlocked',
          date_created: '6/12/2010',
          date_updated: '6/12/2010'
        },
        {
          user_info_id: 86,
          username: 'savannahjoseph@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Savannah Joseph',
          role: 'admin',
          status: 'deactivated',
          date_created: '2/5/2010',
          date_updated: '2/5/2010'
        },
        {
          user_info_id: 87,
          username: 'mcculloughpate@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mccullough Pate',
          role: 'reception',
          status: 'softlocked',
          date_created: '6/21/2010',
          date_updated: '6/21/2010'
        },
        {
          user_info_id: 88,
          username: 'bridgesford@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Bridges Ford',
          role: 'admin',
          status: 'temporary',
          date_created: '5/28/2014',
          date_updated: '5/28/2014'
        },
        {
          user_info_id: 89,
          username: 'edwardscantrell@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Edwards Cantrell',
          role: 'therapist',
          status: 'active',
          date_created: '4/19/2012',
          date_updated: '4/19/2012'
        },
        {
          user_info_id: 90,
          username: 'marionmeyers@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Marion Meyers',
          role: 'therapist',
          status: 'disabled',
          date_created: '2/14/2014',
          date_updated: '2/14/2014'
        },
        {
          user_info_id: 91,
          username: 'christinecleveland@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Christine Cleveland',
          role: 'client',
          status: 'softlocked',
          date_created: '3/28/2016',
          date_updated: '3/28/2016'
        },
        {
          user_info_id: 92,
          username: 'sosakoch@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sosa Koch',
          role: 'therapist',
          status: 'disabled',
          date_created: '12/28/2016',
          date_updated: '12/28/2016'
        },
        {
          user_info_id: 93,
          username: 'silvanavarro@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Silva Navarro',
          role: 'therapist',
          status: 'softlocked',
          date_created: '12/4/2013',
          date_updated: '12/4/2013'
        },
        {
          user_info_id: 94,
          username: 'parkervelez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Parker Velez',
          role: 'admin',
          status: 'temporary',
          date_created: '10/10/2011',
          date_updated: '10/10/2011'
        },
        {
          user_info_id: 95,
          username: 'augustaedwards@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Augusta Edwards',
          role: 'client',
          status: 'disabled',
          date_created: '11/21/2013',
          date_updated: '11/21/2013'
        },
        {
          user_info_id: 96,
          username: 'halealexander@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Hale Alexander',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '8/17/2017',
          date_updated: '8/17/2017'
        },
        {
          user_info_id: 97,
          username: 'stacijimenez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Staci Jimenez',
          role: 'reception',
          status: 'deactivated',
          date_created: '6/7/2012',
          date_updated: '6/7/2012'
        },
        {
          user_info_id: 98,
          username: 'watsonmiles@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Watson Miles',
          role: 'client',
          status: 'hardlocked',
          date_created: '4/9/2012',
          date_updated: '4/9/2012'
        },
        {
          user_info_id: 99,
          username: 'kathrinemorse@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Kathrine Morse',
          role: 'client',
          status: 'active',
          date_created: '4/24/2012',
          date_updated: '4/24/2012'
        },
        {
          user_info_id: 100,
          username: 'lourdesriggs@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lourdes Riggs',
          role: 'therapist',
          status: 'deactivated',
          date_created: '10/23/2012',
          date_updated: '10/23/2012'
        },
        {
          user_info_id: 101,
          username: 'jasminepittman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jasmine Pittman',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '9/19/2013',
          date_updated: '9/19/2013'
        },
        {
          user_info_id: 102,
          username: 'nicholsonrichards@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Nicholson Richards',
          role: 'client',
          status: 'softlocked',
          date_created: '7/24/2015',
          date_updated: '7/24/2015'
        },
        {
          user_info_id: 103,
          username: 'annmariemejia@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Annmarie Mejia',
          role: 'admin',
          status: 'disabled',
          date_created: '7/28/2016',
          date_updated: '7/28/2016'
        },
        {
          user_info_id: 104,
          username: 'goodmanzamora@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Goodman Zamora',
          role: 'therapist',
          status: 'softlocked',
          date_created: '12/17/2010',
          date_updated: '12/17/2010'
        },
        {
          user_info_id: 105,
          username: 'youngpeterson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Young Peterson',
          role: 'admin',
          status: 'deactivated',
          date_created: '4/15/2015',
          date_updated: '4/15/2015'
        },
        {
          user_info_id: 106,
          username: 'staffordtorres@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Stafford Torres',
          role: 'therapist',
          status: 'active',
          date_created: '10/30/2011',
          date_updated: '10/30/2011'
        },
        {
          user_info_id: 107,
          username: 'currylittle@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Curry Little',
          role: 'reception',
          status: 'disabled',
          date_created: '4/9/2013',
          date_updated: '4/9/2013'
        },
        {
          user_info_id: 108,
          username: 'alicialevy@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Alicia Levy',
          role: 'admin',
          status: 'temporary',
          date_created: '7/24/2014',
          date_updated: '7/24/2014'
        },
        {
          user_info_id: 109,
          username: 'jacquelynmoran@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jacquelyn Moran',
          role: 'client',
          status: 'deactivated',
          date_created: '5/11/2017',
          date_updated: '5/11/2017'
        },
        {
          user_info_id: 110,
          username: 'charleneturner@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Charlene Turner',
          role: 'client',
          status: 'active',
          date_created: '3/25/2013',
          date_updated: '3/25/2013'
        },
        {
          user_info_id: 111,
          username: 'gretchenholmes@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gretchen Holmes',
          role: 'client',
          status: 'hardlocked',
          date_created: '3/13/2016',
          date_updated: '3/13/2016'
        },
        {
          user_info_id: 112,
          username: 'mabeldouglas@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mabel Douglas',
          role: 'admin',
          status: 'active',
          date_created: '8/29/2010',
          date_updated: '8/29/2010'
        },
        {
          user_info_id: 113,
          username: 'selenapugh@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Selena Pugh',
          role: 'therapist',
          status: 'active',
          date_created: '11/18/2011',
          date_updated: '11/18/2011'
        },
        {
          user_info_id: 114,
          username: 'romanjenkins@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Roman Jenkins',
          role: 'therapist',
          status: 'disabled',
          date_created: '9/30/2013',
          date_updated: '9/30/2013'
        },
        {
          user_info_id: 115,
          username: 'thelmaochoa@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Thelma Ochoa',
          role: 'reception',
          status: 'hardlocked',
          date_created: '12/13/2013',
          date_updated: '12/13/2013'
        },
        {
          user_info_id: 116,
          username: 'georgialivingston@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Georgia Livingston',
          role: 'therapist',
          status: 'disabled',
          date_created: '8/19/2014',
          date_updated: '8/19/2014'
        },
        {
          user_info_id: 117,
          username: 'montgomerygross@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Montgomery Gross',
          role: 'reception',
          status: 'disabled',
          date_created: '12/23/2012',
          date_updated: '12/23/2012'
        },
        {
          user_info_id: 118,
          username: 'maddendawson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Madden Dawson',
          role: 'admin',
          status: 'hardlocked',
          date_created: '6/4/2015',
          date_updated: '6/4/2015'
        },
        {
          user_info_id: 119,
          username: 'shawnahenry@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Shawna Henry',
          role: 'reception',
          status: 'active',
          date_created: '8/4/2011',
          date_updated: '8/4/2011'
        },
        {
          user_info_id: 120,
          username: 'markspoole@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Marks Poole',
          role: 'therapist',
          status: 'temporary',
          date_created: '6/14/2016',
          date_updated: '6/14/2016'
        },
        {
          user_info_id: 121,
          username: 'gaylenewman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gayle Newman',
          role: 'admin',
          status: 'deactivated',
          date_created: '11/4/2016',
          date_updated: '11/4/2016'
        },
        {
          user_info_id: 122,
          username: 'buckleymendoza@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Buckley Mendoza',
          role: 'client',
          status: 'disabled',
          date_created: '9/29/2011',
          date_updated: '9/29/2011'
        },
        {
          user_info_id: 123,
          username: 'dicksonbishop@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Dickson Bishop',
          role: 'therapist',
          status: 'active',
          date_created: '2/24/2012',
          date_updated: '2/24/2012'
        },
        {
          user_info_id: 124,
          username: 'raykemp@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ray Kemp',
          role: 'client',
          status: 'softlocked',
          date_created: '4/21/2017',
          date_updated: '4/21/2017'
        },
        {
          user_info_id: 125,
          username: 'boothwillis@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Booth Willis',
          role: 'admin',
          status: 'active',
          date_created: '11/5/2016',
          date_updated: '11/5/2016'
        },
        {
          user_info_id: 126,
          username: 'jonigould@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Joni Gould',
          role: 'therapist',
          status: 'softlocked',
          date_created: '8/28/2016',
          date_updated: '8/28/2016'
        },
        {
          user_info_id: 127,
          username: 'donnariley@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Donna Riley',
          role: 'client',
          status: 'temporary',
          date_created: '7/3/2017',
          date_updated: '7/3/2017'
        },
        {
          user_info_id: 128,
          username: 'caldwellhogan@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Caldwell Hogan',
          role: 'therapist',
          status: 'deactivated',
          date_created: '12/18/2016',
          date_updated: '12/18/2016'
        },
        {
          user_info_id: 129,
          username: 'potterhurley@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Potter Hurley',
          role: 'reception',
          status: 'hardlocked',
          date_created: '9/21/2011',
          date_updated: '9/21/2011'
        },
        {
          user_info_id: 130,
          username: 'evelynsimmons@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Evelyn Simmons',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2/28/2010',
          date_updated: '2/28/2010'
        },
        {
          user_info_id: 131,
          username: 'ladonnanolan@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ladonna Nolan',
          role: 'client',
          status: 'temporary',
          date_created: '9/4/2013',
          date_updated: '9/4/2013'
        },
        {
          user_info_id: 132,
          username: 'gilbertbrock@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gilbert Brock',
          role: 'admin',
          status: 'hardlocked',
          date_created: '12/24/2012',
          date_updated: '12/24/2012'
        },
        {
          user_info_id: 133,
          username: 'gibbsdunlap@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gibbs Dunlap',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '4/28/2015',
          date_updated: '4/28/2015'
        },
        {
          user_info_id: 134,
          username: 'watkinsblanchard@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Watkins Blanchard',
          role: 'reception',
          status: 'deactivated',
          date_created: '4/26/2012',
          date_updated: '4/26/2012'
        },
        {
          user_info_id: 135,
          username: 'mamierush@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mamie Rush',
          role: 'client',
          status: 'active',
          date_created: '2/18/2014',
          date_updated: '2/18/2014'
        },
        {
          user_info_id: 136,
          username: 'adelamckee@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Adela Mckee',
          role: 'client',
          status: 'disabled',
          date_created: '8/21/2014',
          date_updated: '8/21/2014'
        },
        {
          user_info_id: 137,
          username: 'carissariddle@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Carissa Riddle',
          role: 'admin',
          status: 'softlocked',
          date_created: '7/25/2012',
          date_updated: '7/25/2012'
        },
        {
          user_info_id: 138,
          username: 'martareynolds@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Marta Reynolds',
          role: 'client',
          status: 'active',
          date_created: '5/17/2010',
          date_updated: '5/17/2010'
        },
        {
          user_info_id: 139,
          username: 'copelandhurst@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Copeland Hurst',
          role: 'admin',
          status: 'hardlocked',
          date_created: '5/5/2017',
          date_updated: '5/5/2017'
        },
        {
          user_info_id: 140,
          username: 'juliannelarson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Julianne Larson',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '7/25/2013',
          date_updated: '7/25/2013'
        },
        {
          user_info_id: 141,
          username: 'sharleneparsons@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sharlene Parsons',
          role: 'client',
          status: 'deactivated',
          date_created: '7/11/2013',
          date_updated: '7/11/2013'
        },
        {
          user_info_id: 142,
          username: 'billiefowler@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Billie Fowler',
          role: 'client',
          status: 'softlocked',
          date_created: '11/25/2016',
          date_updated: '11/25/2016'
        },
        {
          user_info_id: 143,
          username: 'sheilahubbard@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sheila Hubbard',
          role: 'client',
          status: 'temporary',
          date_created: '10/24/2012',
          date_updated: '10/24/2012'
        },
        {
          user_info_id: 144,
          username: 'noellebowman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Noelle Bowman',
          role: 'client',
          status: 'temporary',
          date_created: '6/12/2014',
          date_updated: '6/12/2014'
        },
        {
          user_info_id: 145,
          username: 'elsiestephenson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Elsie Stephenson',
          role: 'client',
          status: 'softlocked',
          date_created: '9/11/2013',
          date_updated: '9/11/2013'
        },
        {
          user_info_id: 146,
          username: 'whitneygrimes@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Whitney Grimes',
          role: 'reception',
          status: 'disabled',
          date_created: '9/21/2015',
          date_updated: '9/21/2015'
        },
        {
          user_info_id: 147,
          username: 'madeleinewelch@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Madeleine Welch',
          role: 'reception',
          status: 'hardlocked',
          date_created: '3/2/2012',
          date_updated: '3/2/2012'
        },
        {
          user_info_id: 148,
          username: 'cathrynpuckett@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Cathryn Puckett',
          role: 'reception',
          status: 'deactivated',
          date_created: '3/23/2016',
          date_updated: '3/23/2016'
        },
        {
          user_info_id: 149,
          username: 'ortiztodd@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ortiz Todd',
          role: 'admin',
          status: 'deactivated',
          date_created: '9/2/2010',
          date_updated: '9/2/2010'
        },
        {
          user_info_id: 150,
          username: 'manuelaharvey@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Manuela Harvey',
          role: 'admin',
          status: 'temporary',
          date_created: '11/24/2015',
          date_updated: '11/24/2015'
        },
        {
          user_info_id: 151,
          username: 'gatesmorrison@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gates Morrison',
          role: 'client',
          status: 'disabled',
          date_created: '1/6/2015',
          date_updated: '1/6/2015'
        },
        {
          user_info_id: 152,
          username: 'bennetthenson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Bennett Henson',
          role: 'admin',
          status: 'deactivated',
          date_created: '12/5/2016',
          date_updated: '12/5/2016'
        },
        {
          user_info_id: 153,
          username: 'wagnerfox@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Wagner Fox',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '9/26/2015',
          date_updated: '9/26/2015'
        },
        {
          user_info_id: 154,
          username: 'aguirrelynn@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Aguirre Lynn',
          role: 'admin',
          status: 'temporary',
          date_created: '12/19/2013',
          date_updated: '12/19/2013'
        },
        {
          user_info_id: 155,
          username: 'madelinemckinney@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Madeline Mckinney',
          role: 'admin',
          status: 'active',
          date_created: '10/6/2013',
          date_updated: '10/6/2013'
        },
        {
          user_info_id: 156,
          username: 'katygardner@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Katy Gardner',
          role: 'client',
          status: 'disabled',
          date_created: '6/10/2012',
          date_updated: '6/10/2012'
        },
        {
          user_info_id: 157,
          username: 'lyonsfoster@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lyons Foster',
          role: 'reception',
          status: 'deactivated',
          date_created: '4/17/2011',
          date_updated: '4/17/2011'
        },
        {
          user_info_id: 158,
          username: 'justicemerrill@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Justice Merrill',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '10/15/2012',
          date_updated: '10/15/2012'
        },
        {
          user_info_id: 159,
          username: 'evangelinagonzalez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Evangelina Gonzalez',
          role: 'admin',
          status: 'hardlocked',
          date_created: '5/12/2014',
          date_updated: '5/12/2014'
        },
        {
          user_info_id: 160,
          username: 'melissaspears@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Melissa Spears',
          role: 'therapist',
          status: 'deactivated',
          date_created: '3/22/2017',
          date_updated: '3/22/2017'
        },
        {
          user_info_id: 161,
          username: 'hatfieldrobertson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Hatfield Robertson',
          role: 'reception',
          status: 'hardlocked',
          date_created: '9/14/2012',
          date_updated: '9/14/2012'
        },
        {
          user_info_id: 162,
          username: 'janbyers@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jan Byers',
          role: 'therapist',
          status: 'disabled',
          date_created: '12/8/2016',
          date_updated: '12/8/2016'
        },
        {
          user_info_id: 163,
          username: 'essiesuarez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Essie Suarez',
          role: 'admin',
          status: 'temporary',
          date_created: '12/26/2011',
          date_updated: '12/26/2011'
        },
        {
          user_info_id: 164,
          username: 'collinsgoff@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Collins Goff',
          role: 'client',
          status: 'temporary',
          date_created: '7/26/2015',
          date_updated: '7/26/2015'
        },
        {
          user_info_id: 165,
          username: 'gordonnoel@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gordon Noel',
          role: 'client',
          status: 'active',
          date_created: '7/30/2016',
          date_updated: '7/30/2016'
        },
        {
          user_info_id: 166,
          username: 'barryvinson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Barry Vinson',
          role: 'client',
          status: 'hardlocked',
          date_created: '2/27/2017',
          date_updated: '2/27/2017'
        },
        {
          user_info_id: 167,
          username: 'sullivanfinley@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sullivan Finley',
          role: 'therapist',
          status: 'active',
          date_created: '10/16/2013',
          date_updated: '10/16/2013'
        },
        {
          user_info_id: 168,
          username: 'mcleodmccormick@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mcleod Mccormick',
          role: 'client',
          status: 'disabled',
          date_created: '12/6/2015',
          date_updated: '12/6/2015'
        },
        {
          user_info_id: 169,
          username: 'danielsmorgan@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Daniels Morgan',
          role: 'client',
          status: 'active',
          date_created: '8/19/2016',
          date_updated: '8/19/2016'
        },
        {
          user_info_id: 170,
          username: 'kerryandrews@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Kerry Andrews',
          role: 'admin',
          status: 'hardlocked',
          date_created: '7/17/2014',
          date_updated: '7/17/2014'
        },
        {
          user_info_id: 171,
          username: 'lesterwilliamson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lester Williamson',
          role: 'therapist',
          status: 'deactivated',
          date_created: '7/3/2014',
          date_updated: '7/3/2014'
        },
        {
          user_info_id: 172,
          username: 'schroederburke@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Schroeder Burke',
          role: 'admin',
          status: 'softlocked',
          date_created: '8/25/2016',
          date_updated: '8/25/2016'
        },
        {
          user_info_id: 173,
          username: 'sybilwall@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sybil Wall',
          role: 'therapist',
          status: 'temporary',
          date_created: '12/7/2010',
          date_updated: '12/7/2010'
        },
        {
          user_info_id: 174,
          username: 'celestehowell@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Celeste Howell',
          role: 'reception',
          status: 'disabled',
          date_created: '4/22/2012',
          date_updated: '4/22/2012'
        },
        {
          user_info_id: 175,
          username: 'deanporter@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Dean Porter',
          role: 'reception',
          status: 'temporary',
          date_created: '6/18/2012',
          date_updated: '6/18/2012'
        },
        {
          user_info_id: 176,
          username: 'trujillocaldwell@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Trujillo Caldwell',
          role: 'reception',
          status: 'deactivated',
          date_created: '10/12/2015',
          date_updated: '10/12/2015'
        },
        {
          user_info_id: 177,
          username: 'englandvazquez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'England Vazquez',
          role: 'reception',
          status: 'temporary',
          date_created: '5/30/2011',
          date_updated: '5/30/2011'
        },
        {
          user_info_id: 178,
          username: 'abbylamb@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Abby Lamb',
          role: 'therapist',
          status: 'active',
          date_created: '6/6/2015',
          date_updated: '6/6/2015'
        },
        {
          user_info_id: 179,
          username: 'myradickerson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Myra Dickerson',
          role: 'client',
          status: 'disabled',
          date_created: '5/13/2015',
          date_updated: '5/13/2015'
        },
        {
          user_info_id: 180,
          username: 'lolablankenship@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lola Blankenship',
          role: 'reception',
          status: 'disabled',
          date_created: '10/10/2011',
          date_updated: '10/10/2011'
        }
      ])
    })
}
