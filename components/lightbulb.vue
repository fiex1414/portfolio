<template>
<v-container fluid
:class="{'pa-5': $vuetify.breakpoint.smAndUp, 'pa-4': $vuetify.breakpoint.xs}">
    <v-layout row>
        <v-flex  pa-5 style="background-color:#edd47e;">
          <v-img
          :src="require('../assets/light.png')" contain height="400">
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
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

</style>