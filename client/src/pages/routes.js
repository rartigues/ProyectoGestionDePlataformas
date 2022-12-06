import {createRouter} from 'vue-router'
import Homepage from './home/Home.vue';
import SignUp from './sign-up/SignUp.vue';
import LogIn from './login/LogIn.vue';
import Cart from './cart/Cart.vue';


const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/register/',
    component: SignUp
  },

  {
    path: '/login/',
    component: LogIn
  },

  {
    path: '/cart/',
    component: Cart
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}