<template>
  <el-form :inline="true" :model="queryParams" class="demo-form-inline">
    <el-form-item label="表名称">
      <el-input v-model="queryParams.tableName" placeholder="表名称" clearable />
    </el-form-item>
    <el-form-item label="表描述">
      <el-input v-model="queryParams.tableComment" class="!w-240px" clearable placeholder="请输入表描述" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleQuery">
        <Icon class="mr-5px" icon="ep:search" />
        搜索
      </el-button>
    </el-form-item>
  </el-form>

  <el-table v-loading="loading" :data="list">
      <el-table-column align="center" label="表名称" prop="tableName" width="200" />
      <el-table-column
        :show-overflow-tooltip="true"
        align="center"
        label="表描述"
        prop="tableComment"
        width="200"
      />
      <el-table-column align="center" label="实体" prop="className" width="200" />
      <el-table-column
        :formatter="dateFormatter"
        align="center"
        label="创建时间"
        prop="createTime"
        width="180"
      />
      <el-table-column
        :formatter="dateFormatter"
        align="center"
        label="更新时间"
        prop="createTime"
        width="180"
      />
      <el-table-column align="center" fixed="right" label="操作" width="300px">
        <template #default="scope">
          <el-button
            v-hasPermi="['infra:codegen:preview']"
            link
            type="primary"
            @click="handlePreview(scope.row)"
          >
            预览
          </el-button>
          <el-button
            v-hasPermi="['infra:codegen:update']"
            link
            type="primary"
            @click="handleUpdate(scope.row.id)"
          >
            编辑
          </el-button>
          <el-button
            v-hasPermi="['infra:codegen:delete']"
            link
            type="danger"
          >
            删除
          </el-button>
          <el-button
            v-hasPermi="['infra:codegen:update']"
            link
            type="primary"
          >
            同步
          </el-button>
          <el-button
            v-hasPermi="['infra:codegen:download']"
            link
            type="primary"
            @click="handleGenTable(scope.row)"
          >
            生成代码
          </el-button>
        </template>
      </el-table-column>
    </el-table>

  <!-- 弹窗：预览代码 -->
  <PreviewCode ref="previewRef" />
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import download from '@/utils/download'
import * as CodegenApi from '@/api/codegen'
import { dateFormatter } from '@/utils/formatTime'
import PreviewCode from './PreviewCode.vue'
const list = ref([]) // 列表的数据
const total = ref(0) // 列表的总页数
const loading = ref(true) // 列表的加载中
const router = useRouter()

const queryParams = reactive({
  tableName: '',
  tableComment: '',
  pageNo: 1,
  pageSize: 10,
})

const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 生成代码操作 */
const handleGenTable = async (row: CodegenApi.CodegenTableVO) => {
  const res = await CodegenApi.downloadCodegen(row.id)
  download.zip(res, 'codegen-' + row.className + '.zip')
}

/** 初始化 **/
onMounted(async () => {
  await getList()
})

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await CodegenApi.getCodegenTablePage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 编辑操作 */
const handleUpdate = (id: number) => {
  router.push('/codegen/edit?id=' + id)
}

/** 预览操作 */
const previewRef = ref()
const handlePreview = (row: CodegenApi.CodegenTableVO) => {
  previewRef.value.open(row.id)
}

</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
