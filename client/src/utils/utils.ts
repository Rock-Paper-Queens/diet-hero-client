export const numberWithCommas = (x: number, decimalPoint?: number) => {
	let [integer, decimal] = x.toString().split(".");
	integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	if (!decimal) return integer;

	if (decimalPoint) decimal = decimal.slice(0, decimalPoint);
	return integer + "." + decimal;
};
