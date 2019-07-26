export const validateSizeForm = ({ inputtedBust, inputtedWaist, inputtedHips }) => {
	const errors = {}
	if (inputtedBust && inputtedBust < ranges.MIN_BUST)
		errors.bust = `Please enter a value greater than or equal to ${ranges.MIN_BUST}.`
	if (inputtedBust && inputtedBust > ranges.MAX_BUST)
		errors.bust = `Please enter a value less than or equal to ${ranges.MAX_BUST}.`
	if (inputtedWaist && inputtedWaist < ranges.MIN_WAIST)
		errors.waist = `Please enter a value greater than or equal to ${ranges.MIN_WAIST}.`
	if (inputtedWaist && inputtedWaist > ranges.MAX_WAIST)
		errors.waist = `Please enter a value less than or equal to ${ranges.MAX_WAIST}.`
	if (inputtedHips && inputtedHips < ranges.MIN_HIPS)
		errors.hips = `Please enter a value greater than or equal to ${ranges.MIN_HIPS}.`
	if (inputtedHips && inputtedHips > ranges.MAX_HIPS)
		errors.hips = `Please enter a value less than or equal to ${ranges.MAX_HIPS}.`

	const validated = !Object.keys(errors).length
	const filled = !!inputtedBust && !!inputtedWaist && !!inputtedHips

	return { errors, validated, filled }
}
