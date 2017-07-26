import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Jobby McJobface', color: '#03A9F4' },
  { text: 'Find a job today', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
]

class WelcomeScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Slides data={SLIDE_DATA} />
      </View>
    )
  }
}

export default WelcomeScreen;