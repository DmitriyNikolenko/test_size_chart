import sizes from './sizes'

const last = sizes.length - 1

export default Object.freeze({
	MIN_BUST: sizes[0].bust,
	MAX_BUST: sizes[last].bust,
	MIN_WAIST: sizes[0].waist,
	MAX_WAIST: sizes[last].waist,
	MIN_HIPS: sizes[0].hips,
	MAX_HIPS: sizes[last].hips,
})




