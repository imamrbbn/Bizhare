<template>
  <root>
    <app-navigator></app-navigator>
  </root>
</template>

<script>
import { Root } from "native-base";

import HomeScreen from "./screens/HomeScreen.vue";
import DetailScreen from './screens/DetailScreen.vue';
import ProfileScreen from './screens/ProfileScreen.vue'

import {
  createAppContainer,
  createStackNavigator
} from "vue-native-router";

const StackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: "none"
  }
)

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { 
    Root,
    AppNavigator 
  }
}

</script>
