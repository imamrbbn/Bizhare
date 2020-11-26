import React, { useState } from 'react';
import { DataTable, Avatar  } from 'react-native-paper';
import { ScrollView, View, StyleSheet, TextInput, Text, Image, Button } from 'react-native';
import Store from '../store';

export default function TablePeople(props) {
  const [page, setPage] = useState(1)

  let navigation = props.navigation
  let fetchedDoctors = Store.state.people[`${page}`]
  let ButtonPage = []

  for (const key in Store.state.people) {
    ButtonPage.push(
      <View style={styles.button} key={key}>
        <Button color= {page== key ? "#47b5ac" : "#403e56"} onPress={() => setPage(key)} title={key}/>
      </View>
    )
  }

  return (
    <>
      <View style={styles.searchForm}>
        <View style={{flexDirection: 'row', marginTop:20}}>
        <Text style={{fontSize: 20, color: '#403e56'}}>Page : </Text>
          {ButtonPage}
        </View>
      </View>
      <DataTable style={styles.tableContent}>
        <DataTable.Header style={styles.headerTable}>
          <DataTable.Title >
            <View>
              <Text style={styles.textRow}>Photo </Text>
            </View> 
          </DataTable.Title>
          <DataTable.Title >
            <View>
              <Text style={styles.textRow}>Name </Text>
            </View>
          </DataTable.Title>
          <DataTable.Title>
            <View>
              <Text style={styles.textRow}> Speciality</Text>
            </View>
          </DataTable.Title>
        </DataTable.Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">

          {fetchedDoctors && fetchedDoctors.map((doctor, i) => {
            function handleNavigate() {
              Store.dispatch('fetch_profile', doctor.id)
              setTimeout(() => {
                navigation.navigate("Profile", doctor);
              }, 1000)
            
              
            }
            return (
            <DataTable.Row style={styles.bodyTable} key={i} onPress={() => handleNavigate()}>
              <DataTable.Cell>
                <Avatar.Image size={75} source={{uri: `${doctor.photo}`}}/>
              </DataTable.Cell>
              <DataTable.Cell >
                <Text style={{color: '#47b5ac'}}> {doctor.name}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.centerContent}>
                <Text style={{color: '#47b5ac'}}> {doctor.speciality}</Text>
             </DataTable.Cell>
            </DataTable.Row>

            )
          })
        }

        </ScrollView>
      </DataTable>
    </>
  )
}

const styles = StyleSheet.create({
  tableContent : {
    height: 680,
    backgroundColor: 'white',
    marginTop:20,
  },
  button: {
    marginHorizontal: 5,
    width: 25,
  },
  stretch: {
    height: 70,
    width: 70,
  },
  headerTable: {
    backgroundColor: '#47b5ac',
    justifyContent:'center'
  },
  headerTitle: {
    color: 'white',
  },
  bodyTable: {
    height: 100
  },
  textRow : {
    color: 'white', 
    textAlign:'center',
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 15
  },
  centerContent: {
    justifyContent: 'center'
  }
})