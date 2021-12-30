import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Btn = ({ text, screen }) => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity
			style={styles.btn}
			onPress={() => navigation.navigate(screen)}
		>
			<Text style={styles.btn_text}>{text}</Text>
		</TouchableOpacity>
	)
}
export default Btn

const styles = StyleSheet.create({
	btn: {
		position: 'relative',
		height: 45,
		width: '92%',
		backgroundColor: '#5AC2FE',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		color: 'white',
	},
	btn_text: {
		fontFamily: 'Roboto',
		fontSize: 16,
		color: 'white',
		fontWeight: '900',
	},
})
