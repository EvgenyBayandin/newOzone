import getData from "./getData";
import renderGoods from "./renderGoods";
import { funcFilter } from "./filters";
import { debounce } from "./helpers";


const search = () => {
	const searchInput = document.querySelector('.search-wrapper-input');
	const minInp = document.getElementById('min')
	const maxInp = document.getElementById('max')
	const checkInp = document.getElementById('discount-checkbox')
	const checkMark = document.querySelector('.filter-check-checkmark')

	// оптимизируем запросы к серверу из поиска
	// 1000-3000 milliseconds задерка после ввода воследнего символа в поиск перед отправкой запроса к серверу
	// const debounceSearch = debounce((event) => {
	// 	getData().then((data => {
	// 		renderGoods(searchFilter(data, event.target.value))
	// 	}))
	// }, 1000)

	const debounceFunc = debounce((min = '', max = '', checkValue = false, searchValue = '') => {
		getData().then((data => {
			renderGoods(funcFilter(data, min, max, checkValue, searchValue))
		}))
	})

	searchInput.addEventListener('input', () => {
		debounceFunc(minInp.value, maxInp.value, checkInp.value, searchInput.value)
	})

	minInp.addEventListener('input', () => {
		debounceFunc(minInp.value, maxInp.value, checkInp.value, searchInput.value)
	})

	maxInp.addEventListener('input', () => {
		debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value)
	})

	checkInp.addEventListener('input', () => {
		if (checkInp.checked) {
			checkMark.classList.add('checked')
		} else {
			checkMark.classList.remove('checked')
		}
		debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value)
	})
}
export default search