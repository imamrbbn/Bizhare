<template>
  <view class="container">
    <!-- <button
      v-bind:onPress="handleBtnClickCount"
      :title="btnTitle" 
    /> -->
    
    <text class="text-title">
      Location: {{area}}
    </text>
      <TablePeople :data="fetchedPeople" :navigation="navigation"/>
  </view>
</template>

<script>
import Store from '../store';
import FormInput from '../components/FormInput.vue';
import TablePeople from '../components/TablePeople.js'

export default {
  name: "HomeScreen",
  components: {
    FormInput,
    TablePeople
  },
  props: {
    navigation: {
      type: Object
    },
  },
  data: function() {
    return {
      btnTitle: "Click Me",
      btnClickCount: Store.state.count,
      fetchedPeople: Store.state.people,
      area: 'Kebon Jeruk'
    };
  },
  methods: {
    handleBtnClickCount() {
      this.navigation.navigate("Home");
      Store.dispatch('increment')
    },
  },
  created: function() {
    Store.dispatch('fetch_people')
  }
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  flex: 1;
  margin-top: 50;
}
.text-color-primary {
  color: blue;
}
.text-title {
  font-size: 25;
  font-weight: bold;
  color: #065c6f;
}
</style>
