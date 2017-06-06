export const routs = {
  '/': {
    prev: '',
    next: '/gears',
  },
  '/gears': {
    prev: '/',
    next: '/services'
  },
  '/services': {
    prev: '/gears',
    next: '/pay'
  },
  '/keyboard': {
    prev: '/services',
    next: '/services'
  },
  '/pay': {
    prev: '/services',
    next: '/'
  }
}
