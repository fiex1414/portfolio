<template>
  <v-app>
    <v-toolbar id="menubar" app inverted-scroll>
      <v-toolbar-title >
        <a href="#topdiv" v-smooth-scroll="{ duration: 2000}"><div id="logoDiv"></div></a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn id="button-menu" flat>
        <a href="#about" v-smooth-scroll="{ duration: 2000, offset:-50}"><span>Om mig</span></a>
      </v-btn>
      <v-btn id="button-menu" flat>
        <a href="#portfolio" v-smooth-scroll="{ duration: 2000, offset:-50}"><span>Portfolio</span></a>
      </v-btn>
      <v-btn id="button-menu" flat>
        <a href="#contact" v-smooth-scroll="{ duration: 2000, offset:-50}"><span>Kontakt</span></a>
      </v-btn>

       <v-dialog v-model="cvdialog" persistent max-width="700" scrollable>
      <template v-slot:activator="{ on }">
        <v-btn id="button-menu" flat v-on="on">
        <span>CV</span>
      </v-btn>
      </template>
      <v-card>
         <v-toolbar style="background-color:#b6cfb6;box-shadow:none;">
                  <v-toolbar-title id="projekt-title">CV</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon dark @click="cvdialog = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar>
       
        <v-img :src="require('./assets/CV.png')"></v-img>
        
      </v-card>
    </v-dialog>
      
    </v-toolbar>

    <v-content>
      <div id="topdiv"></div>
      <startsection/>
      <lightbulb/>
      <div id="about"></div>
      <HelloWorld/>
      <div id="portfolio"></div>
      <portfolio/>
      <div id="contact"></div>
      <contact/>
      <footersection/>
     
    </v-content>
  </v-app>
</template>

<script>
import startsection from './components/startsection'
import lightbulb from './components/lightbulb'
import HelloWorld from './components/HelloWorld'
import portfolio from './components/portfolio'
import contact from './components/contact'
import footersection from './components/footersection'



export default {
  name: 'App',
  components: {
    startsection,
    lightbulb,
    HelloWorld,
    portfolio,
    contact,
    footersection
   
  },
  
  data () {
    return {
      //
        cvdialog: false
    }
  }
}
</script>

<style scoped>
#menubar{
  background-color:#b6cfb6;
  box-shadow:none;
  border-bottom:2px solid white;
}
#logoDiv {
  height: 50px;
  width:50px;
  background-image: url("assets/fs-bold.png");
  background-repeat: no-repeat;
  background-size: 95%;
}

span {
  font-family: 'Fira Sans';
  color: white;
  font-size: 16px;
  text-transform: none !important;
  
}
a {
    text-decoration: none !important;
}

#button-menu{
  padding:0!important;
 
}

#button-menu:before{
  content:none;
}

#button-menu:hover {
  border: 2px solid white;
}

#projekt-title {
  font-family: "Fira Sans";
  color: white;
}

</style>

