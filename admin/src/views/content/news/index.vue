<template>
  <ProTable
    ref="proTable"
    :dataSource="dataSource"
    :columns="news"
    :params="params"
    :searchForm="searchForm"
    :showForm="showForm"
    :getListFunc="getListFunc"
  >
    <template #toolbar_title>
      <span style="font-weight: bold; font-size: 20px; color: #000"
        >新闻列表</span
      >
    </template>
    <template #toolbar_buttons>
      <el-button type="primary" @click="addNewsData"> 新增 </el-button>
    </template>
  </ProTable>
  <DialogForm
    :title="title"
    :visible="visible"
    :formData="formData"
    :renderForm="renderForm"
    :formFunc="formFunc"
    @close="close"
  ></DialogForm>
</template>

<script lang="ts" setup>
  import { createVNode, VNode } from 'vue'
  import ProTable from '@/components/ProTable/index.vue'
  import { getNewsList, addNews, updateNews, deleteNews } from '@/api/content/news'
  import { VxeGridPropTypes } from 'vxe-table'
  import dayjs from 'dayjs'
  import { FormState } from './type'
  import { ElButton, ElMessage, ElSpace } from 'element-plus'
  import DialogForm from '@/components/DialogForm/index.vue'
  const proTable = ref()
  const visible = ref<boolean>(false)
  const title = ref('新增新闻')
  const getListFunc = getNewsList
  const formFunc = ref<any>()
  const formData = ref<FormState>({
    title: '',
  })
  const renderForm = [
    {
      field: 'title',
      label: '新闻名',
      type: 'input',
      placeholder: '请输入新闻名',
    },
  ]
  const news: VxeGridPropTypes.Columns = [
    {
      type: 'seq',
      width: 60,
      treeNode: false, // 开启树图表
    },
    { field: 'id', title: 'ID', width: 80 },
    { field: 'title', title: '标题', width: 180 },
    {
      field: 'createdAt',
      title: '创建时间',
      width: 180,
      formatter: (row: any) => {
        return dayjs(row.row.createdAt).format('YYYY-MM-DD HH:mm:ss')
      },
    },
    {
      field: 'updatedAt',
      title: '更新时间',
      width: 180,
      formatter: (row: any) => {
        return dayjs(row.row.updatedAt).format('YYYY-MM-DD HH:mm:ss')
      },
    },
    {
      title: '操作',
      width: 220,
      align: 'center',
      fixed: 'right',
      slots: {
        default: ({ row }): VNode => {
          return createVNode(
            ElSpace,
            {
              size: 10,
              wrap: true,
            },
            {
              default: (): VNode[] => [
                createVNode(
                  ElButton,
                  {
                    type: 'primary',
                    size: 'small',
                    onClick: () => {
                      updateNewsData(row)
                    },
                  },
                  () => '编辑',
                ),
                createVNode(
                  ElButton,
                  {
                    type: 'danger',
                    size: 'small',
                    onClick: () => {
                      deleteNewsFunc(row.id)
                    },
                  },
                  () => '删除',
                ),
              ],
            },
          )
        },
      },
    },
  ]

  const showForm = true
  // 搜索区域
  const searchForm = [
    {
      label: '新闻名',
      field: 'name',
      type: 'input',
      componentProps: {
        placeholder: '请输入新闻名',
      },
    },
  ]

  const params = ref({
    page: 1,
    size: 10,
  })

  let dataSource = ref<any>([])
  const addNewsData = () => {
    title.value = '新增新闻'
    visible.value = true
    formData.value = {
      title: '',
    }
    formFunc.value = addNews
  }

  const close = (e: any) => {
    visible.value = false
    if (e) {
      refreshTable()
    }
  }

  const refreshTable = () => {
    proTable.value.reloadData()
  }

  const updateNewsData = (row: any) => {
    const rowBak = JSON.parse(JSON.stringify(row))
    console.log(rowBak)
    delete rowBak._X_ROW_KEY
    delete rowBak.createdAt
    delete rowBak.updatedAt
    title.value = '编辑新闻'
    formData.value = rowBak
    formFunc.value = updateNews
    visible.value = true
  }

  const deleteNewsFunc = async (id: number) => {
    console.log(id)
    const res = await deleteNews({id})
    ElMessage.success('删除成功')
  }
</script>
