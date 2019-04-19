import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Workspaces from '@/views/Workspaces'
import WorkspaceDetail from '@/views/WorkspaceDetail'
import TableDetail from '@/views/TableDetail'
import GraphDetail from '@/views/GraphDetail'
import NodeDetail from '@/views/NodeDetail'

const routes = [
  {
    path: '/',
    redirect: '/workspaces'
  },
  {
    path: '/workspaces',
    component: Workspaces
  },
  {
    path: '/:workspace',
    component: WorkspaceDetail,
    props: true
  },
  {
    path: '/:workspace/table/:table',
    component: TableDetail,
    props: true
  },
  {
    path: '/:workspace/graph/:graph',
    component: GraphDetail,
    props: true
  },
  {
    path: '/:workspace/graph/:graph/node/:type/:node',
    component: NodeDetail,
    props: true
  }
]

const router = new VueRouter({routes})

export default router
