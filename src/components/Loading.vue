<template>
    <div class="mock">
      <img :src="imgurl" />
    </div>
</template>    

<script>
    export default {
        name: 'Loading' ,
        data(){
            return{
                imgurl:require("@/assets/loading.png")
            }
        }
    }
</script>


<style>

.mock{
    z-index: 4;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50px);
}
.mock img {
    width: 100px;
    height: 100px;
  animation: xz 0.8s linear infinite;
  -webkit-animation: xz 0.8s linear infinite;
}
@-webkit-keyframes xz {
  0% {
    -webkit-transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(270deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes xz {
  0% {
    -webkit-transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(270deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
