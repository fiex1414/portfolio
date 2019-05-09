<template>
  <div id="background">
    <v-container fluid>
      <v-layout ml-5>
        <h1>Kontakt</h1>
      </v-layout>

      <v-layout row wrap mt-3
      :class="{'mx-5': $vuetify.breakpoint.mdAndUp, 'mx-0': $vuetify.breakpoint.smAndDown}">
        <v-flex xs4 sm4 md4 order-md1 order-sm1
        :class="{'pa-3': $vuetify.breakpoint.smAndUp, 'pa-0': $vuetify.breakpoint.xs}">
          <v-layout align-center column
          >
           <a href="https://www.linkedin.com/in/fie-stokholm-2961aa17b/" target="_blank"> <i class="fab fa-linkedin-in"></i></a>

            <span id="programme">Fie Stokholm</span>
          </v-layout>
        </v-flex>

        <v-flex xs4 sm4 md4 order-md2 order-sm2
        :class="{'pa-3': $vuetify.breakpoint.smAndUp, 'pa-0': $vuetify.breakpoint.xs}">
          <v-layout align-center column 
         >
            <i class="fas fa-envelope"></i>
            <v-layout>
              <span id="programme">kontakt@fiestokholm.dk</span>
            </v-layout>
          </v-layout>
        </v-flex>

        <v-flex xs4 sm4 md4 order-md3 order-sm3
        :class="{'pa-3': $vuetify.breakpoint.smAndUp, 'pa-0': $vuetify.breakpoint.xs}">
          <v-layout align-center column
          >
            <i class="fas fa-phone"></i>
            <span id="programme">+45 21 56 66 13</span>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      
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

a{
    color:#30654b;
}

span {
  font-family: "Fira Sans";
  font-size: 20px;
  color: #30654b;
  line-height: 50px;
}
i {
  font-size: 100px;
  color:#30654b;
}

@media only screen and (max-width: 1200px){
span {
  font-size: 18px;
}
i {
    font-size:90px;
}
}

@media only screen and (max-width: 960px){
span {
  font-size: 16px;
}
i {
    font-size:70px;
}
}

@media only screen and (max-width: 700px){

h1 {
  font-size: 40px;
}
span {
  font-size: 13px;
  font-weight:bold;
}
i {
    font-size:50px;
}
}

@media only screen and (max-width: 500px){
h1 {
  font-size: 35px;
}
span {
  font-size: 10px;
  
}
i {
    font-size:35px;
}
}

@media only screen and (max-width: 375px){
h1 {
  font-size: 30px;
}
span {
  font-size: 8px;
}
i {
    font-size:30px;
}
}
</style>
