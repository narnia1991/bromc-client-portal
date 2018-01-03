import React from 'react'
import PropTypes from 'prop-types'
import { Card, Divider, Statistic } from 'semantic-ui-react'

const propTypes = {
  total: PropTypes.number,
  weekly: PropTypes.number,
  monthly: PropTypes.number,
  yearly: PropTypes.number,
}

function PanelCards(propTypes) {
  return (
    <Card.Group itemsPerRow={4}>
      <Card centered>
        <Card.Content style={{ padding: '2em' }}>
          <Card.Header>
            <Statistic>
              <Statistic.Value style={{ color: '#0082E2' }}>
                {propTypes.weekly ? propTypes.weekly : '20'}
              </Statistic.Value>
            </Statistic>
          </Card.Header>
          <Card.Meta>Weekly Appointments</Card.Meta>
          <Divider style={{ marginTop: '2.5rem', marginBottom: 0 }} />
          <Card.Description textAlign="center">
            Number of Weekly Appointments
          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content style={{ padding: '2em' }}>
          <Card.Header>
            <Statistic>
              <Statistic.Value style={{ color: '#D5BE10' }}>
                {propTypes.monthly ? propTypes.monthly : '12'}
              </Statistic.Value>
            </Statistic>
          </Card.Header>
          <Card.Meta>Monthly Appointments</Card.Meta>
          <Divider style={{ marginTop: '2.5rem', marginBottom: 0 }} />
          <Card.Description textAlign="center">
            Number of Monthly Appointments
          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content style={{ padding: '2em' }}>
          <Card.Header>
            <Statistic>
              <Statistic.Value style={{ color: '#00863E' }}>
                {propTypes.yearly ? propTypes.yearly : '15'}
              </Statistic.Value>
            </Statistic>
          </Card.Header>
          <Card.Meta>Yearly Appointments</Card.Meta>
          <Divider style={{ marginTop: '2.5rem', marginBottom: 0 }} />
          <Card.Description textAlign="center">
            Number of Yearly Appointments
          </Card.Description>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content style={{ padding: '2em' }}>
          <Card.Header>
            <Statistic>
              <Statistic.Value style={{ color: '#DE4400' }}>
                {propTypes.total ? propTypes.total : '2'}
              </Statistic.Value>
            </Statistic>
          </Card.Header>
          <Card.Meta>Total Appointments</Card.Meta>
          <Divider style={{ marginTop: '2.5rem', marginBottom: 0 }} />
          <Card.Description textAlign="center">
            Number of All Appointments
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default PanelCards
