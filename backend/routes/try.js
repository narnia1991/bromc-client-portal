/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-02T07:13:54+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: try.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-02T07:14:49+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

var child_process = require('child_process')

child_process.exec('ls', function(err, stdout, stderr) {
  if (err) {
    console.log('child processes failed with error code: ' + err.code)
  }
  console.log(stdout)
})

