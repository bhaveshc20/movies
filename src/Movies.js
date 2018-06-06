import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native';

import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';
import { movies } from './data';

export default class Movies extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state ={
    popupIsOpen: false,
  }

  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie
    })
  }
  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {movies.map((movie, index) => <MoviePoster
            movie={movie}
            onOpen={this.openMovie}
            key={index}
          />)}
        </ScrollView>
        <MoviePopup
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});