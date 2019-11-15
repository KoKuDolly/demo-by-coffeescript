import tables from './table'

const Home = () => import('@/views/home/')
const NotFound = () => import('@/views/notFound/')
const Layout = () => import('@/views/app/')
const HelloWorld = () => import('@/components/HelloWorld')

export default [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    meta: {
      title: 'KOKU'
    },
    component: Layout,
    children: [
      {
        path: '',
        name: '',
        redirect: '/home'
      },
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: Home
      },
      {
        path: 'helloWorld',
        name: 'HelloWorld',
        meta: {
          title: '欢迎'
        },
        component: HelloWorld,
        children: []
      },
      {...tables},
      {
        path: '404',
        name: '404',
        // 命名视图，加 s
        components: NotFound
      },
      {
        path: '*',
        redirect: '/404'
      }
    ]
  }
]
