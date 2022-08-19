<template>
	<component
		v-if="layout"
		:is="layout"
	>
		<router-view :key="$route.fullPath" />
	</component>
</template>

<style scoped>

</style>

<script setup>
  import { computed  } from 'vue'
	import { useRoute } from 'vue-router'

	const route = useRoute()
	const layout = computed(() => route.meta.layout)
</script>

<script>
	import Layout from './Layouts/Layout.vue'
  export default {
		components: {
			Layout
		}
	}
</script>