import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TableDataGrid } from '../../../components/TableDataGrid'

export default class Clients extends Component {
  static propTypes = {}

  render() {
    return (
      <TableDataGrid
        keyValue=""
        api={{
          default: '/delivery',
          delete: '/delivery',
          query: '',
        }}
        headerActions={[
          {
            name: 'search',
            icon: '',
            path: '',
            text: 'Search...',
            color: '',
          },
        ]}
        actions={[
          {
            access: true,
            action_name: 'view',
            icon: 'view',
            path: '/clients/view',
          },
        ]}
        limit={[
          { key: 1, text: '10', value: 10 },
          { key: 2, text: '20', value: 20 },
          { key: 3, text: '50', value: 50 },
        ]}
        headers={[
          {
            id: 1,
            name: 'first_name',
            title: 'Delivery Date',
            sortable: true,
          },
          {
            id: 2,
            name: 'middle_name',
            title: 'Trucker Code',
            sortable: true,
          },
          {
            id: 3,
            name: 'last_name',
            title: 'Delivery No',
            sortable: true,
          },
          {
            id: 4,
            name: 'delivery_role_id',
            title: 'Ship to Code',
            sortable: true,
          },
          {
            id: 5,
            name: 'depot_id',
            title: 'Ship to Name',
            sortable: true,
          },
          {
            id: 6,
            name: 'company',
            title: 'Delivery Start',
            sortable: true,
          },
          {
            id: 7,
            name: 'is_active',
            title: 'Delivery End',
            sortable: false,
          },
        ]}
      />
    )
  }
}
