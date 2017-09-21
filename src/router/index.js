import Vue from 'vue' //引入vue
import Router from 'vue-router' //引入vue-router
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router) //vue全局使用router

export default new Router({
  routes: [               //配置路由,这里是个数组
    {                     //每个链接都是一个对象
      path: '/',          //链接路径
      name: 'Hello',      //路由名称
      components: {        //对应组件模板
        default:Hello,
        left:Hi1,
        right:Hi2
      },

    },
    {
      path:'/hi',
      name:'Hi',
      components: {        //对应组件模板
        default:Hi,
        left:Hi1,
        right:Hi2
      },
      children:[
        {path:'/',component:Hi},
        {path:'/hi1',name:'hi1',component:Hi1,children:[
          {
            path:'/hi/Hi1',
            name:'Hi',
            components: {        //对应组件模板
              left:Hi1,
              right:Hi
            },
          }
        ]},
        {path:'hi2',name:'hi2',component:Hi2},
      ]
    },
  ]
})
