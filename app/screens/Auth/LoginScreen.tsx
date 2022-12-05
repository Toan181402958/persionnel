import NavigationUtil from '@app/navigation/NavigationUtil'
import React from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import throttle from 'lodash/throttle'
import RegisterScreen from './RegisterScreen'

const LoginScreen = props => {
  const requireDebouce = throttle(() => {
    console.log('throttle')
    requestLogin()
  }, 2000)

  let isMounted = false
  const [loading, setLoading] = React.useState(false)
  const requestLogin = () => {
    if (loading) {
      return
    }
    setLoading(true)
    console.log('request login')
    setTimeout(() => {
      if (!isMounted) {
        console.log('login component unmounted')
        return
      }
      setLoading(false)
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'SplashScreen' }],
      })
    }, 5000)
  }
  React.useEffect(() => {
    console.log('login mounted')
    isMounted = true
    return () => {
      isMounted = false
      console.log('login unmounted')
    }
  }, [])
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: '#336',
      }}
    >
      <Text style={{ marginBottom: 100 }}>Login</Text>
      <Button
        onPress={() => {
          requireDebouce()
        }}
        title="Login to continue"
      />
      <Button
        onPress={() => {
          props.navigation.pop()
        }}
        title="Cancel"
      />
      <Button
        onPress={() => {
          NavigationUtil.navigate('registerScreen')
        }}
        title="Register"
      />
      {loading && <ActivityIndicator />}
    </View>
  )
}

export default LoginScreen
