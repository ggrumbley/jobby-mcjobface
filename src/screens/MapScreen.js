import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -117.1611,
      latitude: 32.7157,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  _onRegionChange = (region) => {
    this.setState({ region });
  }

  _onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  }

  render () {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          onRegionChangeComplete={this._onRegionChange}
          style={{ flex: 1 }}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this._onButtonPress}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
});

export default connect(null, actions)(MapScreen);