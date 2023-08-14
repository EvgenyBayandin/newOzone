import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter, hotSaleFilter } from "./filters"

const filter = () => {
	const minImput = document.getElementById('min')
	const maxImput = document.getElementById('max')
	const checkboxInput = document.getElementById('discount-checkbox')
	const checkboxSpan = document.querySelector('.filter-check-checkmark')

	minImput.addEventListener('input', () => {
		getData().then((data) => {
			renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minImput.value, maxImput.value));
		})
	})

	maxImput.addEventListener('input', () => {
		getData().then((data) => {
			renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minImput.value, maxImput.value));
		})
	})

	checkboxInput.addEventListener('change', () => {
		if (checkboxInput.checked) {
			checkboxSpan.classList.add('checked')
		} else {
			checkboxSpan.classList.remove('checked')
		}

		getData().then((data) => {
			renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minImput.value, maxImput.value))
		})
	})
}

export default filter