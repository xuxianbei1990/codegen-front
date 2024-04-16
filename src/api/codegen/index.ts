import request from '@/config/axios'

interface PageParam {
    pageSize?: number
    pageNo?: number
  }

  
export type CodegenTableVO = {
    id: number
    tableId: number
    isParentMenuIdValid: boolean
    dataSourceConfigId: number
    scene: number
    tableName: string
    tableComment: string
    remark: string
    moduleName: string
    businessName: string
    className: string
    classComment: string
    author: string
    createTime: Date
    updateTime: Date
    templateType: number
    parentMenuId: number
  }

  export type CodegenPreviewVO = {
    filePath: string
    code: string
  }
  

// 查询列表代码生成表定义
export const getCodegenTablePage = (params: PageParam) => {
    return request.get({ url: '/codegen/table/page', params })
  }


  // 下载生成代码
export const downloadCodegen = (id: number) => {
    return request.download({ url: '/codegen/download?tableId=' + id })
  }

  // 预览生成代码
export const previewCodegen = (id: number) => {
  return request.get({ url: '/codegen/preview?tableId=' + id })
}