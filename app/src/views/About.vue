<template>
  <div class="about">
   <button @click="getJSON()">获取</button>
  </div>
</template>

<script>
export default {
  methods:{
    getJSON(){
      this.$axios.get('http://localhost:8000/get').then(data=>{
        console.log(data)
      })
    }
  }
}
</script>
