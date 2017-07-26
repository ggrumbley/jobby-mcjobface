import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  _renderLastSlide(i) {
    if (i === this.props.data.length - 1) {
      return (
        <Button
          title="Find me a job!"
          buttonStyle={styles.button}
          raised
          onPress={this.props.onComplete}
        />
      );
    }
  }

  _renderSlides() {
    return this.props.data.map((slide, i) => {
      return (
        <View key={slide.text} style={[styles.slide, { backgroundColor: slide.color }]}>
          <Text style={styles.slideText}>{slide.text}</Text>
          {this._renderLastSlide(i)}
        </View>
      );
    });
  }

  render () {
    return (
      <ScrollView
        horizontal
        pagingEnabled
      >
        {this._renderSlides()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: 'white'
  },
  button: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
});

export default Slides;