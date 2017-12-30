import asyncComponent from '../containers/AsyncComponent'

const AsyncReports = asyncComponent(() =>
  import('../containers/Dashboard/Reports')
)
const AsyncClientSchedule = asyncComponent(() =>
  import('../containers/Dashboard/ClientSchedule')
)
const AsyncEmployeeSchedule = asyncComponent(() =>
  import('../containers/Dashboard/EmployeeSchedule')
)
const AsyncAccounts = asyncComponent(() =>
  import('../containers/Dashboard/Accounts')
)
const AsyncDashboard = asyncComponent(() => import('../containers/Dashboard'))

const AsyncLogin = asyncComponent(() => import('../components/Login'))

const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    exact: true,
    access: true,
    component: AsyncDashboard,
  },
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
    component: null,
    subRoute: [
      {
        name: 'Client Schedule',
        path: '/schedule/client',
        exact: true,
        access: true,
        component: AsyncClientSchedule,
      },
      {
        name: 'Employee Schedule',
        path: '/schedule/employee',
        exact: true,
        access: true,
        component: AsyncEmployeeSchedule,
      },
    ],
  },
  {
    name: 'Accounts',
    path: '/accounts',
    exact: true,
    access: true,
    component: AsyncAccounts,
  },
]

export default routes
