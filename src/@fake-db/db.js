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
    title: '물류정보공유시스템',
    icon: { icon: 'mdi-vector-square' },
    children: [
      {
        title: '정문관리',
        icon: { icon: 'mdi-door-sliding' },
        children: [
          { title: '정문정체관리', to: 'forms-combobox' },
          { title: '정문출입제한관리', to: 'forms-date-time-picker' },
        ],
      },
      {
        title: '납품차량관리',
        icon: { icon: 'mdi-truck-cargo-container' },
        children: [
          { title: '', to: 'forms-file-input' },
          { title: '업체등록', to: 'forms-radio' },
          { title: '납품차량 위치 정보', to: 'forms-range-slider' },
        ],
      },
      {
        title: '공지사항',
        icon: { icon: 'mdi-bell-cog' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
    ],
  },
  {
    title: '모듈공급스마트물류관리시스템',
    icon: { icon: 'mdi-train-car-intermodal' },
    children: [
      {
        title: '모듈 공급 현황',
        icon: { icon: 'mdi-content-copy' },
        children: [
          { title: '모듈 공급 현황 모니터링 (생산물류계획팀)', to: 'apps-email' },
          { title: '모듈 공급 현황 모니터링 (생산관리부)', to: 'apps-chat' },
          { title: '모듈 공급 현황 모니터링 (협력사)', to: 'apps-calendar' },
          { title: '모듈 공급 현황 대쉬보드 (생산물류계획팀)', to: 'apps-invoice-list' },
          { title: '모듈 공급 현황 대쉬보드 (1-2공장)', to: 'apps-invoice-add' },
          { title: '모듈 공급 현황 대쉬보드 (3-5공장)', to: 'apps-user-list' },
          { title: '모듈 공급 현황 대쉬보드 (생산관리부) 1공장', to: 'pages-authentication-login-v1' },
          { title: '모듈 공급 현황 대쉬보드 (생산관리부) 2공장', to: 'pages-authentication-login-v2' },
          { title: '모듈 공급 현황 대쉬보드 (생산관리부) 3공장', to: 'pages-authentication-login-v1' },
          { title: '모듈 공급 현황 대쉬보드 (생산관리부) 4공장', to: 'pages-authentication-login-v1' },
          { title: '모듈 공급 현황 대쉬보드 (생산관리부) 5공장', to: 'pages-authentication-login-v1' },
        ],
      },
      {
        title: '관리 시스템 운영',
        icon: { icon: 'mdi-content-copy' },
        children: [
          { title: '납품차량 출입 현황', to: 'forms-file-input' },
          { title: '업체등록', to: 'forms-radio' },
          { title: '납품차량 위치 정보', to: 'forms-range-slider' },
        ],
      },
      {
        title: '관리 시스템 설정',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
    ],
  },
  {
    title: '시스템관리',
    icon: { icon: 'mdi-monitor-lock' },
    children: [
      {
        title: '사용자관리',
        icon: { icon: 'mdi-content-copy' },
        children: [
          { title: '정문정체관리', to: 'forms-combobox' },
          { title: '정문출입제한관리', to: 'forms-date-time-picker' },
        ],
      },
      {
        title: '권한그룹 관리',
        icon: { icon: 'mdi-content-copy' },
        children: [
          { title: '납품차량 출입 현황', to: 'forms-file-input' },
          { title: '업체등록', to: 'forms-radio' },
          { title: '납품차량 위치 정보', to: 'forms-range-slider' },
        ],
      },
      {
        title: '화면권한 관리',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
      {
        title: '프로그램 관리',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
      {
        title: '메뉴 대중소 관리',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
      {
        title: '메뉴 구조 관리',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
      {
        title: '공통코드 관리',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
      {
        title: '시스템 사용 현황',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
      {
        title: '메인화면',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
      },
      {
        title: '공지사항',
        icon: { icon: 'mdi-content-copy' },
        children: [{ title: '공지사항', to: 'forms-rating' }],
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
