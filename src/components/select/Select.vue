<template>
	<select class="form-select" ref="input" :name="name">
		<option data-placeholder="true"></option>
		<template
			v-for="item in options"
			:key="item"
		>
			<option :value="item.title">{{ item.title }}</option>
		</template>
	</select>
</template>

<script setup>
	import { onMounted, ref } from "@vue/runtime-core"
	import SlimSelect from 'slim-select'

	const props = defineProps({
		name: { type: String, default: () => '' },
		attr: { type: String, default: () => '' },
		label: { type: String, default: () => '' },
		disabled: { type: Boolean, default: () => false },
		required: { type: Boolean, default: () => false },
		modelValue: { type: String, default: () => '' },
		options: { type: Array, default: () => [] }
	})
	const input = ref(null)
	onMounted(() => {
		const select = new SlimSelect({
			select: input.value,
			placeholder: 'Выберите город',
			searchPlaceholder: 'Введите город'
		})
	})
</script>
