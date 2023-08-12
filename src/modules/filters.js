export const categoryFilter = (goods, value) => {
	return goods.filter((goodsItem) => {
		return goodsItem.category === value
	})
}

export const funcFilter = (goods, minValue, maxValue, checkValue, searchValue) => {
	return goods.filter((goodsItem) => {
		const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue.trim()) : true
		const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue.trim()) : true
		const isSale = checkValue ? goodsItem.sale : true

		return isMin &&
			isMax &&
			isSale &&
			goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
	})
}