<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="50" justify="space-between">
          <el-col :span="5">
            <el-input v-model="input" style="width: 240px" placeholder="Please input"/>
          </el-col>
          <el-col :span="5">
            <el-input v-model="input" style="width: 240px" placeholder="Please input"/>
          </el-col>
          <el-col :span="5">
            <el-input v-model="input" style="width: 240px" placeholder="Please input"/>
          </el-col>
          <el-col :span="5">
            <el-input v-model="input" style="width: 240px" placeholder="Please input"/>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const input = ref('')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style>
.el-row {
  margin-bottom: 0;
  //background-color: #f2f2f2;
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