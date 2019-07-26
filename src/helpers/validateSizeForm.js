import { toNumber } from '../helpers'

const validateSizeForm = (values, ranges) => {
	const inputtedBust = toNumber(values.inputtedBust)
	const inputtedWaist = toNumber(values.inputtedWaist)
	const inputtedHips = toNumber(values.inputtedHips)

	const errors = {}
	if (inputtedBust && inputtedBust < ranges.MIN_BUST)
		errors.bust = `Please enter a value greater than or equal to ${ranges.MIN_BUST}.`
	if (inputtedBust && inputtedBust > ranges.MAX_BUST)
		errors.bust = `Please enter a value less than or equal to ${ranges.MAX_BUST}.`
	if (!inputtedBust) errors.bust = `Bust required.`
	if (values.inputtedBust && !+values.inputtedBust) errors.bust = `Digits only.`
	if (inputtedWaist && inputtedWaist < ranges.MIN_WAIST)
		errors.waist = `Please enter a value greater than or equal to ${ranges.MIN_WAIST}.`
	if (inputtedWaist && inputtedWaist > ranges.MAX_WAIST)
		errors.waist = `Please enter a value less than or equal to ${ranges.MAX_WAIST}.`
	if (!inputtedWaist) errors.waist = `Waist required.`
	if (values.inputtedWaist && !+values.inputtedWaist) errors.waist = `Digits only.`
	if (inputtedHips && inputtedHips < ranges.MIN_HIPS)
		errors.hips = `Please enter a value greater than or equal to ${ranges.MIN_HIPS}.`
	if (inputtedHips && inputtedHips > ranges.MAX_HIPS)
		errors.hips = `Please enter a value less than or equal to ${ranges.MAX_HIPS}.`
	if (!inputtedHips) errors.hips = `Hips required.`
	if (values.inputtedHips && !+values.inputtedHips) errors.hips = `Digits only.`

	const validated = !Object.keys(errors).length
	const filled = !!values.inputtedBust && !!values.inputtedWaist && !!values.inputtedHips

	return { errors, validated, filled }
}

export default validateSizeForm
