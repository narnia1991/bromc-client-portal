/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:55:14+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: registration.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T19:40:27+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import * as registrationModel from '../models/registration'
import * as userInfoModel from '../models/user_info'
import * as userModel from '../models/user'
import * as therapyOptionsModel from '../models/thersess_options'
import * as medicalHistoryModel from '../models/medical_history'

const getTherapy = async (req, res) => {
  try {
    const therapyFetched = await registrationModel.getOne(registration_id)
    res.json({ results: therapyFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

const getUserInfo = async (req, res) => {
  try {
    const userFetched = await userInfoModel.getOne(req.params.user_info_id)
    res.json({ results: userFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}
const getTherapist = async (req, res) => {
  try {
    const userInfoFetched = await userModel.getOne(req.params.therapist_id)
    const userFetched = await userInfoModel.getOne(userInfoFetched.user_info_id)
    res.json({ results: userFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}
const getTherapyOptions = async (req, res) => {
  try {
    const therapyOptionsFetched = await therapyOptionsModel.getOne(
      req.params.therapy_options_id
    )
    res.json({ results: therapyOptionsFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

const getMedicalHistory = async (req, res) => {
  try {
    const medHistoryFetched = await registrationModel.getOne(
      req.params.medical_history_id
    )
    res.json({ results: medHistoryFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

const confirmRegistration = async (req, res) => {
  try {
    const confirmation = await registrationModel.update(req.params.id, {
      status: 'done'
    })
    res.json({ results: 'Therapy Successful' })
  } catch (err) {
    res.json({ errors: err })
  }
}

const cancelRegistration = async (req, res) => {
  try {
    const confirmation = await registrationModel.getOne(
      req.params.registration_id
    )

    const now = new Date()
    if (date.parse(confirmation.date_therapy) < now.setDate(now.getDate() + 7))
      res.json({ results: 'Your account will be billed. Are you sure?' })

    const therapyCancel = await registrationModel.update(
      req.params.registration_id,
      { status: 'cancelled' }
    )
    if (therapyCancel) res.json({ results: 'Therapy Cancelled' })
  } catch (err) {
    res.json({ errors: err })
  }
}

const billCancellation = async (req, res) => {
  try {
    const confirmation = await registrationModel.update(req.params.id, {
      status: 'done'
    })
    res.json({ results: 'Therapy Successful' })
  } catch (err) {
    res.json({ errors: err })
  }
}

const postRegistration = async (req, res) => {
  const therapy_options = await therapyOptionsModel.getWhere({
    user_id: req.currentUser.user_id
  })
  const medical_history = await medicalHistoryModel.getWhere({
    user_id: req.currentUser.user_id
  })

  const registration = {
    user_id: req.currentUser.user_id,
    therapist_id: req.body.therapist_id,
    therapy_options: therapy_options.options_id,
    medical_history: medical_history.medical_history_id,
    clinic: req.body.clinic,
    date_registered: new Date(),
    date_therapy: req.body.therapy_date,
    status: 'booked',
    date_updated: new Date()
  }

  try {
    const volumeCreated = await registrationModel.create(registration)
    res.json({ results: 'Therapy Successfully Booked!' })
  } catch (err) {
    res.json({ errors: err })
  }
}

//for reports
const getVolume = async (req, res) => {
  try {
    const volumeFetched = await registrationModel.getWhere({ status: 'done' })
    res.json({ results: volumeFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

const getVolumeWeekly = async (req, res) => {
  try {
    const rawQuery =
      "select count(*) as weeklyVolume str_to_date(concat(yearweek(date_therapy), ' monday'), '%X%V %W') as `date`from registration WHERE status = 'done' group by yearweek(date_therapy)"
    const volumeWeeklyFetched = await registrationModel.getRaw(rawQuery)
    res.json(volumeWeeklyFetched)
  } catch (err) {
    res.json(err)
  }
}

const getVolumeMonthly = async (req, res) => {
  try {
    const rawQuery =
      "SELECT DATE_FORMAT(date_therapy, '%Y') as 'year', DATE_FORMAT(date_therapy, '%m') as 'month', COUNT(registration_id) as 'total'  FROM registration  WHERE status = 'done'  GROUP BY DATE_FORMAT(date_therapy, '%Y%m')"
    const volumeMonthlyFetched = await registrationModel.getRaw(rawQuery)
    res.json({ results: volumeMonthlyFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

const getVolumeYearly = async (req, res) => {
  try {
    const rawQuery =
      "SELECT DATE_FORMAT(date_therapy, '%Y') as 'year', COUNT(registration_id) as 'total'  FROM registration  WHERE status = 'done'  GROUP BY DATE_FORMAT(date_therapy, '%Y')"
    const volumeYearlyFetched = await registrationModel.getRaw(rawQuery)
    res.json({ results: volumeYearlyFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

const getSchedule = async (req, res) => {
  let query = registrationModel.getWhere('therapy_date', '>', new Date())

  if (req.params.user_id) query.where({ user_id: req.params.user_id })

  try {
    const schedule = await query
    res.json({ results: schedule })
  } catch (err) {
    res.json({ errors: err })
  }
}

module.exports = {
  getSchedule,
  getVolume,
  getVolumeWeekly,
  getVolumeMonthly,
  getVolumeYearly,
  confirmRegistration,
  cancelRegistration,
  billCancellation,
  postRegistration,
  getTherapy,
  getUserInfo,
  getTherapist,
  getTherapyOptions,
  getMedicalHistory
}
