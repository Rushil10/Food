import React,{useState} from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar= ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput style={styles.inputStyle} placeholder="   Search" value={term} onChangeText={newTerm => onTermChange(newTerm)} autoCorrect={false} autoCapitalize="none" onEndEditing={()=>onTermSubmit()} />
    </View>
  )
}

const styles=StyleSheet.create({
  background:{
    backgroundColor:"lightgray",
    height:50,
    borderRadius:5,
    marginHorizontal:20,
    marginTop:20,
    flexDirection:"row",
    marginBottom:10,
  },
  inputStyle: {
    fontSize:18,
    //borderLeftWidth:1,
    //borderLeftColor:"black",
    flex:1,
  },
  iconStyle: {
    alignSelf:'center',
    fontSize:35,
    marginHorizontal:10,
  }
})

export default SearchBar;