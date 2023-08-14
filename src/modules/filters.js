export const searchFilter = (goods, value) => {
	return goods.filter((goodsItem) => {
		goodsItem.title.toLowerCase().includes(value.toLowerCase())
	});
}

export const categoryFilter = (goods, value) => {
	return goods.filter((goodsItem) => {
		return goodsItem.category === value
	})
}

export const priceFilter = (goods, min, max) => {
	return goods.filter((goodsItem) => {
		if (min === '' && max === '') {
			return goodsItem
		} else if (min !== '' && max !== '') {
			return goodsItem.price > +min && goodsItem.price < +max
		} else if (min !== '' && max === '') {
			return goodsItem.price > +min
		} else if (min === '' && max !== '') {
			return goodsItem.price < +max
		}
	})
}

export const hotSaleFilter = (goods, value) => {
	return goods.filter((goodsItem) => {
		if (value) {
			return goodsItem.sale === true
		} else {
			return goodsItem
		}
	})
}



// один из вариантов реализации  фильтра и поиска
// export const funcFilter = (goods, minValue, maxValue, checkValue, searchValue) => {
// 	return goods.filter((goodsItem) => {
// 		const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue.trim()) : true
// 		const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue.trim()) : true
// 		const isSale = checkValue ? goodsItem.sale : true

// 		return isMin &&
// 			isMax &&
// 			isSale &&
// 			goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
// 	})
// }

// items change on goodsItem 
// export const searchFilter = (items, value) => {
// 	return  items.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
// }