import React, { Component } from 'react';
import { View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import { TextInput, Button, Text } from 'react-native-paper';
import ScreenIDs from '../../config/ScreenIDs'
import Register from '../../features/auth/children/Register';
import AuthActions from '../../redux/AuthRedux'
import Error from '../../components/Error';
import I18n from '../../config/I18n';
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../../Theme/Colors';
import backgroundSource from "../../assets/background.png";
import inputStyle from './Styles'
import app from '../../features/app'

class Login extends Component {
  state={
    email: '',
    password: ''
  }

  componentWillReceiveProps(nextProps) {
    const { error, loading, data } = nextProps
    if (loading) return
    if (error) return
    if (data) app()
  }

  handleLoginPressed = () => {
    const { email, password } = this.state
    return this.props.loginRequest(email, password)
  };

  handleNavigateToRegister = () => {
    Navigation.push(ScreenIDs.LOGIN, Register)
  }

  render() {
    const { error, loading } = this.props
    return (
      <ImageBackground 
          source={backgroundSource}
          style={{ flex: 1 }}
        >
        <SafeAreaView style={{ marginTop: 200 }}>
          <View style={inputStyle.container}>
          {error && <Error error={error} />}
          <TextInput
            style={{ backgroundColor: Colors.inputBackground}}
            underlineColor='#ffffff'
            label='Email'
            error={error}
            autoCapitalize='none'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={{ backgroundColor: Colors.inputBackground }}
            underlineColor='#ffffff'
            label='Password'
            error={error}
            autoCapitalize='none'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
          <Button
            dark
            size={20}
            color={Colors.green}
            icon={({ size, color }) => <Icon name="ios-tennisball" size={size} color={color} />}
            mode='contained'
            loading={loading}
            onPress={this.handleLoginPressed}
          >
              {I18n.loginButton}
          </Button>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.handleNavigateToRegister}>
            <Text style={{ color: '#fff' }}>{I18n.navigateToRegister}</Text>
          </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, error, data } = state.auth
  return { loading, error, data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (email, password) => dispatch(AuthActions.loginRequest(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
