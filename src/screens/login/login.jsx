import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	TextInput,
	Image,
	Text,
	Keyboard,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import Btn from '../../components/btn/btn'
import imgTitle from '../../../assets/titleInstagram.png'
import { useNavigation } from '@react-navigation/native'

export function Login() {
	const navigation = useNavigation()

	const [isKeyboardVisible, setKeyboardVisible] = useState(false)

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			() => {
				setKeyboardVisible(true) // or some other action
			}
		)
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				setKeyboardVisible(false) // or some other action
			}
		)

		return () => {
			keyboardDidHideListener.remove()
			keyboardDidShowListener.remove()
		}
	}, [])
	return (
		<TouchableWithoutFeedback
			onPress={Keyboard.dismiss}
			style={styles.login_touchablewithoutfeedback}
		>
			<View
				style={
					isKeyboardVisible === true
						? styles.login_container_keyboard
						: styles.login_container
				}
			>
				<Text style={styles.login_text_back} onPress={navigation.goBack}>
					{'<'}
				</Text>
				<Image source={imgTitle} style={styles.login_img_instagram}></Image>
				<TextInput
					style={styles.login_textinput}
					placeholder='Teléfono, usuario o correo electrónico'
				></TextInput>
				<TextInput
					style={styles.login_textinput}
					placeholder='Contraseña'
					secureTextEntry={true}
				></TextInput>
				<Text style={styles.login_text_lostpassword} onPress={() => {}}>
					¿Olvidaste la contraseña?
				</Text>
				<Btn text={'Siguiente'} screen={'login'} />
				<View style={styles.login_newuser}>
					<Text>¿No tienes cuenta? </Text>
					<Text style={styles.login_text_linknewuser} onPress={() => {}}>
						Registrate
					</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Login

const styles = StyleSheet.create({
	login_touchablewithoutfeedback: {
		flex: 1,
		height: '100%',
		width: '100%',
	},
	login_text_back: {
		position: 'absolute',
		top: 30,
		color: 'black',
		width: '100%',
		textAlign: 'left',
		padding: 15,
		fontWeight: 'bold',
		fontSize: 30,
	},
	login_container_keyboard: {
		paddingTop: 70,
		backgroundColor: 'blue',
		height: '100%',
		width: '100%',
		position: 'absolute',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	login_container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	login_textinput: {
		height: 45,
		borderRadius: 5,
		fontSize: 16,
		padding: 10,
		margin: 10,
		width: '92%',
		fontFamily: 'Roboto',
		backgroundColor: '#E5E5E5',
	},
	login_img_instagram: {
		resizeMode: 'contain',
		height: 80,
	},
	login_text_lostpassword: {
		color: '#5AC2FE',
		width: '100%',
		textAlign: 'right',
		padding: 15,
		fontWeight: '900',
	},
	login_newuser: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		flexDirection: 'row',
		height: 80,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopWidth: 1,
		borderTopColor: '#E5E5E5',
	},
	login_text_linknewuser: {
		color: '#5AC2FE',
	},
})
