import jwtDecode from 'jwt-decode'

export function getRole(module) {
  const token = localStorage.getItem('jwtToken')
  const role = token ? jwtDecode(token).role : null

  switch (role) {
    case 'admin':
      switch (module) {
        case 'reports':
          return true
          break
        case 'schedule':
          return true
          break
        case 'create':
          return true
          break
        case 'leaves':
          return true
          break
        case 'accounts':
          return true
          break
        case 'clients':
          return true
          break

        default:
          break
      }
      break

    case 'reception':
      switch (module) {
        case 'reports':
          return false
          break
        case 'schedule':
          return true
          break
        case 'create':
          return false
          break
        case 'leaves':
          return false
          break
        case 'accounts':
          return false
          break
        case 'clients':
          return true
          break

        default:
          break
      }
      break

    case 'therapist':
      switch (module) {
        case 'reports':
          return false
          break
        case 'schedule':
          return true
          break
        case 'create':
          return false
          break
        case 'leaves':
          return true
          break
        case 'accounts':
          return false
          break
        case 'clients':
          return true
          break
          break

        default:
          break
      }
      break
  }
}
