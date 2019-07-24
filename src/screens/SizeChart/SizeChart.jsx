import React, { useState, useEffect, useMemo } from 'react'
import { SafeAreaView, ScrollView, View, Text, Input, Divider, Card, Image, Logo } from '../../components'
import { isNumber, between, getNextItemValue } from '../../helpers'
import { images } from '../../images'

const DEFAULT_CALCULATED_SIZE = {}

const SizeChartScreen = ({ sizes, ranges }) => {
	// Form data.
	const [inputtedBust, setInputtedBust] = useState()
	const [inputtedWaist, setInputtedWaist] = useState()
	const [inputtedHips, setInputtedHips] = useState()

	// Calculate size.
	const [calculatesSize, setCalculatesSize] = useState(DEFAULT_CALCULATED_SIZE)
	useEffect(() => {
		const maxBust = sizes.findIndex(({ bust }, index, sizes) =>
			between(Number(inputtedBust), bust, getNextItemValue(sizes, index, 'bust')),
		)
		const maxWaist = sizes.findIndex(({ waist }, index, sizes) =>
			between(Number(inputtedWaist), waist, getNextItemValue(sizes, index, 'waist')),
		)
		const maxHips = sizes.findIndex(({ hips }, index, sizes) =>
			between(Number(inputtedHips), hips, getNextItemValue(sizes, index, 'hips')),
		)
		const findedSizeIndex = Math.max(maxBust, maxWaist, maxHips)
		const findedSize = sizes[findedSizeIndex] || {}
		setCalculatesSize(findedSize)
	}, [sizes, inputtedBust, inputtedWaist, inputtedHips])

	// Validate form.
	const { errors, validated } = useMemo(() => {
		const errors = {}
		if (inputtedBust < ranges.MIN_BUST)
			errors.bust = `Please enter a value greater than or equal to ${ranges.MIN_BUST}.`
		if (inputtedBust > ranges.MAX_BUST)
			errors.bust = `Please enter a value less than or equal to ${ranges.MAX_BUST}.`
		if (inputtedWaist < ranges.MIN_WAIST)
			errors.waist = `Please enter a value greater than or equal to ${ranges.MIN_WAIST}.`
		if (inputtedWaist > ranges.MAX_WAIST)
			errors.waist = `Please enter a value less than or equal to ${ranges.MAX_WAIST}.`
		if (inputtedHips < ranges.MIN_HIPS)
			errors.hips = `Please enter a value greater than or equal to ${ranges.MIN_HIPS}.`
		if (inputtedHips > ranges.MAX_HIPS)
			errors.hips = `Please enter a value less than or equal to ${ranges.MAX_HIPS}.`
		const validated = !Object.keys(errors).length
		return { errors, validated }
	}, [inputtedBust, inputtedWaist, inputtedHips])

	// Help calculations.
	const isResulVisible = useMemo(() => {
		return validated && !!calculatesSize.size
	}, [validated, calculatesSize.size])

	return (
		<SafeAreaView>
			<ScrollView>
				<Logo />
				<Card
					title="Size calculator"
					featuredTitle="Using size chart: Bridesmaids, Evening Wear, Prom Dresses,Lenovia Bridal ,LENOVIA VIP"
				>
					<Input
						placeholder="Input bust..."
						label="Bust"
						value={inputtedBust}
						onChangeText={setInputtedBust}
						keyboardType="number-pad"
						errorMessage={errors.bust}
					/>
					<Input
						placeholder="Input waist..."
						label="Waist"
						value={inputtedWaist}
						onChangeText={setInputtedWaist}
						keyboardType="number-pad"
						errorMessage={errors.waist}
					/>
					<Input
						placeholder="Input hips..."
						label="Hips"
						value={inputtedHips}
						onChangeText={setInputtedHips}
						keyboardType="number-pad"
						errorMessage={errors.hips}
					/>
					<Divider />
					{isResulVisible ? (
						<View>
							<Text h4>{`Your Size is: ${calculatesSize.size}`}</Text>
							<Text h4>{`Your UK Size is: ${calculatesSize.UK}`}</Text>
							<Text h4>{`Your EU Size is: ${calculatesSize.Germany}`}</Text>
						</View>
					) : (
						<Text>Wait for input parameters...</Text>
					)}
				</Card>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SizeChartScreen
