<template>
  <view class="container">
    <image
        :style="{width: 300, height: 300}"
        :source="require('../../assets/doctor.gif')"
      />
    <text class="text-color-primary">Search</text>
    <FormInput :navigation="navigation" :data="fetchedData"/>
  </view>
</template>

<script>
import Store from '../store';
// import FormInput from '../components/FormInput.vue';
import FormInput from '../components/FormInput';
import doctorGif from '../../assets/doctor.gif'

export default {
  name: "HomeScreen",
  components: {
    FormInput
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
      fetchedData: Store.state.data
    };
  },
  methods: {
    handleBtnClickCount() {
      this.navigation.navigate("Details");
      Store.dispatch('increment')
    },
  },
  created: function() {
    Store.dispatch('fetch_data')
    Store.dispatch('fetch_people')
  }
};
</script>

<style>
.container {
  background-color: #47b5ac;
  align-items: center;
  /* justify-content: center; */
  flex: 1;
}
.text-color-primary {
  font-size: 25;
  font-weight: bold;
  color: white;
  margin-bottom: 10;
}
</style>
