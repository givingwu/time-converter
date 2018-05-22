function geneRange(range) {
	if (!+range) throw new TypeError()
	if (+range <= 0) throw new ReferenceError()

	range = Math.abs(+range)

	let d = h = m = s = ms = 0

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

const fixLen = n => n < 10? '0'+n : n.toString()
const second = 1e3
const minute = 6e4 // 1e3 * 60
const hour = 3.6e6 // 6e4 * 60
const day = 8.64e7 // 3.6e5 * 24


var old = new Date('2018-5-20 05:20:20')
var older = new Date('2018-5-20 22:00:20')
var now = new Date()

function test() {
	console.time('geneRange-12-times-used')
	var i = 1;

	while (('' + i).length <= 10) {
		console.log('geneRange:' + i, geneRange(i))
		console.log('')
		i = +(('' + i) + (+((''+i).slice(-1)) + 1))
	}

	console.log('')
	console.log(`geneRange from ${old} to ${older}:`)
	console.log('geneRange:', geneRange(older - old))

	console.log('')
	console.log(`geneRange from ${old} to ${now}:`)
	console.log('geneRange:', geneRange(now - old))

	console.timeEnd('geneRange-12-times-used')
}

test()
