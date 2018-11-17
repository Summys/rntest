import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import AuthActions from '../../redux/AuthRedux'
import Loading from '../../components/Loading';
import ItemList from './Item';
import ItemSeparator from './ItemSeparator';

class Game extends Component {
  render(){
    const { loading, error, data } = this.props
    if (loading) return <Loading />
    if (error) return <Error error={error} />
    return (
      <FlatList
        style={{marginTop: 20}}
        data={data.rows}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemList item={item} /> }
        ItemSeparatorComponent={() => <ItemSeparator />}
        initialNumToRender={20}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { loading, error, data } = state.games
  return { loading, error, data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(AuthActions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)