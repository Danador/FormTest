<template>
    <header class="bg-white grid-in-header shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
        <div class="container grid items-center px-5 py-4 mx-auto grid-cols-1a">
            <a href="/" class="transition-all duration-300 rounded-lg outline-none max-w-max hover:opacity-50 focus:outline-none focus-visible:ring-black/80 ring-1 ring-transparent ring-offset-2">
                <svg class="max-w-[120px] h-[87px] sm:max-w-[413px]">
                    <use xlink:href="/public/icons/logo.svg#logo"></use>
                </svg>
            </a>
            <AppButton
				@click="showModal = !showModal"
				class="min-w-[140px] sm:max-w-[140px]"
			>
				Регистрация
			</AppButton>
        </div>
    </header>
	<Transition
		enter-active-class="animate-opacity-enter-active"
		leave-active-class="animate-opacity-leave-active"
	>
		<AppModal
			v-if="showModal"
			@close="showModal = false"
			class="z-50"
		>
			<FormRegistration/>
		</AppModal>
	</Transition>
</template>

<script setup>
	import { ref } from 'vue'
	import FormRegistration from '../form/Form.vue'

	const showModal = ref(false)

</script>

<style>

</style>
