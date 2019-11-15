const amlTable = () => import('@/views/aml-tables/')
const tableBinded = () => import('@/views/aml-tables/data-wash/')
const tableNoBind = () => import('@/views/aml-tables/data-wash/index_backup.vue')

export default {
  path: 'aml-tables',
  name: 'amlTables',
  meta: {
    title: '复杂表格'
  },
  component: amlTable,
  children: [
    {
      path: 'tableBinded',
      name: 'tableBinded',
      meta: {
        title: '双向绑定数据表格'
      },
      component: tableBinded,
      children: []
    },
    {
      path: 'tableNoBind',
      name: 'tableNoBind',
      meta: {
        title: '非双向绑定数据表格'
      },
      component: tableNoBind,
      children: []
    }
  ]
}
