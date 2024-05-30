<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="supplier user id">
            <el-input v-model="formInline.supplierUserId" placeholder="enter the supplier user id" clearable/>
          </el-form-item>
          <el-form-item label="choice order state">
            <el-select
                v-model="formInline.orderStatus"
                placeholder="choice order state"
                clearable
            >
              <el-option label="Pending payment" value="1"/>
              <el-option label="to be ship" value="2"/>
              <el-option label="all" value="-2"/>
            </el-select>
          </el-form-item>
          <el-form-item label="order time">
            <el-date-picker
                v-model="formInline.date"
                type="date"
                placeholder="Pick a date"
                clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Query</el-button>
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="id" width="80"/>
          <el-table-column prop="orderNo" label="orderNo" width="380"/>
          <el-table-column prop="createTime" label="createTime"/>
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="detailClick(scope.row)">
                Detail
              </el-button>
              <el-button link type="primary" size="small">Edit</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

import * as orderApi from '@/api/order'
import {reactive, ref} from 'vue'
import router from '@/router'

const tableData = ref([]) // 列表的数据

const formInline = reactive({
  supplierUserId: '',
  orderStatus: '',
  date: '',
})

const onSubmit = async () => {
  const data = await orderApi.getOrderPage(formInline)
  tableData.value = data.records
}

const detailClick = (row: any) => {
  router.push({
    query: {id: 51},
    path: '/order/detail'
  })
}

</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

.el-row {
  margin-bottom: 0;
  background-color: #f2f2f2;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  background-color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: dodgerblue;


}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;

}
</style>