import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

function toSignIn(next) {
  if (!store.getters.isSignedIn) {
    next({ path: '/' });
  }
}

function toHome(next) {
  if (store.getters.isSignedIn) {
    next({ path: '/projects' });
  }
  else {
    next();
  }
}

const routes = [
  {
    path: '/projects',
    name: 'Home',
    component: () => import('../views/project/List.vue'),
    beforeEnter: (to, from, next) => {
      toSignIn(next);
      store.commit('setBreadcrumbs', [{
        text: 'All Projects',
        disabled: false,
        href: '/projects'
      }]);
      console.log(to);
      console.log(from);
      next();
    }
  },
  {
    path: '/projects/:id/overview',
    name: 'Home',
    component: () => import('../views/project/Overview.vue'),
    beforeEnter: (to, from, next) => {
      toSignIn(next);
      store.commit('setBreadcrumbs', [{
        text: 'All',
        disabled: false,
        href: '/projects'
      },
      {
        text: 'Project',
        disabled: false,
        href: to.fullPath
      }]);
      console.log(to);
      console.log(from);
      next();
    }
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
      if (store.getters.isSignedIn) {
        next();
      }
      else {
        next({ path: '/' });
      }
    }
  },
  {
    path: '/',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue'),
    beforeEnter: (to, from, next) => {
      toHome(next);
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
