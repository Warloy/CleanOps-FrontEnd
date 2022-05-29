
const routes = [
  {
    path: '/Login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/OperationCheif', name: 'operationcheif',
    component: () => import('layouts/OperationCheif.vue'),
    children: [
      {path: 'Home', name: 'operationchiefindex', component: () => import('pages/OperationCheifIndex.vue')},
      {path: 'Profile', name: 'profile', component: () => import('pages/EditProfile.vue')},
      {path: 'OrderManagement', name:'ordermanagement', component:()=>import('pages/OrderManagement.vue')},
      {path: 'OrderManagement/Edit', name:'orderedit', component: () => import('pages/OrderEdit.vue')},
      {path: 'PreventiveManagement', name:'preventivemanagement', component:()=>import('pages/PreventiveManagement.vue')},
    ]
  },
  {
    path: '/supervisor',
    component: () => import('layouts/SupervisorLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/SupervisorIndex.vue') },
      { path: 'profile', component: () => import('pages/EditProfile.vue')},

      { path: 'users', component: () => import('pages/SupervisorUserManager.vue')},
      { path: 'users/edit', component: () => import('pages/SupervisorUserProfile.vue')},

      { path: 'areas', component: () => import('pages/SupervisorAreaManager.vue')},
      { path: 'areas/edit', component: () => import('pages/SupervisorAreaProfile.vue')},

      { path: 'dashboard', component: () => import('pages/SupervisorDashboard.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path:'/', redirect: '/Login'
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
