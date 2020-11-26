import React, { useState } from 'react'
import Autocomplete from 'react-native-autocomplete-input';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Store from '../store';

export default function FormInput(props) {
  const [query, setQuery] = useState('')
  let navigation = props.navigation
  let fetchData = Store.state.data
  let data = []
  fetchData.forEach(e => {
    data.push(`${e.city} - ${e.area}`)
  });
  data =  data.filter(e => e.toLowerCase().includes(query.toLowerCase()))

  function handleMovePage(item) {
    setQuery(item)
    navigation.navigate("Details");
    setQuery('')
  }

  return (
    <View style={styles.autocompleteContainer}>
      <Autocomplete
        data={data}
        placeholder="Enter Area or City"
        defaultValue={query}
        onChangeText={text => setQuery(text)}
        renderItem={({ item, i }) => (
          <TouchableOpacity onPress={() => handleMovePage(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
  </View>
  )
}

const styles = StyleSheet.create({
  autocompleteContainer : {
    width: 300,
    height: 200
  },
  itemText: {
    fontSize: 15,
    marginHorizontal: 10,
    marginVertical: 5 
  },
})