<template>
  <div class="hello">
    <h1> Loads </h1>
    <p class="error" v-if="error"> {{ error }} </p>
      <div class="loads-container wrapper" align="center">
        <div class="load"
          v-for="(load, index) in loads"
          v-bind:item="load"
          v-bind:index="index"
          v-bind:key="load._id"
        >
          <!-- <p class="text"> {{ load.name }} </p> -->
        <div class="deck" align="center">
            <div class="card" style="width: 18rem;">
            <img :src="load.image" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title"> {{ load.name }} </h5>
                <h6 class="card-subtitle mb-2 text-muted"> P {{load.price }}.00 </h6>
                <p class="card-text">Can be used to avail promos! </p>
                <!-- <a href="/checkout" class="card-link">Card link</a> -->
                <!-- <router-link to="/checkout">Buy</router-link> -->
                <!-- <router-link :to="`/checkout/${load._id}`"> Buy </router-link> -->
                <button @click="send2Native">Buy</button>
              </div>
            </div>
            <br>
        </div>
    
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Load',
  data() {
    return {
      loads: [
    {
        "_id": "6184d80d3a1bdb784741c1b4",
        "name": "P100 Globe Load",
        "price": 100,
        "image": "https://3.bp.blogspot.com/-xGwRs69rZ_g/W1BDwVv2CGI/AAAAAAAAJiA/r96QBGuoRwUEMupiORr8Lo__baQdkRz_ACLcBGAs/s1600/globe-logo.png"
    },
    {
        "_id": "6184d8163a1bdb784741c1b5",
        "name": "P100 Smart Load",
        "price": 100,
        "image": "https://www.balanga.com.ph/media/zoo/images/smart_32206d9f834810825bbaba3c55a5abdc.jpg"
    },
    {
        "_id": "6184d8253a1bdb784741c1b6",
        "name": "P200 Globe Load",
        "price": 200,
        "image": "https://3.bp.blogspot.com/-xGwRs69rZ_g/W1BDwVv2CGI/AAAAAAAAJiA/r96QBGuoRwUEMupiORr8Lo__baQdkRz_ACLcBGAs/s1600/globe-logo.png"
    },
    {
        "_id": "6184d82e3a1bdb784741c1b7",
        "name": "P200 Smart Load",
        "price": 200,
        "image": "https://www.balanga.com.ph/media/zoo/images/smart_32206d9f834810825bbaba3c55a5abdc.jpg"
    }
],
      error: ''
    }
  },
  methods: {
    /* eslint-disable */
    send2Native() {
      JSBridge.showMessageInNative('Received')
    },
    /* eslint-disable */


    getLoads() {
      const url = 'http://192.168.254.117:3000/'
      return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(load => ({
                        ...load,
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
  },
  async created() {
    try {
      // this.loads = await this.getLoads()
    } catch(err) {
      this.error = err.message
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    display: inline-flex;
    max-width: 700px;
    flex-wrap: wrap;
    padding-top: 12px;
    align-items: center;
    justify-content: center;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 200px;
    margin: 12px;
    transition: .15s all ease-in-out;
  }
</style>