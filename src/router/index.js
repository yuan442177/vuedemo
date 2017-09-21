import Vue from 'vue' //引入vue
import Router from 'vue-router' //引入vue-router
import Hello from '@/components/Hello' //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'

Vue.use(Router) //vue全局使用router

export default new Router({
  routes: [ //配置路由,这里是个数组
    { //每个链接都是一个对象
      path: '/', //链接路径
      name: 'Hello', //路由名称
      components: { //对应组件模板
        default: Hello,
        left: Hi1,
        right: Hi2
      },
    },
    {
      path: '/params/:newsId/:newsTitle',
      component: params
    },
    {
      path: '/hi',
      name: 'Hi',
      alias: '/Yuan', //别名 在path为'/'时 无效
      components: { //对应组件模板
        default: Hi,
        left: Hi1,
        right: Hi2
      },
      children: [ //表示hi1和hi2为hi的子集 但是根据path的设置 访问时并感觉不到
        {
          path: '/hi1',
          name: 'hi1',
          components: { //路由中的路由
            left: Hi1,
            right: Hi
          },
          children: [{
            path: '/a',
            name: 'Hi',
            components: { //路由中的路由
              left: Hi1,
              right: Hi
            },
          }]
        },
        
        {
          path: '/hi2',
          name: 'hi2',
          component: Hi,
          // redirect: '/'
        }, //redirect 重定向 可以输入参数
      ]
    },
  ]
})
