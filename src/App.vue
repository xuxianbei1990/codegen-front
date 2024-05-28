<template>
  <div class="common-layout" v-title title="Promotion Management">
    <el-container>
      <el-aside width="200px">
        <menuView/>
      </el-aside>
      <el-container>
        <el-header style="margin-top: 20px;">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">promotion management</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
          <!--          <el-text class="mx-1" type="primary" size="large">Codegen!</el-text>-->
          <!--          &lt;!&ndash; 使用 router-link 组件进行导航 &ndash;&gt;-->
          <!--          &lt;!&ndash; 通过传递 `to` 来指定链接 &ndash;&gt;-->
          <!--          &lt;!&ndash; `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 &ndash;&gt;-->
          <!--          <router-link to="/">Go to Home</router-link>-->
          <!--          &lt;!&ndash; <router-link to="/about"> Go to About</router-link> &ndash;&gt;-->
          <!--          <router-link to="/codegen"> Go to codegen</router-link>-->
        </el-header>
        <el-main style="transform: translateY(-60px);">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" closable>
            <el-tab-pane label="User" name="codegen">codegen</el-tab-pane>
            <el-tab-pane label="order management" name="order"></el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
          </el-tabs>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script lang="ts" setup>
import router from './router'
import menuView from './views/home/menu.vue'
import {ref} from 'vue'
import type {TabsPaneContext} from 'element-plus'

const activeName = ref('first')


const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  if (tab.paneName == "codegen") {
    router.push("/codegen")
  } else {
    router.push("/")
  }

}

</script>