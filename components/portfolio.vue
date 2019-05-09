<template>
  <v-container fluid
  :class="{'pa-5': $vuetify.breakpoint.smAndUp, 'pa-4': $vuetify.breakpoint.xs}">
    <v-layout ml-5>
      <h1>Portfolio</h1>
    </v-layout>
    <v-layout style="border:5px solid #edd47e;">
      <v-layout row wrap 
      :class="{'ma-5': $vuetify.breakpoint.mdAndUp, 'ma-4': $vuetify.breakpoint.smAndDown}">
        
        
        <v-flex xs6 sm4 md4 order-md1 order-sm1
        :class="{'pa-3': $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.sm, 'pa-1': $vuetify.breakpoint.xs}">
          <div>
            <v-dialog
              v-model="dialogplakat"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on }">
                <p v-on="on">
                 <v-img :src="require('../assets/fjordensdag.png')" style="cursor:pointer;">
              <div id="gradient" class="fill-height bottom-gradient">
                <v-layout justify-end align-center column fill-height pb-5>
                  <span id="programme">Illustrator</span>
                  <v-divider light></v-divider>
                  <span id="detail">Plakatkonkurrence</span>
                </v-layout>
              </div>
            </v-img>
                </p>
              </template>

              <v-card>
                <v-toolbar style="background-color:#b6cfb6;box-shadow:none;">
                  <v-toolbar-title id="projekt-title">Plakatkonkurrence</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon dark @click="dialogplakat = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-container fluid pa-5>
                  <v-layout row wrap align-center style="border:5px solid #edd47e;">
                    <v-flex xs12 sm12 md6 order-md1 order-sm1 pa-5>
                      <v-img id="ramme" :src="require('../assets/plakatramme.png')" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm12 md6 order-md2 order-sm2 pa-5>
                    
                        <h1>Fjordens dag 2019</h1>
                        <v-card-text id="text"> Hvert år laves der - i forbindelse med fjorden dag - en konkurrence om at lave årets plakat. Mit bud var kulturhistorisk inspireret af Odenses H.C. Andersen samt livet ved fjorden.</v-card-text>
                      
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>
        
        
      

