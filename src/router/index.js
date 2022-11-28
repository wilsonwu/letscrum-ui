import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/first',
    name: 'Chia',
    component: () => import('../views/First.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Empty.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('../views/Empty.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Empty.vue')
  },
  {
    path: '/others',
    name: 'Others',
    component: () => import('../views/Empty.vue')
  },
  {
    path: '/user',
    redirect: '/user/profile',
    name: 'User',
    component: () => import('@/views/Empty.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('@/views/Empty.vue')
      },
      {
        path: 'orgs',
        component: () => import('@/views/Empty.vue')
      },
      {
        path: 'changepassword',
        component: () => import('@/views/Empty.vue')
      },
      {
        path: 'setting',
        component: () => import('@/views/Empty.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      if (store.getters.accessToken) {
        next();
      }
      else {
        next({ path: '/signin' });
      }
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.accessToken) {
        next();
      }
      else {
        next({ path: '/user' });
      }
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.accessToken) {
        next();
      }
      else {
        next({ path: '/user' });
      }
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
