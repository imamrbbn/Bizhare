<template>
  <view>
     <!-- :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}" -->
    <text-input
      class="form-input"
      v-model="text"
    />
    
    <button
      :on-press="onPressLearnMore"
      title="Search"
      color="#841584"
      accessibility-label="Learn more about this purple button"
    />

  </view>
</template>

<script>
export default {
  data: function() {
    return {
      text: '',
      searchPhrase: 'haloo'
    };
  },
  props: {
    navigation: {
      type: Object
    },
  },
  methods: {
    onPressLearnMore: function() {
      this.navigation.navigate("Details");
      this.text = ''
    },
    // onTextChanged: function() {
    //   console.log('masuk')
    // },
  },

}
</script>

<style>
.form-input {
  height: 40; 
  width: 300; 
  border-color: gray;
  border-width: 1;
}
</style>