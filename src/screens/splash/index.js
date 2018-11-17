import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { isLoggedIn } from '../../redux/AuthRedux'
import StartupActions from '../../redux/StartupRedux'
import ReduxPersist from '../../config/ReduxPersist'
import auth from '../../features/auth';
import app from '../../features/app';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.rehydrated) {
      if (nextProps.isLoggedIn) {
        app()
        this.props.startup()
      } else {
        auth()
      }
    }
  }

  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity>
          <Text> SplashScreen </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    rehydrated: state._persist.rehydrated
  }
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})


export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)