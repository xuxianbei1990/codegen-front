<template>
  <el-table :data="productData" border style="width: 100%">
    <el-table-column prop="spuName" label="product name" width="180"/>
    <el-table-column prop="orderStatus" label="order status" width="180"/>
    <el-table-column prop="userName" label="user name"/>
  </el-table>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const router = useRoute()
import {onMounted, ref} from "vue";
import * as OrderDetailAPI from "@/api/order";
const productData = ref([])


const getDetail = async () => {

  if (router.query !== undefined){
    const data = await OrderDetailAPI.getOrderDetail(router.query.id)
    console.info(data)
    productData.value[0]= data.orderMainVO
  }
}

/** 初始化 **/
onMounted(() => {
  getDetail()
})

</script>