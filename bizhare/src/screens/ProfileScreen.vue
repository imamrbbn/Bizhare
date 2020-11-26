<template>
  <view class="container">

    <CardProfile :data="fetchedProfile" :navigation="navigation"/>

  </view>
</template>

<script>
import Store from '../store'
import FormInput from '../components/FormInput.vue'
import CardProfile from '../components/CardProfile.vue'

export default {
  name: "ProfileScreen",
  components: {
    FormInput,
    CardProfile
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
      fetchedProfile: Store.state.profile
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

  }
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  flex: 1;
  /* margin-top: 75; */
}
.text-color-primary {
  font-size: 25;
  font-weight: bold;
  color: #065c6f;
}
</style>
