<template>
    <Header/>
    <main class="grid-in-main">
        <slot/>
    </main>
    <Footer/>
</template>

<script setup>
    import Header from '../components/header/Header.vue'
</script>

<script>
export default {
    name: 'Layout'
}
</script>


<style>

</style>
