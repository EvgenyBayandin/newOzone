export const debounce = (func, ms = 300) => {
	let timer
	// очищаем значение таймера перед формированием запроса на сервер. задержка дает дождаться введения следующего симфола в поле поиска.
	// устанавливаем новое значение таймера с каждымм вводом символа в поле поиска, так ожидаем ввода всех символов и затем формируем запрос на сервер 
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => { func.apply(this, args) }, ms)
	}
}