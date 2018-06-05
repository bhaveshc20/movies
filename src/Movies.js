import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

import { movies } from './data'

export default class Movies extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          {movies.map((movie, index) => <Text>{movie.title}</Text>)}
          </ScrollView>
        </View>
    );
  }
}