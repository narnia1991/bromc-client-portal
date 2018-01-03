import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PanelCards from '../../../components/PanelCards'
import { viewData } from '../../../utils/Api'

export default class Volume extends Component {
  static propTypes = {}
  state = {
    total: '',
    weekly: '',
    monthly: '',
    yearly: '',
  }

  async componentDidMount() {
    const total = await viewData('/reports/volume')
    const weekly = await viewData('/reports/volume/weekly')
    const monthly = await viewData('/reports/volume/monthly')
    const yearly = await viewData('/reports/volume/yearly')

    this.setState({
      total,
      weekly,
      monthly,
      yearly,
    })
  }

  render() {
    const { weekly, monthly, yearly, total } = this.state
    return (
      <PanelCards
        weekly={weekly}
        monthly={monthly}
        yearly={yearly}
        total={total}
      />
    )
  }
}
