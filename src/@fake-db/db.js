import './app-bar-search'
import './apps/user-list'
import './jwt'
import mock from './mock'
import './pages/faq'
import './pages/help-center'
import './pages/profile'

// Apps
import './apps/calendar'
import './apps/chat'
import './apps/email'
import './apps/invoice'

// Nav

const navData = [
  {
    title: 'Main',
    icon: { icon: 'mdi-home-outline' },
    to: 'main',
  },
  {
    title: '물류정보공유시스템',
    icon: { icon: 'mdi-content-copy' },
    children: [
      {
        title: '정문관리',
        icon: { icon: 'mdi-content-copy' },
        children: [
          { title: '정문정체관리', to: 'forms-combobox' },
          { title: '정문출입제한관리', to: 'forms-date-time-picker' },
        ],
      },
      {
        title: '납품차량관리',
        icon: { icon: 'mdi-content-copy' },
        children: [
          { title: '납품차량 출입 현황', to: 'forms-file-input' },
          { title: '업체등록', to: 'forms-radio' },
          { title: '납품차량 위치 정보', to: 'forms-range-slider' },
        ],
      },
      {
        title: '공지사항',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
    ],
  },
  {
    title: 'Form Layouts',
    icon: { icon: 'mdi-content-copy' },
    to: 'forms-form-layouts',
  },
  {
    title: 'Form Validation',
    icon: { icon: 'mdi-checkbox-marked-circle-outline' },
    to: 'forms-form-validation',
  },
]

mock.onGet('/nav-items').reply(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [200, navData]
})

// forwards the matched request over network
mock.onAny().passThrough()
