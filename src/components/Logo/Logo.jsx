import React from 'react'
import { View, Image } from '../../components'
import images from '../../images'
import styles from './styles'

const Logo = () => (
	<View
		style={styles.logoContainer}
	>
		<Image 
			source={images.LOGO}
			style={styles.logo}
			resizeMode="contain"
		/>
	</View>
)

export default Logo