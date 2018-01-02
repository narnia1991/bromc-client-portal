import asyncComponent from '../containers/AsyncComponent'

const AsyncReports = asyncComponent(() =>
  import('../containers/Dashboard/Reports')
)
const AsyncSchedule = asyncComponent(() =>
  import('../containers/Dashboard/Schedule')
)
const AsyncAccounts = asyncComponent(() =>
  import('../containers/Dashboard/Accounts')
)
const AsyncClients = asyncComponent(() =>
  import('../containers/Dashboard/Clients')
)
const AsyncLeaves = asyncComponent(() =>
  import('../containers/Dashboard/Leaves')
)

const routes = [
  {
    name: 'Reports',
    path: '/reports',
    exact: true,
    access: true,
    component: AsyncReports,
  },
  {
    name: 'Schedule',
    path: '/schedule',
    exact: true,
    access: true,
    component: AsyncSchedule,
  },
  {
    name: 'Leaves',
    path: '/leaves',
    exact: true,
    access: true,
    component: AsyncLeaves,
  },
  {
    name: 'Accounts',
    path: '/accounts',
    exact: true,
    access: true,
    component: AsyncAccounts,
  },
  {
    name: 'Clients',
    path: '/clients',
    exact: true,
    access: true,
    component: AsyncClients,
  },
]

export default routes
