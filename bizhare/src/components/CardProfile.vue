<template>
  <view class="container">
     <image
        class="image-profile"
        :source="{uri: data.photo}"
      />
    <view class="text-content">
      <text class="text-name">{{data.name}}</text>
      <text class="text-profile" :style="{marginTop: 20}">Speciality: {{data.speciality}} </text>
      <text class="text-profile">Area: {{data.area}} </text>
      <text class="text-profile">Price: {{data.currency}} {{data.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} </text>
      <text class="text-profile">Schedule: {{data.schedule}} </text>
      <text class="text-profile">Recommendation: {{data.recommendation}} </text>
      <text class="text-profile">Experience: {{data.experience}} </text>
      <text class="text-profile">Description: {{data.description}} </text>
      <view :style="{marginTop: 20, width: 200}">
        <button
          :on-Press="handleBtnLocation"
          title="Locations"
          color="#403e56"
        />
      </view>
    </view>

  </view>
</template>

<script>
import { Linking } from "react-native";

export default {
  name: "CardProfile",
  props: {
    navigation: {
      type: Object
    },
    data : {

    }
  },
  data: function() {
    return {
      // btnTitle: "Click Me",
      // btnClickCount: Store.state.count,
      // fetchedProfile: Store.state.profile
    };
  },
  methods: {
    handleBtnLocation() {
      let lat = this.data.latitude
      let long = this.data.longitute
      Linking.openURL(`http://www.google.com/maps/place/${lat},${long}`) 
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
.text-name {
  font-size: 30;
  font-weight: bold;
  color: white;
  margin-top: 10;
}
.text-id {
  font-size: 20;
}
.container {
  background-color: white;
  align-items: center;
  margin-top: 20;
}
.text-profile {
  font-size: 18;
  text-align: justify;
  margin-top: 5;
  color: #3e3e3e;
  /* font-family:; */
}
.image-profile {
  width: 500; 
  height: 400;
  border-radius: 50;
  z-index: -5;
  top: -50;
  position: absolute;
}
.text-content {
  margin-top: 300;
  align-items: center;
  background-color: #47b5ac;
  height: 100%;
  width: 400;
  border-radius: 50;
  padding-left: 20;
  padding-right: 20;
}
.button-location {
  width: 1;
}

</style>