<v-flex xs6 sm4 md4 order-md2 order-sm2
        :class="{'pa-3': $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.sm, 'pa-1': $vuetify.breakpoint.xs}">
          <div>
            <v-dialog
              v-model="dialogelevbog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on }">
                <p v-on="on">
                 <v-img :src="require('../assets/elevbog-forside.jpg')"  style="cursor:pointer;">
              <div id="gradient" class="fill-height bottom-gradient">
                <v-layout justify-end align-center column fill-height pb-5>
                  <span id="programme">Frihånd</span>
                  <v-divider light></v-divider>
                  <span id="detail">Forside elevbog</span>
                </v-layout>
              </div>
            </v-img>
                </p>
              </template>

              <v-card id="product-card">
                <v-toolbar style="background-color:#b6cfb6;box-shadow:none;">
                  <v-toolbar-title id="projekt-title">Frihånd</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon dark @click="dialogelevbog = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-container fluid pa-5>
                  <v-layout row wrap align-center style="border:5px solid #edd47e;">
                    <v-flex xs12 sm12 md6 order-md1 order-sm1 pa-5>
                      <v-img id="ramme" :src="require('../assets/elevbogramme.png')" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm12 md6 order-md2 order-sm2 pa-5>
                        
                        <h1>Forside til elevbog</h1>
                    <v-card-text id="text">  På gymnasiet havde jeg billedkunst på B-niveau som et af mine linjefag. I starten af 3.g blev jeg af min lærer bedt om at tegne forsiden til årets elevbog. <br> Her gik jeg efter en symbolsk betydning af tiden, der går, hvor man starter som "frø", som 1.g'ere på Esbjerg Gymnasium kaldes, og slutter som student.</v-card-text>
                      
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>


        <v-flex xs6 sm4 md4 order-md3 order-sm3
        :class="{'pa-3': $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.sm, 'pa-1': $vuetify.breakpoint.xs}">
          <div>
            <v-dialog
              v-model="dialogeksamen"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on }">
                <p v-on="on">
                  <v-img :src="require('../assets/spasmedspace.png')" style="cursor:pointer;">
                    <div id="gradient" class="fill-height bottom-gradient">
                      <v-layout justify-end align-center column fill-height pb-5>
                        <span id="programme">Website</span>
                        <v-divider light></v-divider>
                        <span id="detail">Eksamensprojekt</span>
                      </v-layout>
                    </div>
                  </v-img>
                </p>
              </template>

              <v-card>
                <v-toolbar style="background-color:#b6cfb6;box-shadow:none;">
                  <v-toolbar-title id="projekt-title">Website</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon dark @click="dialogeksamen = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-container fluid pa-5>
                  <v-layout row wrap align-center style="border:5px solid #edd47e;">
                    <v-flex xs12 sm12 md6 order-md1 order-sm1 pa-5>
                      <v-img :src="require('../assets/spasmedspace-pc.png')" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm12 md6 order-md2 order-sm2 pa-5>
                        
                        <h1>Spas med Space</h1>
                        <v-card-text id="text"> Under vores første gruppe-eksamen på 1. semester fik vi til opgave at lave en hjemmeside under emnet "Space", hvor der blev stillet krav ud fra fagene business, kommunikation, user experience, design development og content creation. Vores koncept "Spas med Space" gik ud på at skabe en digital, interaktiv platform for folkeskoleelever fra 2.-5. klassetrin til læring om solsystemet på en sjov måde. Efterfølgende var vi en tur på Ansgarskolen i Ribe for at brugerteste lærere samt elever tilhørende vores målgruppe. </v-card-text>
                      <v-card-text id="link-text"> <a id="prototype-link" href="http://fiestokholm.dk/spasmedspace/Spas-Med-Space/index.html">
                        Klik her for at se websitet Spas med Space</a>
                        </v-card-text>
                      
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>




 <v-flex xs6 sm4 md4 order-md4 order-sm4
        :class="{'pa-3': $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.sm, 'pa-1': $vuetify.breakpoint.xs}">
          <div>
            <v-dialog
              v-model="dialogstrand"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on }">
                <p v-on="on">
                  <v-img :src="require('../assets/beach.png')" style="cursor:pointer;">
              <div id="gradient" class="fill-height bottom-gradient">
                <v-layout justify-end align-center column fill-height pb-5>
                  <span id="programme">Infomercial</span>
                  <v-divider light></v-divider>
                  <span id="detail">Ren Strand Fanø</span>
                </v-layout>
              </div>
            </v-img>
                </p>
              </template>

              <v-card>
                <v-toolbar style="background-color:#b6cfb6;box-shadow:none;">
                  <v-toolbar-title id="projekt-title">Infomercial</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon dark @click="dialogstrand = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-container fluid pa-5>
                  <v-layout row wrap align-center style="border:5px solid #edd47e;">
                    <v-flex xs12 sm12 md6 order-md1 order-sm1 pa-5>
                      
                     <div class="resp-container">
                      <iframe class="resp-iframe" src="https://www.youtube.com/embed/3U95IMHBBeg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              
                    </v-flex>
                    <v-flex xs12 sm12 md6 order-md2 order-sm2 pa-5>
                        
                        <h1>Ren Strand Fanø</h1>
                        <v-card-text id="text"> Gruppeprojekt, hvor vi i samarbejde med en selvvalgt virksomhed/organisation skulle filme og klippe en infomercial. Her valgte vi at samarbejde med Peter fra Ren Strand Fanø. </v-card-text>
                      
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>




        <v-flex xs6 sm4 md4 order-md5 order-sm5
        :class="{'pa-3': $vuetify.breakpoint.mdAndUp, 'pa-2': $vuetify.breakpoint.sm, 'pa-1': $vuetify.breakpoint.xs}">
          <div>
            <v-dialog
              v-model="dialogde"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on }">
                <p v-on="on">
                   <v-img :src="require('../assets/sjob.png')" style="cursor:pointer;">
              <div id="gradient" class="fill-height bottom-gradient">
                <v-layout justify-end align-center column fill-height pb-5>
                  <span id="programme">Mockup</span>
                  <v-divider light></v-divider>
                  <span id="detail">Sjob</span>
                </v-layout>
              </div>
            </v-img>
                </p>
              </template>

              <v-card>
                <v-toolbar style="background-color:#b6cfb6;box-shadow:none;">
                  <v-toolbar-title id="projekt-title">Mockup</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon dark @click="dialogde = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-container fluid pa-5>
                  <v-layout row wrap align-center style="border:5px solid #edd47e;">
                    <v-flex xs12 sm12 md6 order-md1 order-sm1 pa-5>
                      <v-img :src="require('../assets/sjob-pc.png')" contain></v-img>
                    </v-flex>
                    <v-flex xs12 sm12 md6 order-md2 order-sm2 pa-5>
                        
                        <h1>Sjob</h1>
                        <v-card-text id="text"> Gruppeprojekt, hvor vi i faget User Experience blev stillet opgaven om at lave en jobportal til studerende på videregående uddannelser i Esbjerg, der søger studiejobs. <br> Her skabte vi Sjob baseret på user tests, spørgeskemaundersøgelser og interviews.
                        </v-card-text>
                        <v-card-text id="link-text"> <a id="prototype-link" href="https://xd.adobe.com/view/cfa63126-b200-42de-6aff-1c22684a581f-b997/">
                        Klik her for at se den fulde prototype af desktop-versionen</a>
                        </v-card-text>
                        
                      
                    </v-flex>
                     <v-flex xs12 sm12 md6 order-md4 order-sm4 pa-5>
                      <v-img :src="require('../assets/sjobmobile.png')" contain height=300></v-img>
                    </v-flex>
                    <v-flex xs12 sm12 md6 order-md3 order-sm3 pa-5>
                        
                        <h1>Mobil-version</h1>
                        <v-card-text id="text"> Efter først at have lavet mockups af vores desktop-version gik vi videre til mobil-designet, eftersom responsivitet af hjemmesider i dag er vigtigt, fordi mange vælger at bruge mobiltelefonen i stedet.
                         </v-card-text>
                         <v-card-text id="link-text"> <a id="prototype-link" href="https://xd.adobe.com/view/11d865b8-e15e-4c6f-7dc4-ae8d4327a20c-67e9/">
                        Klik her for at se den fulde prototype af mobil-versionen</a>
                        </v-card-text>
                      
                    </v-flex>

                    
                  </v-layout>
                </v-container>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>




