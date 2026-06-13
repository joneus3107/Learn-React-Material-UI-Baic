export const formatCurrency = num => {
	return new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'narrowSymbol',
	}).format(num);
}