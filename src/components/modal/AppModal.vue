<template>
	<div :attr="attr" class="transition-all absolute w-full z-[1000] py-10 min-h-screen flex items-center justify-center bg-apricot-peach/80">
		<div class="relative bg-white px-5 sm:px-[68px] py-10 rounded">
			<button class="absolute top-0 right-0 p-2 transition-all duration-300 rounded hover:text-orange bg-grayscale-light" @click="$emit('close')">
				<svg class="w-6 h-6">
					<use xlink:href="/icons/all-icons.svg#close"></use>
				</svg>
			</button>
			<slot/>
		</div>
	</div>
</template>

<script setup>
	const emit = defineEmits(['close'])
	const props = defineProps({
		attr: { type: String, default: () => '' },
	})
</script>

<style>

</style>
