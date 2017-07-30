import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';


class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this._onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._onAuthComplete(nextProps);
  }

  _onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render () {
    return (
      <View />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps, actions)(AuthScreen);