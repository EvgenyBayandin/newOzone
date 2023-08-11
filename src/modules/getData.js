import Notify from 'simple-notify'

const getData = (str) => {

	return fetch('https://test-af218-default-rtdb.firebaseio.com/goods.json')
		.then((response) => {
		
			if(response.ok){
				return response.json()
			} else {
			throw new Error('Ошибка выполнения запроса к БД!')
			}
		})
		.catch(error => {
				new Notify({
				status: 'error',
				title: 'Ошибка!',
				text: error.message,
				effect: 'slide',
				type: 3,
				autoclose: true
			})
		})
}

export default getData