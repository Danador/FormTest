<template>
    <div class="container px-2 mx-auto sm:px-5">
		<div class="grid items-center grid-flow-col mt-6 max-w-max gap-x-4">
			<a href="/" class="text-black">Главная</a>
			<svg class="w-6 h-6">
				<use xlink:href="/icons/all-icons.svg#arrow"></use>
			</svg>
			<span class="text-grayscale-hard">Каталог</span>
		</div>
		<div class="mt-7">
			<h1 class="text-surface text-[64px] leading-[96px]"></h1>
			<ul class="grid w-full grid-cols-2 pb-10 md:grid-cols-3 xl:grid-cols-4 gap-y-3 gap-x-4">
				<template v-for="(item, i) in items" :key="item">
					<li
						:class="i + 1 === 6 || i + 1 === 8   ? 'col-span-2' : ''"
						class="first:col-span-2 last:col-span-1 last:row-start-5 last:col-start-2 last:md:row-start-4 last:md:col-start-3 last:xl:col-start-4 last:xl:row-start-3 w-full relative transition-all h-[144px] bg-center bg-cover bg-no-repeat rounded"
						:style="`background-image: url(${item.img});`"
					>
						<a href="#" class="flex items-end h-full p-2.5 transition-all duration-500 rounded before:absolute before:indent-0 bg-gradient-to-t md:hover:bg-gradient-to-t from-mantis/80 to-mantis/0 md:hover:bg-orange/30">
							<p class="text-xs font-bold text-white md:text-m-d">{{ item.title }}</p>
						</a>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>

<script setup>
	const items = [
		{
            "img" : "/images/milk-product.jpg",
            "title" : "Молоко, сыр, яйцо"
        },
        {
            "img" : "/images/bread.jpg",
            "title" : "Хлеб"
        },
        {
            "img" : "/images/vegetables.jpg",
            "title" : "Фрукты и овощи"
        },
        {
            "img" : "/images/grocery.jpg",
            "title" : "Бакалея"
        },
        {
            "img" : "/images/healthy-eating.jpg",
            "title" : "Здоровое питание"
        },
        {
            "img" : "/images/pet-supplies.jpg",
            "title" : "Зоотовары"
        },
        {
            "img" : "/images/baby-food.jpg",
            "title" : "Детское питание"
        },
        {
            "img" : "/images/meat.jpg",
            "title" : "Мясо, птица, колбаса"
        },
        {
            "img" : "/images/non-food-items.jpg",
            "title" : "Непродовольственные товары"
        }
	]
</script>
