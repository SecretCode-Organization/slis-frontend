import './app-bar-search'
import './apps/user-list'
import './jwt'
import mock from './mock'
import './pages/faq'
import './pages/help-center'
import './pages/profile'
import './pages/w002'

// Apps
import './apps/calendar'
import './apps/chat'
import './apps/email'
import './apps/invoice'

// Nav

const navData = [
  {
    title: '모듈공급',
    icon: { icon: 'mdi-vector-square' },
    children: [
      {
        title: '모듈공급현황',
        icon: { icon: 'mdi-door-sliding' },
        children: [
          { title: '모듈 공급 현황 모니터링 (생산물류기획팀)', to: 'module-w002' },
          { title: '모듈 공급 현황 모니터링 (협력사)', to: 'module-w003' },
          { title: '모듈 공급 현황 대쉬보드 (생산물류계획팀)', to: 'module-w004' },
        ],
      },
      {
        title: '모듈공급운영',
        icon: { icon: 'mdi-door-sliding' },
        children: [{ title: '시스템 오류 및 조치 현황', to: 'module-w011' }],
      },
    ],
  },
]

mock.onGet('/nav-items').reply(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [200, navData]
})

// forwards the matched request over network
mock.onAny().passThrough()
