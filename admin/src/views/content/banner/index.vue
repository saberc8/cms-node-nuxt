<template>
  <ProTable
    ref="proTable"
    :dataSource="dataSource"
    :columns="banner"
    :params="params"
    :searchForm="searchForm"
    :showForm="showForm"
    :getListFunc="getListFunc"
  >
    <template #toolbar_title>
      <span style="font-weight: bold; font-size: 20px; color: #000"
        >banner列表</span
      >
    </template>
    <template #toolbar_buttons>
      <el-button type="primary" @click="addBannerData"> 新增 </el-button>
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
  import { getBannerList, addBanner, updateBanner, deleteBanner } from '@/api/content/banner'
  import { VxeGridPropTypes } from 'vxe-table'
  import dayjs from 'dayjs'
  import { FormState } from './type'
  import { ElButton, ElMessage, ElSpace } from 'element-plus'
  import DialogForm from '@/components/DialogForm/index.vue'
  const proTable = ref()
  const visible = ref<boolean>(false)
  const title = ref('新增banner')
  const getListFunc = getBannerList
  const formFunc = ref<any>()
  const formData = ref<FormState>({
    title: '',
  })
  const renderForm = [
    {
      field: 'title',
      label: 'banner名',
      type: 'input',
      placeholder: '请输入banner名',
    },
  ]
  const banner: VxeGridPropTypes.Columns = [
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
                      updateBannerData(row)
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
                      deleteBannerFunc(row.id)
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
      label: 'banner名',
      field: 'name',
      type: 'input',
      componentProps: {
        placeholder: '请输入banner名',
      },
    },
  ]

  const params = ref({
    page: 1,
    size: 10,
  })

  let dataSource = ref<any>([])
  const addBannerData = () => {
    title.value = '新增banner'
    visible.value = true
    formData.value = {
      title: '',
    }
    formFunc.value = addBanner
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

  const updateBannerData = (row: any) => {
    const rowBak = JSON.parse(JSON.stringify(row))
    console.log(rowBak)
    delete rowBak._X_ROW_KEY
    delete rowBak.createdAt
    delete rowBak.updatedAt
    title.value = '编辑banner'
    formData.value = rowBak
    formFunc.value = updateBanner
    visible.value = true
  }

  const deleteBannerFunc = async (id: number) => {
    console.log(id)
    const res = await deleteBanner({id})
    ElMessage.success('删除成功')
  }
</script>