<script>
export default {
  data() {
    return {
        dialogplakat:false,
      dialogeksamen: false,
      dialogstrand:false,
      dialogde:false,
      dialogelevbog:false,
      
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: "Sacramento";
  color: #30654b;
  font-size: 50px;
}
a {
  text-decoration: none;
}
#gradient {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.767) 0%);
  opacity: 1;
  transition: 0.6s;
}
#gradient:hover {
  opacity: 0;
}

#programme {
  font-family: "Fira Sans";
  font-size: 35px;
  color: white;
  border-bottom: 2px solid white;
}
#detail {
  font-family: "Fira Sans";
  font-size: 18px;
  color: white;
  padding-top: 5px;
  margin-bottom: 30px;
}

#white-background{
  background-color:white;
}

#projekt-title {
  font-family: "Fira Sans";
  color: white;
}

#ramme{
  height:500px;
}
#text{
    font-family:"Fira sans";
    color:black;
}
#link-text{
  font-family:'Fira Sans';
  font-weight:bold;
}
#prototype-link{
  color:#30654b;
}
#prototype-link:hover{
  text-decoration:underline;
}
.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}
.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

@media only screen and (max-width: 1200px){
#programme {
  font-size: 31px;
}
#detail {
  font-size: 15px;
  padding-top: 5px;
  margin-bottom: -5px;
}
}

@media only screen and (max-width: 960px){
#programme {
  font-size: 25px;
  border-bottom: 1px solid white;
}
#detail {
  font-size: 12px;
  padding-top: 2px;
  margin-bottom: -5px;
}
}

@media only screen and (max-width: 700px){
#programme {
  font-size: 20px;
}
#detail {
  font-size: 10px;
  margin-bottom: -15px;
}
h1 {
  font-size: 40px;
}
}

@media only screen and (max-width: 500px){
#programme {
  font-size: 18px;
}
#detail {
  font-size: 8px;
  margin-bottom: -25px;
}
h1 {
  font-size: 35px;
}
}

@media only screen and (max-width: 375px){
#programme {
  font-size: 15px;
}
#detail {
  font-size: 7px;
  margin-bottom: -30px;
}
h1 {
  font-size: 30px;
}
}
</style>

