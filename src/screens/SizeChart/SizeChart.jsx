import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { SafeAreaView, ScrollView, View, Text, Input, Divider, Card, Image, Logo, Display } from '../../components'
import { between, getNextItemValue, validateSizeForm, findSize } from '../../helpers'
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
		const findedSize = findSize({ inputtedBust, inputtedWaist, inputtedHips }, sizes)
		setCalculatesSize(findedSize)
	}, [sizes, inputtedBust, inputtedWaist, inputtedHips])

	// Validate form.
	const { errors, validated, filled } = useMemo(
		() => validateSizeForm({ inputtedBust, inputtedWaist, inputtedHips }, ranges),
		[ranges, inputtedBust, inputtedWaist, inputtedHips],
	)

	return (
		<SafeAreaView>
			<ScrollView>
				<Logo />
				<Card title="Size calculator">
					<Input
						placeholder="Input bust..."
						label="Bust"
						value={inputtedBust}
						onChangeText={setInputtedBust}
						keyboardType="number-pad"
						errorMessage={errors.bust}
						selectTextOnFocus
					/>
					<Input
						placeholder="Input waist..."
						label="Waist"
						value={inputtedWaist}
						onChangeText={setInputtedWaist}
						keyboardType="number-pad"
						errorMessage={errors.waist}
						selectTextOnFocus
					/>
					<Input
						placeholder="Input hips..."
						label="Hips"
						value={inputtedHips}
						onChangeText={setInputtedHips}
						keyboardType="number-pad"
						errorMessage={errors.hips}
						selectTextOnFocus
					/>
					<Divider />
					<Display condition={validated && filled && !!calculatesSize.size}>
						<Text h4>{`Your Size is: ${calculatesSize.size}`}</Text>
						<Text h4>{`Your UK Size is: ${calculatesSize.UK}`}</Text>
						<Text h4>{`Your EU Size is: ${calculatesSize.Germany}`}</Text>
					</Display>
					<Display condition={!filled}>
						<Text h4>Wait for input parameters...</Text>
					</Display>
					<Display condition={filled && !validated}>
						<Text h3>Parameters are incorrect.</Text>
					</Display>
				</Card>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SizeChartScreen
