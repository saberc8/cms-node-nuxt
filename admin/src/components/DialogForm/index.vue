<template>
  <el-dialog v-model="dialogFormVisible" :title="title" @close="close">
    <el-form :model="form">
      <el-form-item
        :label="item.label"
        :label-width="formLabelWidth"
        v-for="(item, index) in renderForm"
        :key="index"
      >
        <el-input
          v-model="form[`${item.field}`]"
          autocomplete="off"
          :placeholder="item.placeholder"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmEvent"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    visible: boolean
    title: string
    formData: any
    renderForm: any
    formFunc: any
  }>()
  const emit = defineEmits(['close'])
  console.log(props)
  const dialogFormVisible = ref(props.visible)
  const formLabelWidth = '140px'
  let form = reactive<any>(props.formData)
  watch(
    () => props.visible,
    (val) => {
      dialogFormVisible.value = val
      form = props.formData
    },
  )

  const confirmEvent = async () => {
    const res = await props.formFunc(form)
    console.log(res, 'confirmEvent')
  }

  const close = () => {
    emit('close', false)
  }
</script>
<style lang="scss" scoped></style>
