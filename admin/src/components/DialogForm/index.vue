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
    <ZEditor></ZEditor>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmEvent"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { ElMessage } from 'element-plus'
  import ZEditor from './components/ZEditor.vue'
  const props = defineProps<{
    visible: boolean
    title: string
    formData: any
    renderForm: any
    formFunc: any
  }>()
  const emit = defineEmits(['close'])
  const dialogFormVisible = ref(props.visible)
  const formLabelWidth = '140px'
  let form = ref<any>()
  watch(
    () => props.visible,
    (val) => {
      dialogFormVisible.value = val
      form.value = JSON.parse(JSON.stringify(props.formData))
    },
  )

  // const show = computed({
  //   get() {
  //     return props.value
  //   },
  //   set(val: boolean) {
  //     emit('update:value', val)
  //   },
  // })

  const close = () => {
    emit('close', false)
  }

  const confirmEvent = async () => {
    const res = await props.formFunc(form.value)
    console.log(res, 'confirmEvent')
    ElMessage.success(res)
    emit('close', true)
  }
</script>
<style lang="scss" scoped></style>
