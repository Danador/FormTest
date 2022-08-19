<template>
	<div v-if="!submited" class="">
		<form ref="formEl" class="text-surface" @submit.prevent="submit">
			<h2 class="mt-8 text-2xl font-bold text-center">Регистрация</h2>
			<fieldset class="mt-10">
				<p class="text-lg font-bold text-center">Обязательные поля</p>
				<div class="grid mt-6 sm:grid-cols-2 gap-x-8">
					<fieldset class="grid gap-y-4">
						<template v-for="item in inputs" :key="item">
							<Input
								v-model="form[item.value]"
								:label="item.title"
								:type="item.type"
								:pattern="item.pattern"
								:name="item.name"
								:mask="item.mask"
								required
							/>
						</template>
							<Input
								v-model="repeatPassword"
								label="Повторите пароль"
								type="password"
								required
							/>
							<span v-if="comparisonPas">Поля не совпадают</span>
					</fieldset>
					<fieldset class="grid self-start gap-y-4">
						<Input
							v-model="form.date"
							label="Дата рождения"
							type="text"
							mask="date"
							name="entry.1202823047"
						/>
						<label class="grid">
							<span class="text-grayscale-hard">Населенный пункт</span>
							<Select
								name="entry.187457390"
								class="px-4 py-2 shadow-[1px_2px_4px_rgba(0,0,0,0.1)] rounded cursor-pointer"
								:options="cities"
							/>
						</label>
						<label>
							<span class="text-grayscale-hard">Пол</span>
							<div class="grid w-full grid-cols-2 p-1 bg-grayscale-light">
								<label>
									<input class="sr-only peer" checked type="radio" name="entry.1842197305" value="Мужчина">
									<span class="flex items-center justify-center px-2 py-1 transition-all duration-300 rounded cursor-pointer peer-checked:text-white peer-checked:bg-mantis">Мужчина</span>
								</label>
								<label>
									<input class="sr-only peer" type="radio" name="entry.1842197305" value="Женщина">
									<span class="flex items-center justify-center px-2 py-1 transition-all duration-300 rounded cursor-pointer peer-checked:text-white peer-checked:bg-mantis">Женщина</span>
								</label>
							</div>
						</label>
					</fieldset>
				</div>
				<p class="mt-10 text-lg font-bold text-center">Необязательные поля</p>
				<div class="grid mt-6 sm:grid-cols-2 gap-x-8">
					<Input
						v-model="form.card"
						label="Номер карты"
						type="text"
						mask="card"
						name="entry.1971327742"
					/>
					<Input
						v-model="form.email"
						label="E-mail"
						type="email"
						name="entry.2026011489"
					/>
					<label class="grid items-center grid-flow-col mt-4 gap-x-2 max-w-max">
						<input name="entry.1572629228" class="sr-only peer" type="checkbox">
						<span class="flex items-center justify-center w-5 h-5 text-white transition-all duration-300 bg-white rounded peer-checked:bg-mantis peer-checked:ring-mantis peer-disabled:bg-grayscale-light ring-silver ring-1">
							<svg class="w-3 h-3">
								<use xlink:href="/icons/all-icons.svg#check"></use>
							</svg>
						</span>
						<span>У меня нет карты лояльности</span>
					</label>
				</div>
			</fieldset>
			<AppButton
				class="mx-auto mt-10"
				type="submit"
			>{{ submited ? 'Отправлено' : 'Отправить' }}</AppButton>
		</form>
	</div>
	<div v-else>
		<div v-if="submited" class="text-2xl text-center text-mantis">
			Вы успешно <br> зарегистрировались!
		</div>
		<div v-else>Не успешно</div>
		<AppButton
			@click="$emit('close')"
			class="mx-auto mt-10"
		>К покупкам</AppButton>
	</div>
</template>

<script setup>
	import { ref, watch, reactive } from 'vue'

	const form = reactive({
		phone: '',
		lastName: '',
		firstName: '',
		password: '',
		date: '',
		gender: '',
		city: '',
		card: '',
		email: ''
	})

	const formEl = ref(null)
	const repeatPassword = ref('')
	const comparisonPas = ref(false)
	const emit = defineEmits(['close'])

	watch(repeatPassword, () => {
		comparisonPas.value = repeatPassword.value !== form.password
	})
	const url = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSfWkOvEFciIvJLQGUEN1-O1FnTLC6J6Rn6h7TiOdLw5ckEU-A/formResponse'
	const submited = ref(false)
	const submit = async () => {

			const payload = {
				method: 'POST',
				mode: 'no-cors',
				body: new FormData(formEl.value)
			}

			try {
				await fetch(url, payload)
				submited.value = true
				message = 'Вы успешно <br> зарегистрировались!'
			} catch (e) {
				submited.value = true
				message = 'Увы, но произошла ошибка попробуйте еще раз!'
			} finally {
				setTimeout(() => {
					formEl.value.reset()
					submited.value = false
				}, 5000)
			}
	}
	const formData = () => ({
		message: '',
		url: this.url,
		sent: false,
		sending: false,
		buttonLabel: 'Продолжить',
		refferer: document.referrer,
		init() {
		},
		async submit() {

		}
	})
	const inputs = [
		{
            "title" : "Телефон",
			"type" : "tel",
			"mask": "tel",
			"value": "phone",
			"name" : "entry.1100523780"
        },
		{
            "title" : "Фамилия",
			"type" : "text",
			"attr": "minlength='3'",
			"value": "lastName",
			"name" : "entry.1650808696",
			"pattern": "[^А-Яа-яЁё]"
        },
		{
            "title" : "Имя",
			"type" : "text",
			"attr": "minlength='3'",
			"value": "firstName",
			"name" : "entry.1106257749",
			"pattern": "[^А-Яа-яЁё]"
        },
		{
            "title" : "Пароль",
			"type" : "password",
			"value": "password",
			"name" : "entry.128624192"
        }
	]
	const cities = [
		{
            "title" : "Екатеринбург"
        },
		{
            "title" : "Нижний Тагил"
        },
		{
            "title" : "Каменск-Уральский"
        },
		{
            "title" : "Первоуральск"
        }
	]

</script>
