import { getRole } from '../utils/userLoader'
import asyncComponent from '../containers/AsyncComponent'

const AsyncDashboard = asyncComponent(() =>
  import('../containers/Dashboard/Main')
)
const AsyncReports = asyncComponent(() =>
  import('../containers/Dashboard/Reports')
)
const AsyncSchedule = asyncComponent(() =>
  import('../containers/Dashboard/Schedule')
)
const AsyncScheduleCreate = asyncComponent(() =>
  import('../containers/Dashboard/Schedule/CreateSchedule')
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
    access: getRole('reports'),
    component: AsyncReports,
  },
  {
    name: 'Schedule',
    path: '/schedule',
    exact: true,
    access: getRole('schedule'),
    component: AsyncSchedule,
    subRoute: [
      {
        name: 'Schedule',
        rootPath: '/schedule',
        exact: true,
        access: getRole('schedule'),
        component: AsyncSchedule,
      },
      {
        name: 'Create Schedule',
        path: 'create',
        exact: true,
        access: getRole('create'),
        component: AsyncScheduleCreate,
      },
    ],
  },
  {
    name: 'Leaves',
    path: '/leaves',
    exact: true,
    access: getRole('leaves'),
    component: AsyncLeaves,
  },
  {
    name: 'Accounts',
    path: '/accounts',
    exact: true,
    access: getRole('accounts'),
    component: AsyncAccounts,
  },
  {
    name: 'Clients',
    path: '/clients',
    exact: true,
    access: getRole('clients'),
    component: AsyncClients,
  },
]

export default routes
