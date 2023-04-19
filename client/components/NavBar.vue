<template>
	<div class="navbar">{{ title }}</div>
</template>

<script setup lang="ts">
const title = ref('navbar')
</script>

<style lang="scss" scoped>
/* pc width > 1024px */ // 1024       1280          1366      1440       1680       1920 
.navbar {
	background-color: yellow;
}

/* macbook */
@media screen and (max-width: 1680px) {
	.navbar {
		background-color: #0055ff;
	}
}

/* macbook */
@media screen and (max-width: 1440px) {
	.navbar {
		background-color: #4670c3;
	}
}

/* ipad pro */
@media screen and (max-width: 1366px) {
	.navbar {
		background-color: #3b8f77;
	}
}

@media screen and (max-width: 1280px) {
	.navbar {
		background-color: #bd7145;
	}
}

/* ipad pro */
@media screen and (max-width: 1024px) {
	.navbar {
		background-color: #ff00ff;
	}
}
/* ipad */
@media screen and (max-width: 768px) {
	.navbar {
		background-color: green;
	}
}
/* iphone6 7 8 plus */
@media screen and (max-width: 414px) {
	.navbar {
		background-color: blue;
	}
}
/* iphoneX */
@media screen and (max-width: 375px) and (-webkit-device-pixel-ratio: 3) {
	.navbar {
		background-color: #394938;
	}
}
/* iphone6 7 8 */
@media screen and (max-width: 375px) and (-webkit-device-pixel-ratio: 2) {
	.navbar {
		background-color: #0ff000;
	}
}
/* iphone5 */
@media screen and (max-width: 320px) {
	.navbar {
		background-color: #0ff000;
	}
}
</style>
