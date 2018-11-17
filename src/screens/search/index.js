import React, { Component } from 'react';
import { Searchbar } from 'react-native-paper';

export default class Search extends Component {
  state = {
    firstQuery: '',
  };

  render() {
    const { firstQuery } = this.state;
    return (
      <Searchbar
        style={{
          width: 360,
          height: 44,
          justifyContent: 'center',
          alignItems: 'center'
      }}
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={firstQuery}
      />
    );
  }
}
