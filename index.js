export const second = 1e3
export const minute = 6e4 // 1e3 * 60
export const hour = 3.6e6 // 6e4 * 60
export const day = 8.64e7 // 3.6e5 * 24
export const fixLen = n => n < 10? '0'+n : n.toString()

/**
 * Generates a Time object for the given range milliseconds number
 * @param {Number: milliseconds}  range 			Must pass a Number
 * @return {Object} { d: Number, h: Number, m: Number, s: Number, ms: Number }
 */
export default function geneRange(range) {
	if (!+range) throw new TypeError()
	if (+range <= 0) throw new ReferenceError()

	const second = 1e3
	const minute = 6e4 // 1e3 * 60
	const hour = 3.6e6 // 6e4 * 60
	const day = 8.64e7 // 3.6e5 * 24
	const fixLen = n => n < 10? '0'+n : n.toString()

	range = Math.abs(+range)

	let d = 0
	let h = 0
	let m = 0
	let s = 0
	let ms = 0

	if (range >= day) {
		d = Math.floor(range / day)
		range -= d * day
	}

	if (range >= hour) {
		h = Math.floor(range / hour)
		range -= h * hour
	}

	if (range >= minute) {
		m = Math.floor(range / minute)
		range -= m * minute
	}

	if (range >= second) {
		s = Math.floor(range / second)
		range -= s * second
	}

	if (range) {
		ms = range
	}

	return { d, h, m, s, ms }
}