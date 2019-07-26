import { toNumber, between, getNextItemValue } from '../helpers'

const findSize = (values, sizes) => {
	const inputtedBust = toNumber(values.inputtedBust)
	const inputtedWaist = toNumber(values.inputtedWaist)
	const inputtedHips = toNumber(values.inputtedHips)

	const maxBust = sizes.findIndex(({ bust }, index, sizes) =>
		between(inputtedBust, bust, getNextItemValue(sizes, index, 'bust')),
	)
	const maxWaist = sizes.findIndex(({ waist }, index, sizes) =>
		between(inputtedWaist, waist, getNextItemValue(sizes, index, 'waist')),
	)
	const maxHips = sizes.findIndex(({ hips }, index, sizes) =>
		between(inputtedHips, hips, getNextItemValue(sizes, index, 'hips')),
	)
	const findedSizeIndex = Math.max(maxBust, maxWaist, maxHips)
	const findedSize = sizes[findedSizeIndex] || {}

	return findedSize
}

export default findSize
