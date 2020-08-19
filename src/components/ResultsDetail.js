import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.t} >{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    marginLeft:15,
  },
  image: {
    width:250,
    borderRadius: 4,
    height:150,
    marginBottom:5,
  },
  name: {
    fontWeight:"bold",
    fontSize:16,
  },
  t: {
    marginBottom:10,
  }

})

export default ResultsDetail;