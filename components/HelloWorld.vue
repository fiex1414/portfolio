<template>
  <div id="background">
    <v-container fluid>
      <v-layout ml-5>
              <h1>Om mig</h1>
              </v-layout>
      <v-layout>
        
        <v-flex xs12>
          <div id="click-area" @click="showTwo = !showTwo, showOne = !showOne" >
            <div v-if="showOne">
              <v-img :src="require('../assets/tv-off.png')" contain height="550">
                
              
              </v-img>
            </div>

            <div v-if="showTwo" >
              <v-img :src="require('../assets/tv-on.png')" contain height="550">
                
                 <v-layout justify-center align-start >
                 
                  <video id="videoCV" src="../assets/videoCV.mp4" controls autoplay ></video>
                 
                </v-layout>
              </v-img>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showOne: true,
      showTwo: false
    };
  }
};
</script>

<style scoped>
#background {
  background-color: #b6cfb6;
}
h1 {
  font-family: "Sacramento";
  color: #30654b;
  font-size: 50px;
}
#click-area {
  cursor: pointer;
}


#videoCV{
   width:36%;
  margin-top:145px;
   border:none !important;
}

@media only screen and (max-width: 1200px){
#videoCV{
   width:44%;
}
}



@media only screen and (max-width: 960px){
#videoCV{
   width:54%;
  
}
}

@media only screen and (max-width: 850px){
#videoCV{
   width:57%;
  
}
}

@media only screen and (max-width: 800px){
#videoCV{
   width:60%;
  margin-top:155px;
}
}

@media only screen and (max-width: 750px){
#videoCV{
  margin-top:162px;
}
}

@media only screen and (max-width: 700px){

h1 {
  font-size: 40px;
}
#videoCV{
  margin-top:170px;
}
}

@media only screen and (max-width: 650px){
#videoCV{
  margin-top:180px;
}
}

@media only screen and (max-width: 600px){
#videoCV{
  margin-top:190px;
}
}

@media only screen and (max-width: 550px){
#videoCV{
  margin-top:200px;
}
}

@media only screen and (max-width: 500px){
#videoCV{
  margin-top:205px;
}
h1 {
  font-size: 35px;
}
}

@media only screen and (max-width: 450px){
#videoCV{
  margin-top:212px;
}
}

@media only screen and (max-width: 400px){
#videoCV{
  margin-top:219px;
}
}

@media only screen and (max-width: 375px){
h1 {
  font-size: 30px;
}
#videoCV{
  margin-top:225px;
}
}

@media only screen and (max-width: 335px){
#videoCV{
  margin-top:232px;
}
}

@media only screen and (max-width: 300px){
#videoCV{
  margin-top:235px;
}
}

</style>
