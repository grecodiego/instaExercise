import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WellcomeScreen from './src/screens/wellcomeScreen/wellcomeScreen'
import Login from './src/screens/login/login'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName='wellcomeScreen'
			>
				<Stack.Screen name='wellcomeScreen' component={WellcomeScreen} />
				<Stack.Screen name='login' component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
