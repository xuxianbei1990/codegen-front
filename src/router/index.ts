import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import codegen from '../views/codegen/index.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path: '/codegen',
        component: codegen
    }
  ]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: routes, // `routes: routes` 的缩写
  })
  
  export default router