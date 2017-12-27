/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-24T02:44:37+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: knexfile.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T04:45:34+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1', //server ip address
      user: 'arjel002', //create another mysql database
      password: 'Silly@2017', //set password for security
      database: 'bromc' // database name
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1', //server ip address
      user: 'arjel002', //create another mysql database
      password: 'Silly@2017', //set password for security
      database: 'bromc' // database name
    },
    migrations: {
      tableName: 'migrations'
    }
  }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
}
