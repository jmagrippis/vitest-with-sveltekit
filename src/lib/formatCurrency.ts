const formatter = new Intl.NumberFormat('en-GB', {
	style: 'currency',
	currency: 'GBP',
	minimumFractionDigits: 0,
})

export const formatCurrency = (value: number) => formatter.format(value)
