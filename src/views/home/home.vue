<template>
    <el-row>
    <el-col :span="4"><menuView /></el-col>
    <el-col :span="12"><tabView /></el-col>
  </el-row>
</template>


<script lang="ts" setup>
import menuView from './menu.vue'
import tabView from './tab.vue'

</script>

