/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-24T02:44:37+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T16:40:01+08:00
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
          role: 'admin',
          status: 'deactivated',
          date_created: '2014/07/25',
          date_updated: '2014/07/25'
        },
        {
          user_info_id: 2,
          username: 'karinacochran@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Karina Cochran',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2012/05/01',
          date_updated: '2012/05/01'
        },
        {
          user_info_id: 3,
          username: 'harriettboone@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Harriett Boone',
          role: 'admin',
          status: 'disabled',
          date_created: '2014/07/19',
          date_updated: '2014/07/19'
        },
        {
          user_info_id: 4,
          username: 'montoyaoliver@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Montoya Oliver',
          role: 'client',
          status: 'temporary',
          date_created: '2016/06/13',
          date_updated: '2016/06/13'
        },
        {
          user_info_id: 5,
          username: 'genevieveodom@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Genevieve Odom',
          role: 'therapist',
          status: 'temporary',
          date_created: '2012/04/27',
          date_updated: '2012/04/27'
        },
        {
          user_info_id: 6,
          username: 'karinmaddox@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Karin Maddox',
          role: 'client',
          status: 'disabled',
          date_created: '2014/05/31',
          date_updated: '2014/05/31'
        },
        {
          user_info_id: 7,
          username: 'adapotter@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ada Potter',
          role: 'client',
          status: 'active',
          date_created: '2016/11/06',
          date_updated: '2016/11/06'
        },
        {
          user_info_id: 8,
          username: 'fletchercombs@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Fletcher Combs',
          role: 'client',
          status: 'hardlocked',
          date_created: '2013/02/26',
          date_updated: '2013/02/26'
        },
        {
          user_info_id: 9,
          username: 'mcguirecabrera@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mcguire Cabrera',
          role: 'therapist',
          status: 'disabled',
          date_created: '2014/06/07',
          date_updated: '2014/06/07'
        },
        {
          user_info_id: 10,
          username: 'addiebradford@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Addie Bradford',
          role: 'client',
          status: 'temporary',
          date_created: '2017/07/18',
          date_updated: '2017/07/18'
        },
        {
          user_info_id: 11,
          username: 'augustagraham@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Augusta Graham',
          role: 'client',
          status: 'softlocked',
          date_created: '2017/11/17',
          date_updated: '2017/11/17'
        },
        {
          user_info_id: 12,
          username: 'chrystalvega@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Chrystal Vega',
          role: 'therapist',
          status: 'temporary',
          date_created: '2010/08/26',
          date_updated: '2010/08/26'
        },
        {
          user_info_id: 13,
          username: 'cobblarsen@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Cobb Larsen',
          role: 'client',
          status: 'disabled',
          date_created: '2016/12/28',
          date_updated: '2016/12/28'
        },
        {
          user_info_id: 14,
          username: 'audraflores@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Audra Flores',
          role: 'admin',
          status: 'active',
          date_created: '2012/01/26',
          date_updated: '2012/01/26'
        },
        {
          user_info_id: 15,
          username: 'mackespinoza@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mack Espinoza',
          role: 'client',
          status: 'hardlocked',
          date_created: '2011/11/08',
          date_updated: '2011/11/08'
        },
        {
          user_info_id: 16,
          username: 'bobbibridges@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Bobbi Bridges',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2010/02/03',
          date_updated: '2010/02/03'
        },
        {
          user_info_id: 17,
          username: 'thelmapollard@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Thelma Pollard',
          role: 'admin',
          status: 'disabled',
          date_created: '2015/05/17',
          date_updated: '2015/05/17'
        },
        {
          user_info_id: 18,
          username: 'meghansnider@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Meghan Snider',
          role: 'reception',
          status: 'softlocked',
          date_created: '2015/08/24',
          date_updated: '2015/08/24'
        },
        {
          user_info_id: 19,
          username: 'sarahhoffman@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sarah Hoffman',
          role: 'reception',
          status: 'deactivated',
          date_created: '2013/01/13',
          date_updated: '2013/01/13'
        },
        {
          user_info_id: 20,
          username: 'stevensbaxter@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Stevens Baxter',
          role: 'client',
          status: 'hardlocked',
          date_created: '2011/01/28',
          date_updated: '2011/01/28'
        },
        {
          user_info_id: 21,
          username: 'juanafuller@peticular.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Juana Fuller',
          role: 'client',
          status: 'hardlocked',
          date_created: '2017/09/07',
          date_updated: '2017/09/07'
        },
        {
          user_info_id: 22,
          username: 'lorainethomas@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Loraine Thomas',
          role: 'admin',
          status: 'softlocked',
          date_created: '2017/06/28',
          date_updated: '2017/06/28'
        },
        {
          user_info_id: 23,
          username: 'deirdremcclain@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Deirdre Mcclain',
          role: 'client',
          status: 'disabled',
          date_created: '2010/11/23',
          date_updated: '2010/11/23'
        },
        {
          user_info_id: 24,
          username: 'leliaburris@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lelia Burris',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2016/03/01',
          date_updated: '2016/03/01'
        },
        {
          user_info_id: 25,
          username: 'owensmcleod@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Owens Mcleod',
          role: 'client',
          status: 'active',
          date_created: '2017/01/25',
          date_updated: '2017/01/25'
        },
        {
          user_info_id: 26,
          username: 'valenzuelaroth@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Valenzuela Roth',
          role: 'reception',
          status: 'deactivated',
          date_created: '2014/09/02',
          date_updated: '2014/09/02'
        },
        {
          user_info_id: 27,
          username: 'angelaowens@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Angela Owens',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2016/12/14',
          date_updated: '2016/12/14'
        },
        {
          user_info_id: 28,
          username: 'daughertydowns@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Daugherty Downs',
          role: 'therapist',
          status: 'softlocked',
          date_created: '2012/11/09',
          date_updated: '2012/11/09'
        },
        {
          user_info_id: 29,
          username: 'pagemaxwell@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Page Maxwell',
          role: 'reception',
          status: 'disabled',
          date_created: '2015/02/25',
          date_updated: '2015/02/25'
        },
        {
          user_info_id: 30,
          username: 'barberkerr@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Barber Kerr',
          role: 'reception',
          status: 'softlocked',
          date_created: '2010/11/17',
          date_updated: '2010/11/17'
        },
        {
          user_info_id: 31,
          username: 'dotsonholland@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Dotson Holland',
          role: 'client',
          status: 'softlocked',
          date_created: '2016/06/24',
          date_updated: '2016/06/24'
        },
        {
          user_info_id: 32,
          username: 'karynleon@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Karyn Leon',
          role: 'admin',
          status: 'deactivated',
          date_created: '2014/08/22',
          date_updated: '2014/08/22'
        },
        {
          user_info_id: 33,
          username: 'elvirasolomon@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Elvira Solomon',
          role: 'therapist',
          status: 'disabled',
          date_created: '2017/11/19',
          date_updated: '2017/11/19'
        },
        {
          user_info_id: 34,
          username: 'cookemullins@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Cooke Mullins',
          role: 'client',
          status: 'softlocked',
          date_created: '2013/05/07',
          date_updated: '2013/05/07'
        },
        {
          user_info_id: 35,
          username: 'margretstone@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Margret Stone',
          role: 'admin',
          status: 'active',
          date_created: '2016/03/31',
          date_updated: '2016/03/31'
        },
        {
          user_info_id: 36,
          username: 'jennyfrederick@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jenny Frederick',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2016/11/08',
          date_updated: '2016/11/08'
        },
        {
          user_info_id: 37,
          username: 'nashoneil@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Nash Oneil',
          role: 'therapist',
          status: 'disabled',
          date_created: '2012/01/06',
          date_updated: '2012/01/06'
        },
        {
          user_info_id: 38,
          username: 'salliejones@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sallie Jones',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2016/01/13',
          date_updated: '2016/01/13'
        },
        {
          user_info_id: 39,
          username: 'rosariopacheco@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Rosario Pacheco',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2013/05/14',
          date_updated: '2013/05/14'
        },
        {
          user_info_id: 40,
          username: 'irmaflores@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Irma Flores',
          role: 'admin',
          status: 'active',
          date_created: '2010/12/14',
          date_updated: '2010/12/14'
        },
        {
          user_info_id: 41,
          username: 'thorntonlevine@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Thornton Levine',
          role: 'admin',
          status: 'deactivated',
          date_created: '2012/06/28',
          date_updated: '2012/06/28'
        },
        {
          user_info_id: 42,
          username: 'barnettbird@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Barnett Bird',
          role: 'client',
          status: 'temporary',
          date_created: '2014/08/09',
          date_updated: '2014/08/09'
        },
        {
          user_info_id: 43,
          username: 'brookevasquez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Brooke Vasquez',
          role: 'admin',
          status: 'temporary',
          date_created: '2014/01/10',
          date_updated: '2014/01/10'
        },
        {
          user_info_id: 44,
          username: 'munozberger@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Munoz Berger',
          role: 'client',
          status: 'temporary',
          date_created: '2014/12/29',
          date_updated: '2014/12/29'
        },
        {
          user_info_id: 45,
          username: 'whitakerbruce@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Whitaker Bruce',
          role: 'reception',
          status: 'deactivated',
          date_created: '2010/07/21',
          date_updated: '2010/07/21'
        },
        {
          user_info_id: 46,
          username: 'liliacombs@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lilia Combs',
          role: 'client',
          status: 'softlocked',
          date_created: '2016/05/21',
          date_updated: '2016/05/21'
        },
        {
          user_info_id: 47,
          username: 'bakermay@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Baker May',
          role: 'client',
          status: 'active',
          date_created: '2014/12/04',
          date_updated: '2014/12/04'
        },
        {
          user_info_id: 48,
          username: 'elnoradaniel@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Elnora Daniel',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2012/08/19',
          date_updated: '2012/08/19'
        },
        {
          user_info_id: 49,
          username: 'allysondelgado@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Allyson Delgado',
          role: 'admin',
          status: 'active',
          date_created: '2012/05/31',
          date_updated: '2012/05/31'
        },
        {
          user_info_id: 50,
          username: 'nadinemunoz@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Nadine Munoz',
          role: 'admin',
          status: 'temporary',
          date_created: '2013/12/12',
          date_updated: '2013/12/12'
        },
        {
          user_info_id: 51,
          username: 'candicetillman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Candice Tillman',
          role: 'client',
          status: 'disabled',
          date_created: '2017/11/11',
          date_updated: '2017/11/11'
        },
        {
          user_info_id: 52,
          username: 'lorenerichard@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lorene Richard',
          role: 'reception',
          status: 'deactivated',
          date_created: '2010/10/31',
          date_updated: '2010/10/31'
        },
        {
          user_info_id: 53,
          username: 'elbakennedy@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Elba Kennedy',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2017/03/04',
          date_updated: '2017/03/04'
        },
        {
          user_info_id: 54,
          username: 'patricabean@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Patrica Bean',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2013/08/21',
          date_updated: '2013/08/21'
        },
        {
          user_info_id: 55,
          username: 'aguilarchang@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Aguilar Chang',
          role: 'therapist',
          status: 'temporary',
          date_created: '2014/05/23',
          date_updated: '2014/05/23'
        },
        {
          user_info_id: 56,
          username: 'macdonaldcochran@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Macdonald Cochran',
          role: 'client',
          status: 'temporary',
          date_created: '2012/10/09',
          date_updated: '2012/10/09'
        },
        {
          user_info_id: 57,
          username: 'tashadavis@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Tasha Davis',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2016/07/17',
          date_updated: '2016/07/17'
        },
        {
          user_info_id: 58,
          username: 'kanereid@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Kane Reid',
          role: 'admin',
          status: 'disabled',
          date_created: '2010/03/12',
          date_updated: '2010/03/12'
        },
        {
          user_info_id: 59,
          username: 'victoriaduke@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Victoria Duke',
          role: 'client',
          status: 'active',
          date_created: '2010/02/04',
          date_updated: '2010/02/04'
        },
        {
          user_info_id: 60,
          username: 'caseygibson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Casey Gibson',
          role: 'reception',
          status: 'disabled',
          date_created: '2012/11/15',
          date_updated: '2012/11/15'
        },
        {
          user_info_id: 61,
          username: 'jimenezwatkins@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jimenez Watkins',
          role: 'client',
          status: 'softlocked',
          date_created: '2011/07/20',
          date_updated: '2011/07/20'
        },
        {
          user_info_id: 62,
          username: 'barkervelasquez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Barker Velasquez',
          role: 'reception',
          status: 'active',
          date_created: '2010/04/03',
          date_updated: '2010/04/03'
        },
        {
          user_info_id: 63,
          username: 'mayratrujillo@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mayra Trujillo',
          role: 'client',
          status: 'active',
          date_created: '2013/02/24',
          date_updated: '2013/02/24'
        },
        {
          user_info_id: 64,
          username: 'roblesmurphy@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Robles Murphy',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2010/06/13',
          date_updated: '2010/06/13'
        },
        {
          user_info_id: 65,
          username: 'haleyelliott@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Haley Elliott',
          role: 'client',
          status: 'softlocked',
          date_created: '2010/05/01',
          date_updated: '2010/05/01'
        },
        {
          user_info_id: 66,
          username: 'lilliealvarado@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lillie Alvarado',
          role: 'client',
          status: 'deactivated',
          date_created: '2011/11/03',
          date_updated: '2011/11/03'
        },
        {
          user_info_id: 67,
          username: 'cristinacastillo@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Cristina Castillo',
          role: 'client',
          status: 'disabled',
          date_created: '2011/12/29',
          date_updated: '2011/12/29'
        },
        {
          user_info_id: 68,
          username: 'nevastanley@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Neva Stanley',
          role: 'client',
          status: 'softlocked',
          date_created: '2012/09/26',
          date_updated: '2012/09/26'
        },
        {
          user_info_id: 69,
          username: 'annierosario@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Annie Rosario',
          role: 'reception',
          status: 'active',
          date_created: '2011/04/12',
          date_updated: '2011/04/12'
        },
        {
          user_info_id: 70,
          username: 'ewinghumphrey@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ewing Humphrey',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2017/12/05',
          date_updated: '2017/12/05'
        },
        {
          user_info_id: 71,
          username: 'ivamueller@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Iva Mueller',
          role: 'reception',
          status: 'disabled',
          date_created: '2013/01/24',
          date_updated: '2013/01/24'
        },
        {
          user_info_id: 72,
          username: 'kempbryant@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Kemp Bryant',
          role: 'therapist',
          status: 'active',
          date_created: '2016/01/08',
          date_updated: '2016/01/08'
        },
        {
          user_info_id: 73,
          username: 'paulineemerson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Pauline Emerson',
          role: 'admin',
          status: 'temporary',
          date_created: '2014/02/07',
          date_updated: '2014/02/07'
        },
        {
          user_info_id: 74,
          username: 'deloreskaufman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Delores Kaufman',
          role: 'admin',
          status: 'temporary',
          date_created: '2011/10/15',
          date_updated: '2011/10/15'
        },
        {
          user_info_id: 75,
          username: 'hahnbernard@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Hahn Bernard',
          role: 'admin',
          status: 'disabled',
          date_created: '2015/02/07',
          date_updated: '2015/02/07'
        },
        {
          user_info_id: 76,
          username: 'duffygregory@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Duffy Gregory',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2015/04/03',
          date_updated: '2015/04/03'
        },
        {
          user_info_id: 77,
          username: 'stricklandodom@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Strickland Odom',
          role: 'admin',
          status: 'active',
          date_created: '2011/10/30',
          date_updated: '2011/10/30'
        },
        {
          user_info_id: 78,
          username: 'pattycruz@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Patty Cruz',
          role: 'client',
          status: 'temporary',
          date_created: '2013/04/29',
          date_updated: '2013/04/29'
        },
        {
          user_info_id: 79,
          username: 'dillonwitt@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Dillon Witt',
          role: 'therapist',
          status: 'softlocked',
          date_created: '2015/12/26',
          date_updated: '2015/12/26'
        },
        {
          user_info_id: 80,
          username: 'gaymccarty@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gay Mccarty',
          role: 'reception',
          status: 'deactivated',
          date_created: '2010/01/10',
          date_updated: '2010/01/10'
        },
        {
          user_info_id: 81,
          username: 'riceklein@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Rice Klein',
          role: 'admin',
          status: 'deactivated',
          date_created: '2012/07/03',
          date_updated: '2012/07/03'
        },
        {
          user_info_id: 82,
          username: 'bridgettedecker@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Bridgette Decker',
          role: 'client',
          status: 'hardlocked',
          date_created: '2010/12/17',
          date_updated: '2010/12/17'
        },
        {
          user_info_id: 83,
          username: 'gretahickman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Greta Hickman',
          role: 'client',
          status: 'softlocked',
          date_created: '2016/09/18',
          date_updated: '2016/09/18'
        },
        {
          user_info_id: 84,
          username: 'wilkinsoneverett@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Wilkinson Everett',
          role: 'reception',
          status: 'deactivated',
          date_created: '2017/04/03',
          date_updated: '2017/04/03'
        },
        {
          user_info_id: 85,
          username: 'briggsdaniels@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Briggs Daniels',
          role: 'admin',
          status: 'softlocked',
          date_created: '2014/10/11',
          date_updated: '2014/10/11'
        },
        {
          user_info_id: 86,
          username: 'savannahjoseph@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Savannah Joseph',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2017/12/08',
          date_updated: '2017/12/08'
        },
        {
          user_info_id: 87,
          username: 'mcculloughpate@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mccullough Pate',
          role: 'therapist',
          status: 'temporary',
          date_created: '2016/01/02',
          date_updated: '2016/01/02'
        },
        {
          user_info_id: 88,
          username: 'bridgesford@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Bridges Ford',
          role: 'admin',
          status: 'active',
          date_created: '2013/08/16',
          date_updated: '2013/08/16'
        },
        {
          user_info_id: 89,
          username: 'edwardscantrell@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Edwards Cantrell',
          role: 'reception',
          status: 'softlocked',
          date_created: '2015/10/21',
          date_updated: '2015/10/21'
        },
        {
          user_info_id: 90,
          username: 'marionmeyers@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Marion Meyers',
          role: 'therapist',
          status: 'disabled',
          date_created: '2012/04/20',
          date_updated: '2012/04/20'
        },
        {
          user_info_id: 91,
          username: 'christinecleveland@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Christine Cleveland',
          role: 'admin',
          status: 'active',
          date_created: '2014/12/02',
          date_updated: '2014/12/02'
        },
        {
          user_info_id: 92,
          username: 'sosakoch@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sosa Koch',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2015/08/09',
          date_updated: '2015/08/09'
        },
        {
          user_info_id: 93,
          username: 'silvanavarro@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Silva Navarro',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2017/05/13',
          date_updated: '2017/05/13'
        },
        {
          user_info_id: 94,
          username: 'parkervelez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Parker Velez',
          role: 'client',
          status: 'hardlocked',
          date_created: '2014/02/27',
          date_updated: '2014/02/27'
        },
        {
          user_info_id: 95,
          username: 'augustaedwards@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Augusta Edwards',
          role: 'therapist',
          status: 'active',
          date_created: '2014/05/04',
          date_updated: '2014/05/04'
        },
        {
          user_info_id: 96,
          username: 'halealexander@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Hale Alexander',
          role: 'therapist',
          status: 'softlocked',
          date_created: '2010/02/09',
          date_updated: '2010/02/09'
        },
        {
          user_info_id: 97,
          username: 'stacijimenez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Staci Jimenez',
          role: 'admin',
          status: 'deactivated',
          date_created: '2011/01/13',
          date_updated: '2011/01/13'
        },
        {
          user_info_id: 98,
          username: 'watsonmiles@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Watson Miles',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2011/02/07',
          date_updated: '2011/02/07'
        },
        {
          user_info_id: 99,
          username: 'kathrinemorse@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Kathrine Morse',
          role: 'reception',
          status: 'temporary',
          date_created: '2016/02/16',
          date_updated: '2016/02/16'
        },
        {
          user_info_id: 100,
          username: 'lourdesriggs@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lourdes Riggs',
          role: 'client',
          status: 'active',
          date_created: '2010/01/30',
          date_updated: '2010/01/30'
        },
        {
          user_info_id: 101,
          username: 'jasminepittman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jasmine Pittman',
          role: 'client',
          status: 'hardlocked',
          date_created: '2014/05/29',
          date_updated: '2014/05/29'
        },
        {
          user_info_id: 102,
          username: 'nicholsonrichards@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Nicholson Richards',
          role: 'reception',
          status: 'temporary',
          date_created: '2013/06/23',
          date_updated: '2013/06/23'
        },
        {
          user_info_id: 103,
          username: 'annmariemejia@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Annmarie Mejia',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2015/08/21',
          date_updated: '2015/08/21'
        },
        {
          user_info_id: 104,
          username: 'goodmanzamora@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Goodman Zamora',
          role: 'client',
          status: 'disabled',
          date_created: '2010/08/24',
          date_updated: '2010/08/24'
        },
        {
          user_info_id: 105,
          username: 'youngpeterson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Young Peterson',
          role: 'reception',
          status: 'temporary',
          date_created: '2017/02/24',
          date_updated: '2017/02/24'
        },
        {
          user_info_id: 106,
          username: 'staffordtorres@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Stafford Torres',
          role: 'reception',
          status: 'active',
          date_created: '2010/02/08',
          date_updated: '2010/02/08'
        },
        {
          user_info_id: 107,
          username: 'currylittle@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Curry Little',
          role: 'reception',
          status: 'active',
          date_created: '2014/07/18',
          date_updated: '2014/07/18'
        },
        {
          user_info_id: 108,
          username: 'alicialevy@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Alicia Levy',
          role: 'admin',
          status: 'disabled',
          date_created: '2017/05/31',
          date_updated: '2017/05/31'
        },
        {
          user_info_id: 109,
          username: 'jacquelynmoran@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jacquelyn Moran',
          role: 'client',
          status: 'hardlocked',
          date_created: '2013/03/10',
          date_updated: '2013/03/10'
        },
        {
          user_info_id: 110,
          username: 'charleneturner@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Charlene Turner',
          role: 'reception',
          status: 'active',
          date_created: '2013/04/27',
          date_updated: '2013/04/27'
        },
        {
          user_info_id: 111,
          username: 'gretchenholmes@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gretchen Holmes',
          role: 'admin',
          status: 'temporary',
          date_created: '2014/09/11',
          date_updated: '2014/09/11'
        },
        {
          user_info_id: 112,
          username: 'mabeldouglas@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mabel Douglas',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2010/10/01',
          date_updated: '2010/10/01'
        },
        {
          user_info_id: 113,
          username: 'selenapugh@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Selena Pugh',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2013/09/26',
          date_updated: '2013/09/26'
        },
        {
          user_info_id: 114,
          username: 'romanjenkins@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Roman Jenkins',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2011/11/11',
          date_updated: '2011/11/11'
        },
        {
          user_info_id: 115,
          username: 'thelmaochoa@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Thelma Ochoa',
          role: 'client',
          status: 'deactivated',
          date_created: '2017/09/05',
          date_updated: '2017/09/05'
        },
        {
          user_info_id: 116,
          username: 'georgialivingston@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Georgia Livingston',
          role: 'reception',
          status: 'softlocked',
          date_created: '2014/05/03',
          date_updated: '2014/05/03'
        },
        {
          user_info_id: 117,
          username: 'montgomerygross@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Montgomery Gross',
          role: 'reception',
          status: 'active',
          date_created: '2010/10/30',
          date_updated: '2010/10/30'
        },
        {
          user_info_id: 118,
          username: 'maddendawson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Madden Dawson',
          role: 'client',
          status: 'disabled',
          date_created: '2012/01/02',
          date_updated: '2012/01/02'
        },
        {
          user_info_id: 119,
          username: 'shawnahenry@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Shawna Henry',
          role: 'client',
          status: 'deactivated',
          date_created: '2010/04/13',
          date_updated: '2010/04/13'
        },
        {
          user_info_id: 120,
          username: 'markspoole@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Marks Poole',
          role: 'admin',
          status: 'deactivated',
          date_created: '2011/02/12',
          date_updated: '2011/02/12'
        },
        {
          user_info_id: 121,
          username: 'gaylenewman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gayle Newman',
          role: 'therapist',
          status: 'disabled',
          date_created: '2016/09/12',
          date_updated: '2016/09/12'
        },
        {
          user_info_id: 122,
          username: 'buckleymendoza@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Buckley Mendoza',
          role: 'reception',
          status: 'temporary',
          date_created: '2017/09/24',
          date_updated: '2017/09/24'
        },
        {
          user_info_id: 123,
          username: 'dicksonbishop@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Dickson Bishop',
          role: 'therapist',
          status: 'temporary',
          date_created: '2013/03/20',
          date_updated: '2013/03/20'
        },
        {
          user_info_id: 124,
          username: 'raykemp@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ray Kemp',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2011/11/11',
          date_updated: '2011/11/11'
        },
        {
          user_info_id: 125,
          username: 'boothwillis@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Booth Willis',
          role: 'client',
          status: 'active',
          date_created: '2012/02/05',
          date_updated: '2012/02/05'
        },
        {
          user_info_id: 126,
          username: 'jonigould@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Joni Gould',
          role: 'admin',
          status: 'temporary',
          date_created: '2016/02/12',
          date_updated: '2016/02/12'
        },
        {
          user_info_id: 127,
          username: 'donnariley@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Donna Riley',
          role: 'admin',
          status: 'temporary',
          date_created: '2017/09/13',
          date_updated: '2017/09/13'
        },
        {
          user_info_id: 128,
          username: 'caldwellhogan@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Caldwell Hogan',
          role: 'client',
          status: 'hardlocked',
          date_created: '2011/11/27',
          date_updated: '2011/11/27'
        },
        {
          user_info_id: 129,
          username: 'potterhurley@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Potter Hurley',
          role: 'admin',
          status: 'softlocked',
          date_created: '2016/07/30',
          date_updated: '2016/07/30'
        },
        {
          user_info_id: 130,
          username: 'evelynsimmons@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Evelyn Simmons',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2012/03/09',
          date_updated: '2012/03/09'
        },
        {
          user_info_id: 131,
          username: 'ladonnanolan@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ladonna Nolan',
          role: 'client',
          status: 'disabled',
          date_created: '2017/02/27',
          date_updated: '2017/02/27'
        },
        {
          user_info_id: 132,
          username: 'gilbertbrock@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gilbert Brock',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2014/11/07',
          date_updated: '2014/11/07'
        },
        {
          user_info_id: 133,
          username: 'gibbsdunlap@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gibbs Dunlap',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2015/10/26',
          date_updated: '2015/10/26'
        },
        {
          user_info_id: 134,
          username: 'watkinsblanchard@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Watkins Blanchard',
          role: 'admin',
          status: 'softlocked',
          date_created: '2013/08/17',
          date_updated: '2013/08/17'
        },
        {
          user_info_id: 135,
          username: 'mamierush@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mamie Rush',
          role: 'reception',
          status: 'disabled',
          date_created: '2014/10/13',
          date_updated: '2014/10/13'
        },
        {
          user_info_id: 136,
          username: 'adelamckee@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Adela Mckee',
          role: 'admin',
          status: 'temporary',
          date_created: '2012/09/26',
          date_updated: '2012/09/26'
        },
        {
          user_info_id: 137,
          username: 'carissariddle@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Carissa Riddle',
          role: 'client',
          status: 'hardlocked',
          date_created: '2017/12/02',
          date_updated: '2017/12/02'
        },
        {
          user_info_id: 138,
          username: 'martareynolds@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Marta Reynolds',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2012/12/02',
          date_updated: '2012/12/02'
        },
        {
          user_info_id: 139,
          username: 'copelandhurst@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Copeland Hurst',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2013/10/01',
          date_updated: '2013/10/01'
        },
        {
          user_info_id: 140,
          username: 'juliannelarson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Julianne Larson',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2015/06/20',
          date_updated: '2015/06/20'
        },
        {
          user_info_id: 141,
          username: 'sharleneparsons@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sharlene Parsons',
          role: 'therapist',
          status: 'temporary',
          date_created: '2011/12/12',
          date_updated: '2011/12/12'
        },
        {
          user_info_id: 142,
          username: 'billiefowler@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Billie Fowler',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2011/05/07',
          date_updated: '2011/05/07'
        },
        {
          user_info_id: 143,
          username: 'sheilahubbard@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sheila Hubbard',
          role: 'therapist',
          status: 'softlocked',
          date_created: '2015/02/15',
          date_updated: '2015/02/15'
        },
        {
          user_info_id: 144,
          username: 'noellebowman@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Noelle Bowman',
          role: 'reception',
          status: 'disabled',
          date_created: '2012/11/20',
          date_updated: '2012/11/20'
        },
        {
          user_info_id: 145,
          username: 'elsiestephenson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Elsie Stephenson',
          role: 'reception',
          status: 'temporary',
          date_created: '2013/05/19',
          date_updated: '2013/05/19'
        },
        {
          user_info_id: 146,
          username: 'whitneygrimes@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Whitney Grimes',
          role: 'therapist',
          status: 'hardlocked',
          date_created: '2010/11/22',
          date_updated: '2010/11/22'
        },
        {
          user_info_id: 147,
          username: 'madeleinewelch@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Madeleine Welch',
          role: 'admin',
          status: 'hardlocked',
          date_created: '2017/02/09',
          date_updated: '2017/02/09'
        },
        {
          user_info_id: 148,
          username: 'cathrynpuckett@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Cathryn Puckett',
          role: 'therapist',
          status: 'disabled',
          date_created: '2012/02/26',
          date_updated: '2012/02/26'
        },
        {
          user_info_id: 149,
          username: 'ortiztodd@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Ortiz Todd',
          role: 'therapist',
          status: 'disabled',
          date_created: '2016/03/07',
          date_updated: '2016/03/07'
        },
        {
          user_info_id: 150,
          username: 'manuelaharvey@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Manuela Harvey',
          role: 'admin',
          status: 'disabled',
          date_created: '2016/02/21',
          date_updated: '2016/02/21'
        },
        {
          user_info_id: 151,
          username: 'gatesmorrison@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gates Morrison',
          role: 'therapist',
          status: 'temporary',
          date_created: '2017/03/26',
          date_updated: '2017/03/26'
        },
        {
          user_info_id: 152,
          username: 'bennetthenson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Bennett Henson',
          role: 'client',
          status: 'softlocked',
          date_created: '2016/03/24',
          date_updated: '2016/03/24'
        },
        {
          user_info_id: 153,
          username: 'wagnerfox@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Wagner Fox',
          role: 'reception',
          status: 'softlocked',
          date_created: '2016/05/23',
          date_updated: '2016/05/23'
        },
        {
          user_info_id: 154,
          username: 'aguirrelynn@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Aguirre Lynn',
          role: 'reception',
          status: 'temporary',
          date_created: '2017/10/30',
          date_updated: '2017/10/30'
        },
        {
          user_info_id: 155,
          username: 'madelinemckinney@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Madeline Mckinney',
          role: 'client',
          status: 'disabled',
          date_created: '2016/07/11',
          date_updated: '2016/07/11'
        },
        {
          user_info_id: 156,
          username: 'katygardner@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Katy Gardner',
          role: 'therapist',
          status: 'active',
          date_created: '2016/05/13',
          date_updated: '2016/05/13'
        },
        {
          user_info_id: 157,
          username: 'lyonsfoster@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lyons Foster',
          role: 'client',
          status: 'disabled',
          date_created: '2014/03/19',
          date_updated: '2014/03/19'
        },
        {
          user_info_id: 158,
          username: 'justicemerrill@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Justice Merrill',
          role: 'therapist',
          status: 'disabled',
          date_created: '2017/04/22',
          date_updated: '2017/04/22'
        },
        {
          user_info_id: 159,
          username: 'evangelinagonzalez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Evangelina Gonzalez',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2017/09/26',
          date_updated: '2017/09/26'
        },
        {
          user_info_id: 160,
          username: 'melissaspears@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Melissa Spears',
          role: 'client',
          status: 'hardlocked',
          date_created: '2017/11/30',
          date_updated: '2017/11/30'
        },
        {
          user_info_id: 161,
          username: 'hatfieldrobertson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Hatfield Robertson',
          role: 'admin',
          status: 'softlocked',
          date_created: '2014/06/20',
          date_updated: '2014/06/20'
        },
        {
          user_info_id: 162,
          username: 'janbyers@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Jan Byers',
          role: 'client',
          status: 'deactivated',
          date_created: '2017/06/01',
          date_updated: '2017/06/01'
        },
        {
          user_info_id: 163,
          username: 'essiesuarez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Essie Suarez',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2010/03/09',
          date_updated: '2010/03/09'
        },
        {
          user_info_id: 164,
          username: 'collinsgoff@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Collins Goff',
          role: 'client',
          status: 'deactivated',
          date_created: '2017/02/02',
          date_updated: '2017/02/02'
        },
        {
          user_info_id: 165,
          username: 'gordonnoel@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Gordon Noel',
          role: 'client',
          status: 'disabled',
          date_created: '2013/07/27',
          date_updated: '2013/07/27'
        },
        {
          user_info_id: 166,
          username: 'barryvinson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Barry Vinson',
          role: 'reception',
          status: 'temporary',
          date_created: '2012/06/22',
          date_updated: '2012/06/22'
        },
        {
          user_info_id: 167,
          username: 'sullivanfinley@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sullivan Finley',
          role: 'admin',
          status: 'deactivated',
          date_created: '2012/10/13',
          date_updated: '2012/10/13'
        },
        {
          user_info_id: 168,
          username: 'mcleodmccormick@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Mcleod Mccormick',
          role: 'therapist',
          status: 'active',
          date_created: '2013/02/07',
          date_updated: '2013/02/07'
        },
        {
          user_info_id: 169,
          username: 'danielsmorgan@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Daniels Morgan',
          role: 'therapist',
          status: 'temporary',
          date_created: '2013/05/21',
          date_updated: '2013/05/21'
        },
        {
          user_info_id: 170,
          username: 'kerryandrews@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Kerry Andrews',
          role: 'client',
          status: 'hardlocked',
          date_created: '2013/08/08',
          date_updated: '2013/08/08'
        },
        {
          user_info_id: 171,
          username: 'lesterwilliamson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lester Williamson',
          role: 'admin',
          status: 'active',
          date_created: '2011/09/15',
          date_updated: '2011/09/15'
        },
        {
          user_info_id: 172,
          username: 'schroederburke@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Schroeder Burke',
          role: 'admin',
          status: 'disabled',
          date_created: '2016/05/29',
          date_updated: '2016/05/29'
        },
        {
          user_info_id: 173,
          username: 'sybilwall@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Sybil Wall',
          role: 'admin',
          status: 'disabled',
          date_created: '2011/12/11',
          date_updated: '2011/12/11'
        },
        {
          user_info_id: 174,
          username: 'celestehowell@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Celeste Howell',
          role: 'client',
          status: 'active',
          date_created: '2015/06/02',
          date_updated: '2015/06/02'
        },
        {
          user_info_id: 175,
          username: 'deanporter@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Dean Porter',
          role: 'client',
          status: 'active',
          date_created: '2012/11/19',
          date_updated: '2012/11/19'
        },
        {
          user_info_id: 176,
          username: 'trujillocaldwell@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Trujillo Caldwell',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2012/10/18',
          date_updated: '2012/10/18'
        },
        {
          user_info_id: 177,
          username: 'englandvazquez@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'England Vazquez',
          role: 'therapist',
          status: 'deactivated',
          date_created: '2016/08/14',
          date_updated: '2016/08/14'
        },
        {
          user_info_id: 178,
          username: 'abbylamb@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Abby Lamb',
          role: 'client',
          status: 'temporary',
          date_created: '2010/01/24',
          date_updated: '2010/01/24'
        },
        {
          user_info_id: 179,
          username: 'myradickerson@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Myra Dickerson',
          role: 'admin',
          status: 'temporary',
          date_created: '2011/05/14',
          date_updated: '2011/05/14'
        },
        {
          user_info_id: 180,
          username: 'lolablankenship@memora.com',
          password:
            '$2a$05$GJxcEaX9xWOkdmgxtmrjP.HOgXANrY7/jJILNXUqs0WR6vqhB8jdW',
          display_name: 'Lola Blankenship',
          role: 'reception',
          status: 'hardlocked',
          date_created: '2013/02/10',
          date_updated: '2013/02/10'
        }
      ])
    })
}
