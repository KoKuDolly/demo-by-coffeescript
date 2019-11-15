            {
         }   }   {
        {   {  }  }
         }   }{  {
        {  }{  }  }                    _____       __  __
       { }{ }{  { }                   / ____|     / _|/ _|
     .- { { }  { }} -.               | |     ___ | |_| |_ ___  ___
    (  { } { } { } }  )              | |    / _ \|  _|  _/ _ \/ _ \
    |`-..________ ..-'|              | |___| (_) | | | ||  __/  __/
    |                 |               \_____\___/|_| |_| \___|\___|
    |                 ;--.
    |                (__  \            _____           _       _
    |                 | )  )          / ____|         (_)     | |
    |                 |/  /          | (___   ___ _ __ _ _ __ | |_
    |                 (  /            \___ \ / __| '__| | '_ \| __|
    |                 |/              ____) | (__| |  | | |_) | |_
    |                 |              |_____/ \___|_|  |_| .__/ \__|
     `-.._________..-'                                  | |
                                                        |_|

# vue-cli-2-admin-coffee-script

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vue-cli

```sh
# 全局安装 vue-cli-3
# vue-cli-3
npm i -g @vue/cli
vue create vue-cli-3-admin

# vue-cli-3 兼容 vue-cli-2
# vue-cli-2
npm install -g @vue/cli-init
vue init webpack vue-cli-2-admin-coffee-script
```

## 使用 scss 编写代码要安装包

```sh
npm install node-sass sass-loader --save
```

## 自定义主题

安装主题

```sh
npm i element-theme --save-dev
```

安装白垩主题

```sh
npm i element-theme-chalk -D
```

生成配置文件

```sh
node_modules/.bin/et -i
```

编译主题

```sh
node_modules/.bin/et et

# 实时编译主题
node_modules/.bin/et et -w

# 指定目录
node_modules/.bin/et et -o src/theme
```

[MySql 下载地址](https://dev.mysql.com/downloads/file/?id=485812)

密码：Ghwn7nGaUw.M

vue 创建组件的方式

```html
<html>
  <div id="app">
    <mycom1></mycom1>
  </div>
  <template id="tmpl">
    <h1>这是私有的 login 组件1</h1>
  </template>
  <script>
    // 方式1，全局注册组件，可以在任何vue实例中调用，不需要在每个vue实例中进行注册，公用的组件，vue.use()做了这件事
    Vue.component('mycom1', Vue.extend({
      template: '<h3>这是使用 Vue.extend 创建的组件</h3>'
    }))

    var vm = new Vue({
      el: '#app'
    })
  </script>

  <div id="app2">
    <login></login>
  </div>

  <template id="tmpl2">
    <h1>这是私有的 login 组件2</h1>
  </template>

  <script>
    // 方式2，局部组件注册，只属于当前vue实例
    var vm2 = new Vue({
      el: '#app2',
      components: {
        login: {
          template: '#tmpl2'
        }
      }
    })
  </script>
</html>
```

下面每一项的意思

```js
new Vue({
  router,
  i18n,
  components: { App },
  template: '<App/>'
  // render: h => h(App)
}).$mount('#app')
```
