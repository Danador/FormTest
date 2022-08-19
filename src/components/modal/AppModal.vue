<template>
	<div class="absolute flex items-center justify-center w-full h-full py-10 bg-apricot-peach/80">
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
</script>

<style>

</style>
