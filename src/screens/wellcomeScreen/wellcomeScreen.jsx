import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Btn from '../../components/btn/btn'
import imgTitle from '../../../assets/titleInstagram.png'

export function WellcomeScreen() {
	return (
		<View style={styles.wellcomescreen_container}>
			<Image
				source={imgTitle}
				style={styles.wellcomescreen_img_instagram}
			></Image>
			<Text style={styles.wellcomescreen_text}>Wellcome Insta Excercise!</Text>
			<Btn text={'Siguiente'} screen={'login'} />
		</View>
	)
}

export default WellcomeScreen

const styles = StyleSheet.create({
	wellcomescreen_container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	wellcomescreen_text: {
		paddingTop: 30,
		paddingBottom: 50,
		fontSize: 20,
		fontFamily: 'Roboto',
	},
	wellcomescreen_img_instagram: {
		resizeMode: 'contain',
		height: 100,
	},
})
