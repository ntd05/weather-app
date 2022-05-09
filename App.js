import React from 'react';
import { Alert, Text, View, Image, TextInput, StyleSheet,Button } from 'react-native';
import { useState, useEffect } from 'react';
import Rain from './assets/rain.png';
import Search from './assets/search.png';

export default function CategoryListItem(props) {
  const  { name, key } = props;

  const [citySearch, setCitySearch]   = useState('--');
  const [cityResult, setCityResult]   = useState('Hà Nội');
  const [ weather, setWeather] = useState({});

  const APP_ID ='bcb394ae008590e4762a2a840458af89';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityResult}&appid=${APP_ID}&units=metric&lang=vi`;



  async function getWeather() {
    const data = await fetch(URL).then(res => res.json());
    //console.log(data.temp);
    setWeather([data]);
  }

  useEffect(() => {
        getWeather();
        //console.log(weather);
    });

  




  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style ={styles.input} 
          placeholder="Nhập thành phố" 
          onChangeText={newCity => setCitySearch(newCity)}></TextInput>
        <Button
          style ={styles.textStyle}
          title='tim'
          onPress={() => setCityResult(citySearch)}
        />
      </View>
      
      <Text style ={styles.textStyle} >{weather.name}</Text>
      <Text style ={styles.textStyle} >{weather.description}</Text>
      <Image style = {styles.categoryImage} source ={Rain} />
      <Text style ={styles.textStyle} >{weather.temp}°</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      marginBottom: 20,
      padding: 16,
      borderRadius: 4,
      backgroundColor: '#65cee7',
      shadowColor: '#000'
  },
  searchContainer: {
    display: 'flex',
  },
  searchImage: {
    width: 30,
    height: 30
},
  categoryImage: {
      width: 100,
      height: 100
  },
  textStyle: {
      textTransform: 'uppercase',
      marginTop:30,
      fontSize: 18,
      color: 'white'

  },
  input: {
    textTransform: 'uppercase',
    marginTop:30,
    fontSize: 18,
    color: 'white',
    borderBottomColor: 'white'

}
});