import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation'
import { View, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { TextInput, Button, Text } from 'react-native-paper';
import ScreenIDs from '../../config/ScreenIDs'
import AuthActions from '../../redux/AuthRedux'
import Error from '../../components/Error';
import I18n from '../../config/I18n';
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../../Theme/Colors';
import backgroundSource from "../../assets/background.png";
import inputStyle from './Styles'
import app from '../../features/app'

class Register extends Component {
  state={
    email: '',
    password: '',
    fullName: '',
  }

  componentWillReceiveProps(nextProps) {
    const { error, loading, data } = nextProps
    if (loading) return
    if (error) return
    if (data) app()
  }

  handleRegisterPressed = () => {
    const { fullName, email, password } = this.state
    return this.props.registerRequest(fullName, email, password)
  };

  handleNavigateToLogin = () => {
    Navigation.pop(ScreenIDs.REGISTER)
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
            style={{ backgroundColor: Colors.inputBackground }}
            underlineColor='#ffffff'
            label='Full Name'
            error={error}
            autoCapitalize='none'
            value={this.state.fullName}
            onChangeText={fullName => this.setState({ fullName })}
          />
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
            onPress={this.handleRegisterPressed}
          >
              {I18n.registerButton}
          </Button>
          <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.handleNavigateToLogin}>
            <Text style={{ color: '#fff' }}>{I18n.navigateToLogin}</Text>
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
    registerRequest: (fullName, email, password) => dispatch(AuthActions.registerRequest(fullName, email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
