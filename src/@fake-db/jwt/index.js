import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import mock from '@/@fake-db/mock'

// TODO: Use jsonwebtoken pkg
// ℹ️ Created from https://jwt.io/ using HS256 algorithm
// ℹ️ We didn't created it programmatically because jsonwebtoken package have issues with esm support. View Issues: https://github.com/auth0/node-jsonwebtoken/issues/655
const userTokens = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcmlkIjoiRTU4MDAxOSIsInJvbGUiOiJhZG1pbiIsImV4cCI6IjIwMjMwMTExMTc1NDIwIn0.zOk0S5HaRO1DpFGP0mOhe3PleVvgNzmnI_mcKmt7cK8',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcmlkIjoiRTYyMDA1NSIsInJvbGUiOiJjbGllbnQiLCJleHAiOiIyMDIzMDExMTE3NTQyMCJ9.egDaBY1o0u3pJzuXlIngnM4SgZJjnMzI7Gv8NA5R_hs',
]

// ❗ These two secrets shall be in .env file and not in any other file
// const jwtSecret = 'dd5f3089-40c3-403d-af14-d0c228b05cb4'
const database = [
  {
    id: 1,
    username: '박재훈',
    userid: 'E580019',
    deptCd: 'KECB',
    deptName: '완성차SF3팀',
    password: 'E580019!',
    avatar: avatar1,
    role: 'admin',
    abilities: [
      {
        action: 'manage',
        subject: 'all',
      },
    ],
  },
  {
    id: 2,
    username: '최수진',
    userid: 'E620055',
    password: 'E620055!',
    deptCd: 'KECB',
    deptName: '완성차SF3팀',
    avatar: avatar2,
    role: 'client',
    abilities: [
      {
        action: 'read',
        subject: 'Auth',
      },
      {
        action: 'read',
        subject: 'AclDemo',
      },
    ],
  },
]

mock.onPost('/auth/login').reply((request) => {
  const { userid, password } = JSON.parse(request.data)
  let errors = {
    userid: ['아이디 / 패스워드를 확인해 주세요.'],
  }
  const user = database.find((u) => u.userid === userid && u.password === password)
  if (user) {
    try {
      const accessToken = userTokens[user.id]

      // We are duplicating user here
      const userData = { ...user }

      const userOutData = Object.fromEntries(
        Object.entries(userData).filter(([key, _]) => !(key === 'password' || key === 'abilities'))
      )

      const response = {
        userAbilities: userData.abilities,
        accessToken,
        userData: userOutData,
      }

      //   const accessToken = jwt.sign({ id: user.id }, jwtSecret)
      return [200, response]
    } catch (e) {
      errors = { userid: [e] }
    }
  } else {
    errors = {
      userid: ['아이디 또는 패스워드를 확인해 주세요.'],
    }
  }

  return [400, { errors }]
})
