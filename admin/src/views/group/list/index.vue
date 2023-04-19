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
        >微信群列表</span
      >
    </template>
    <template #toolbar_buttons>
      <el-button type="primary" @click="addGroupData"> 新增 </el-button>
      <el-button type="primary"> 更新群 </el-button>
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
  import { getGroupList, addGroup } from '@/api/group/group'
  import { VxeGridPropTypes } from 'vxe-table'
  import dayjs from 'dayjs'
  import { FormState } from './type'
  import { ElButton, ElMessage, ElSpace } from 'element-plus'
  import DialogForm from '@/components/DialogForm/index.vue'
  const proTable = ref()
  const visible = ref<boolean>(false)
  const title = ref('新增群')
  const getListFunc = getGroupList
  const formFunc = ref<any>()
  const formData = ref<FormState>({
    name: '',
    announcement: '',
    type: '',
    keyword: '',
    adminWechatNo: '',
    adminQrcode: '',
    avatar: '',
    wxid: '',
    tags: '',
    latitude: '',
    longitude: '',
    visible: true,
    orderNo: 0,
  })
  const renderForm = [
    {
      field: 'name',
      label: '群名',
      type: 'input',
      placeholder: '请输入群名',
    },
    {
      field: 'announcement',
      label: '群介绍',
      type: 'input',
      placeholder: '请输入群介绍',
    },
    {
      field: 'type',
      label: '群分类',
      type: 'input',
      placeholder: '请输入群分类',
    },
    {
      field: 'keyword',
      label: '入群关键词',
      type: 'input',
      placeholder: '请输入入群关键词',
    },
    {
      field: 'adminWechatNo',
      label: '所属群主微信号',
      type: 'input',
      placeholder: '请输入所属群主微信号',
    },
    {
      field: 'adminQrcode',
      label: '群主二维码',
      type: 'input',
      placeholder: '请输入群主二维码',
    },
    {
      field: 'avatar',
      label: '群头像',
      type: 'input',
      placeholder: '请输入群头像',
    },
    {
      field: 'wxid',
      label: 'WXID',
      type: 'input',
      placeholder: '请输入WXID',
    },
    {
      field: 'tags',
      label: '标签',
      type: 'input',
      placeholder: '请输入标签',
    },
    {
      field: 'latitude',
      label: '纬度',
      type: 'input',
      placeholder: '请输入纬度',
    },
    {
      field: 'longitude',
      label: '经度',
      type: 'input',
      placeholder: '请输入经度',
    },
  ]
  const columns: VxeGridPropTypes.Columns = [
    {
      type: 'seq',
      width: 60,
      treeNode: true, // 开启树图表
    },
    { field: 'id', title: 'ID', width: 80 },

    { field: 'wxid', title: 'WXID', width: 180 },
    { field: 'name', title: '群名', width: 180 },
    { field: 'announcement', title: '群介绍', minWidth: 180 },
    { field: 'type', title: '群分类', width: 180 },
    { field: 'keyword', title: '入群关键词', width: 180 },
    { field: 'adminWechatNo', title: '所属群主微信号', width: 180 },
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
                      editGroupData(row)
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
                      deleteGroupFunc(row.id)
                    },
                  },
                  () => '删除',
                ),
              ],
            },
          )
        },
      },
      fixed: 'right',
    },
  ]

  const showForm = true
  // 搜索区域
  const searchForm = [
    {
      label: '群名',
      field: 'namne',
      type: 'input',
      componentProps: {
        placeholder: '请输入群名',
      },
    },
    {
      label: '群分类',
      field: 'type',
      type: 'input',
      componentProps: {
        placeholder: '请输入群分类',
      },
    },
  ]

  const params = ref({
    page: 1,
    size: 10,
  })

  let dataSource = ref<any>([])
  const addGroupData = () => {
    title.value = '新增群'
    visible.value = true
    formData.value = {
      name: '',
      announcement: '',
      type: '',
      keyword: '',
      adminWechatNo: '',
      adminQrcode: '',
      avatar: '',
      wxid: '',
      tags: '',
      latitude: '',
      longitude: '',
      visible: true,
      orderNo: 0,
    }
    formFunc.value = addGroup
  }

  const close = () => {
    visible.value = false
  }

  const refreshTable = () => {
    close()
    proTable.value.reloadData()
  }

  const editGroupData = (row: any) => {
    title.value = '编辑群'
    formData.value = row
    visible.value = true
  }

  const deleteGroupFunc = async (id: number) => {
    console.log(id)
    ElMessage.success('删除成功')
  }
</script>
