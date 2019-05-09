<template>
<v-footer
   
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      

      <v-card-actions style="background-color:white;">
        <span> &copy;2019 <strong> Fie Attermann Stokholm.</strong> All Right Reserved. </span>
      
       
      </v-card-actions>
      
    </v-card>
  </v-footer>
</template>


<script>
export default {
  data: () => ({
      icons: [
        'fab fa-linkedin'
      ]
    })
};
</script>

<style scoped>
a{
    text-decoration: none;
}

span{
    color:#30654b;
}

@media only screen and (max-width: 1200px){

}

@media only screen and (max-width: 960px){

}

@media only screen and (max-width: 700px){
  span {
    font-size:12px;
  }
}

@media only screen and (max-width: 500px){
span{
  font-size:10px;
}
}

@media only screen and (max-width: 375px){
}
</style>