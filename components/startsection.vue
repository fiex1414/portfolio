<template>
  <div id="background">
    <v-container pa-0 ma-0 style="max-width:none;">
      <v-layout row>
        
        <v-flex id="logo" pt-3 pl-3>
          <a href="#"><v-img :src="require('../assets/full-logo.svg')" contain id="logoImg" ></v-img></a>
        </v-flex>
        
        <v-flex id="selfie">
          <v-img :src="require('../assets/me-circle.png')" contain id="circleImg"></v-img>
        </v-flex>
        <v-flex id="menu-tags">
          <v-layout align-center justify-center column fill-height>
            <a href="#about" v-smooth-scroll="{ duration: 2000, offset:-50}">
              <span class="mr-2">Om mig</span>
            </a>
            <a href="#portfolio" v-smooth-scroll="{ duration: 2000, offset:-50}">
              <span class="mr-2">Portfolio</span>
            </a>
            <a href="#contact" v-smooth-scroll="{ duration: 2000}">
              <span class="mr-2">Kontakt</span>
            </a>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>




<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
#background {
  background-color: #b6cfb6;
}
#logo{
  width:30%;
}
#logoImg{
  width:200px;
}
#selfie{
  width:40%;
}
#menu-tags{
  width:30%;
}
#circleImg {
  margin-top: 70px;
}
span {
  font-family: 'Fira Sans';
  font-size: 20px;
  color: white;
  line-height: 50px;
}
a {
    text-decoration: none !important;
}

a:hover{
    font-weight: bold;
}


@media only screen and (max-width: 900px){
span{
  font-size:15px;
  line-height:40px;
}
#logoImg{
  width:150px;
}
}

@media only screen and (max-width: 700px){
span{
  font-size:13px;
  line-height:30px;
}
}

@media only screen and (max-width: 600px){
#logo{
  width:10%;
  visibility:hidden;
}
#selfie{
  width:80%;
  justify-content: center;
}
#menu-tags{
  width:10%;
  visibility:hidden;
}
#circleImg {
  margin-top: 10px;
}
}

@media only screen and (max-width: 375px){
}
</style>

