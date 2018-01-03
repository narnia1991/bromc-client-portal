/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T02:33:24+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: roles.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T16:31:26+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('roles').insert([
        {
          role_name: 'admin',
          role_privileges:
            "{volume:['get'],feedback:['get','put'],therapist:['get','post','put'],client_info:['get'],client_billing:['get'],client_medical_history:['get'],therapist_info:['get','post','put'],reception_info:['get','post','put'],client_schedule:['get'],therapist_schedule:['get','put'],reception_schedule:['get','put'],therapy_register:['get'], ,clinic_info:['get','post','put'],leave:['get','post','put']}",
          date_deactivated: null
        },
        {
          role_name: 'reception',
          role_privileges:
            "{client_info:['get'],client_billing:['get'],client_medical_history:['get'],therapist_info:['get'],reception_info:['get','put'],client_schedule:['get'],therapist_schedule:['get'],reception_schedule:['get','put'],therapy_register:['get','put'], therapy_options:['get'],therapy_cancel:['get','put'],clinic_info:['get'],waiting_list:['get','post','put'],leave:['get','post','put']}",
          date_deactivated: null
        },
        {
          role_name: 'therapist',
          role_privileges:
            "{therapist:['get','put'],client_info:['get'],client_medical_history:['get'],therapist_info:['get','put'],therapist_schedule:['get','post','put'],therapy_register:['get'], therapy_options:['get'],leave:['get','post','put']}",
          date_deactivated: null
        },
        {
          role_name: 'client',
          role_privileges:
            "{therapist:['get','post','put'],client_info:['get','post','put'],client_billing:['get','post','put'],client_medical_history:['get','post','put'],therapist_info:['get','post','put'],reception_info:['get','post','put'],client_schedule:['get','post','put'],therapist_schedule:['get','post','put'],reception_schedule:['get','post','put'],therapy_register:['get','post','put'], therapy_options:['get','post','put'],therapy_cancel:['get','post','put'],clinic_info:['get']}",
          date_deactivated: null
        },
        {
          role_name: 'superadmin',
          role_privileges: "{users:['get','post','put'],logs:['get','post']}",
          date_deactivated: null
        }
      ])
    })
}
