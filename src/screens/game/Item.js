import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
  container: { 
    borderRadius: 10,
    borderColor: '#e1e1e1',
    marginHorizontal: 3,
    backgroundColor: '#264832',
    padding: '2%'
  },
  header: {
    flexDirection:"row",
    backgroundColor: '#264832' 
  },
  content: {
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pl3: {
    paddingLeft: '3%',
    alignItems: 'center'
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 30
  }
})

export default class ItemList extends PureComponent {

  makeBoldScore = (first, second) => {
    if(first === second) return 0
    if(first > second) return -1
    return 1
  }
  renderScores = (score) => {
    const bold = this.makeBoldScore(score[0], score[1])
    return (
    <View style={{marginRight: 2}}>
      <Text style={{color: '#fff', fontWeight: bold === -1 ? 'bold' : 'normal'}}>
        {score[0]}
      </Text>
      <Text style={{color: '#fff', fontWeight: bold === 1 ? 'bold' : 'normal'}}>
        {score[1]}
      </Text>
    </View>
    )
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableWithoutFeedback key={item.id} style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Entypo name={'location'} color={'#fff'} size={22}/>
            <Text style={{color: '#fff'}}>{item.address}</Text>
          </View>
          <View style={styles.content}>
            <Image style={styles.image} source={item.opponent_avatar ? {uri: item.opponent_avatar} : require("../../assets/nobody.png")} />
            <View style={styles.pl3}>
              <Text style={{ color: '#fff' }}>{item.opponent_name}</Text>
              <View style={{ flexDirection: 'row'}}>
                {Object.keys(item.score).map(key => this.renderScores(item.score[key]))}
              </View>
            </View>
            <View style={[styles.content]}>
              <FontAwesome name="share-alt" color={'#fff'} size={22}/>
              <TouchableOpacity>
                <FontAwesome name="hashtag" color={'#fff'} size={22}/>
              </TouchableOpacity>
              <AntDesign name="message1" color={'#fff'} size={22}/>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ItemList.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired
};

