<template>
  <div class="hello" align='center'>
      <Header />
      <br><br>
    <!-- <h1> checkout! </h1>
    <p> id of load: {{ load._id }} </p>
    <p> name of load: {{ load.name }} </p>
    <p> price of load: {{ load.price }} </p>
    <router-link :to="`/`" class="btn btn-primary"> Checkout </router-link> -->
        <h1> Confirm Checkout </h1>
        <br>
        <div class="card" style="width: 18rem;">
           <img :src="load.image" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">{{ load.name }}</h5>
                <p class="card-text">P{{ load.price }}.00</p>
                <router-link :to="`/`" class="btn btn-primary"> Checkout </router-link>
            </div>
        </div>
  </div>
</template>

<script>
// import Service from '../Service'
import Header from './Header.vue'
import axios from 'axios'

export default {
  name: 'Checkout',
  components: {
      Header
  },
  data() {
    return {
      load: {}
    };
  },

  mounted: function() {
    this.getLoad();
  },

  methods: {
    getLoad() {
      let uri = "http://192.168.254.117:3000/checkout/" + this.$route.params.id;
      axios.get(uri).then(response => {
        this.load = response.data;
        console.log(response.data)
      });
    }
  }
  
//   async created() {
//     try {
//       this.loads = await Service.getLoad()
//     } catch(err) {
//       this.error = err.message
//     }
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
