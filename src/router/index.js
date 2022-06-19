import Vue  from "vue";
import Router from "vue-router";
import Main from "../views/Main";
import Login from "../views/Login";
import List from "../views/user/List";
import Profile from "../views/user/Profile";
import NotFound from "../views/NotFound";
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      component: Login,

    },{
      path:'/main',
      props: true,
      component: Main,
      children: [
        {path:'/user/profile/:id',
          name:'UerProfile',
          component: Profile,
          props: true
        },
        {path:'/user/list',component: List},{
          path: '/goHome',
          redirect: '/main'
        }
      ]
    },{
      path: '*',
      component: NotFound
    }
  ]
})
