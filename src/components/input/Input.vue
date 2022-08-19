<template>
    <div class="relative">
		<label class="grid">
			<span v-if="label" class="text-grayscale-hard">{{ label }}</span>
			<input
				:class="type === 'password' ? 'pl-4 pr-10' : 'px-4'"
				class="w-full h-10 invalid:border-red-600 py-2 rounded border border-silver bg-white hover:border-mantis transition-all duration-300 focus:outline-none outline-none text-surface disabled:bg-grayscale-light focus-visible:border-mantis  focus-visible:shadow-[4px_8px_16px_rgba(112,192,91,0.2);]"
				:type="showPassword ? 'text' : type"
				:name="name ? name : false"
				@input="updateValue"
				:attr="attr"
				v-model="value"
				:required="required"
			>
		</label>
		<button
			type="button"
			class="absolute right-0 -translate-x-1/2 top-1/2"
			v-if="type === 'password'"
			@click="showPassword = !showPassword"
		>
			<svg v-if="!showPassword" class="w-6 h-6">
				<use xlink:href="/icons/all-icons.svg#eye-off"></use>
			</svg>
			<svg  v-if="showPassword" class="w-6 h-6">
				<use xlink:href="/icons/all-icons.svg#eye"></use>
			</svg>
		</button>
		<!-- :is="$attrs.href ? 'a' : 'button' -->
	</div>
</template>

<style scoped>
</style>

<script setup>
	import { onMounted, ref, watch } from 'vue'
	import IMask from 'imask';

	const value = ref('')
	const emit = defineEmits(['update:modelValue'])
	const props = defineProps({
		type: { type: String, default: () => 'text' },
		name: { type: String, default: () => '' },
		attr: { type: String, default: () => '' },
		label: { type: String, default: () => '' },
		disabled: { type: Boolean, default: () => false },
		required: { type: Boolean, default: () => false },
		modelValue: { type: String, default: () => '' },
		mask: { type: String, default: () => '' },
		pattern: { type: String, default: () => '' }
	})
	const maskOptions = ref(null)
	const showPassword = ref(false)
	console.log(props.mask);
	if(props.pattern) {
		watch(value, () => {
			value.value = value.value.replace(new RegExp(props.pattern), '')
		})
	}
	if(props.mask === 'tel') {
		maskOptions.value = {
			mask: '+7 (000) 000-00-00',
		}
	}
	else if(props.mask === 'date') {
		maskOptions.value = {
			mask: '00.00.0000',
		}
	}
	else if(props.mask === 'card') {
		console.log(props.mask);
		maskOptions.value = {
			mask: '00-000000',
		}
	}
	else if(props.mask) {
		maskOptions.value = {
			mask: props.mask,
		}
	}

	// watch(form, () => {
	// 	console.log(form.firstName);
	// 	console.log(form.firstName.replace(//g, ''));
	// 	form.firstName = form.firstName.replace(/([^а-я])/g, '')
	// })
	const maskused = ref(maskOptions.value ? true : false)
	const masked = maskOptions.value ? IMask.createMask(maskOptions.value) : ''
	const showEye = ref(false)

	const updateValue = () => {
		if(maskused.value) {
			emit('update:modelValue', masked.unmaskedValue)
		} else {
			emit('update:modelValue', value.value)
		}
	}
	if(maskused.value) {
		watch(value, () => {

			masked.value = value.value;
			value.value = masked.typedValue
		})
	}

	value.value = props.modelValue
</script>
