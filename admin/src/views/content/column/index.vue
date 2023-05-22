<template>
  <ProTable
    ref="proTable"
    :dataSource="dataSource"
    :columns="columns"
    :params="params"
    :searchForm="searchForm"
    :showForm="showForm"
    :getListFunc="getListFunc"
  >
    <template #toolbar_title>
      <span style="font-weight: bold; font-size: 20px; color: #000"
        >栏目列表</span
      >
    </template>
    <template #toolbar_buttons>
      <el-button type="primary" @click="addColumnData"> 新增 </el-button>
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
  import { getColumnList, addColumn, updateColumn, deleteColumn } from '@/api/content/column'
  import { VxeGridPropTypes } from 'vxe-table'
  import dayjs from 'dayjs'
  import { FormState } from './type'
  import { ElButton, ElMessage, ElSpace } from 'element-plus'
  import DialogForm from '@/components/DialogForm/index.vue'
  const proTable = ref()
  const visible = ref<boolean>(false)
  const title = ref('新增栏目')
  const getListFunc = getColumnList
  const formFunc = ref<any>()
  const formData = ref<FormState>({
    name: '',
    key: '',
  })
  const renderForm = [
    {
      field: 'name',
      label: '栏目名',
      type: 'input',
      placeholder: '请输入栏目名',
    },
    {
      field: 'key',
      label: '栏目key',
      type: 'input',
      placeholder: '请输入栏目key',
    },
    {
      field: 'path',
      label: 'path',
      type: 'input',
      placeholder: '请输入path',
    },
    {
      field: 'pid',
      label: 'pid',
      type: 'input',
      placeholder: '请输入path',
    },
    {
      field: 'img',
      label: 'img',
      type: 'input',
      placeholder: '请输入img',
    },
  ]
  const columns: VxeGridPropTypes.Columns = [
    {
      type: 'seq',
      width: 60,
      treeNode: false, // 开启树图表
    },
    { field: 'id', title: 'ID', width: 80 },
    { field: 'pid', title: 'PID', width: 180 },
    { field: 'name', title: '栏目名', width: 180 },
    { field: 'key', title: '栏目key', width: 180 },
    { field: 'path', title: 'path', width: 180 },
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
                      updateColumnData(row)
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
                      deleteColumnFunc(row.id)
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
      label: '栏目名',
      field: 'name',
      type: 'input',
      componentProps: {
        placeholder: '请输入栏目名',
      },
    },
    {
      label: '栏目key',
      field: 'key',
      type: 'input',
      componentProps: {
        placeholder: '请输入栏目key',
      },
    },
  ]

  const params = ref({
    page: 1,
    size: 10,
  })

  let dataSource = ref<any>([])
  const addColumnData = () => {
    title.value = '新增栏目'
    visible.value = true
    formData.value = {
      name: '',
      key: '',
    }
    formFunc.value = addColumn
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

  const updateColumnData = (row: any) => {
    const rowBak = JSON.parse(JSON.stringify(row))
    console.log(rowBak)
    delete rowBak._X_ROW_KEY
    delete rowBak.createdAt
    delete rowBak.updatedAt
    title.value = '编辑栏目'
    formData.value = rowBak
    formFunc.value = updateColumn
    visible.value = true
  }

  const deleteColumnFunc = async (id: number) => {
    console.log(id)
    const res = await deleteColumn({id})
    ElMessage.success('删除成功')
  }
</script>
