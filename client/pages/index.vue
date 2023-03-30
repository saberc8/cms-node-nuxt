<template>
	<div>
		<InputEntry />
		<el-button>Default</el-button>
		<el-button type="primary">Primary</el-button>
		<el-button type="success">Success</el-button>
		<el-button type="info">Info</el-button>
		<el-button type="warning">Warning</el-button>
		<el-button type="danger">Danger</el-button>
	</div>
</template>

<script setup lang="ts">
// const data = [1]
// const data = useFetch('/apiDev/login', {
//   body: JSON.stringify({
//     username: 'admin',
//     password: '123456',
//   }),
// })
// console.log(data)
// const data = await $fetch('/api/api/user/login', {
// 	method: 'POST',
// 	params: {
// 		username: 'admin',
// 		password: '123456',
// 	},
// })
const data = await useFetch('/apiDev/login')
</script>
