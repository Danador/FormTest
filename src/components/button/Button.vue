<template>
  <component :is="$attrs.href ? 'a' : 'button'"
	:type="$attrs.href ? false : type"
    class="p-2 rounded leading-6 h-max flex items-center justify-center bg-orange transition-all duration-300 text-white  hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] disabled:shadow-none active:shadow-[inset_0px_2px_0px_(0,0,0,0.2)] active:shadow-black/20 disabled:bg-apricot-peach disabled:text-orange"
    :disabled=disabled
  >
	<slot/>
  </component>
</template>

<script setup>
	const props = defineProps({
		label: { type: String, default: () => '' },
		type: { type: String, default: () => 'button' },
		disabled: { type: Boolean, default: () => false },
	})
</script>

<style>

</style>
