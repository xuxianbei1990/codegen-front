<template>
  <el-row>
    <div id="app" width="100%">
      <h1>Codegen!</h1>
      <p>
        <!-- 使用 router-link 组件进行导航 -->
        <!-- 通过传递 `to` 来指定链接 -->
        <!-- `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 -->
        <router-link to="/">Go to Home</router-link>
        <!-- <router-link to="/about"> Go to About</router-link> -->
        <router-link to="/codegen"> Go to codegen</router-link>
      </p>
    </div>
  </el-row>

  <div class="my-router-view">
    <router-view></router-view>
  </div>
</template>


<style scoped>
.my-router-view {
  width: 1600px;
  /* 或其他你想要的宽度 */
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
