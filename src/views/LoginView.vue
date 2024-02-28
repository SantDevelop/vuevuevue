<template>
    <!-- <div class="">
        <div class="">
            <h1 class="">Forjando futuros <br> luminosos</h1>
            <p class="">Descubre en nuestra Escuela Brillante el sendero del saber, cultivando mentes creativas y forjando futuros luminosos.</p>
            <form action="" class="">
                <input type="email" required placeholder="Email" class="" v-model="email">
                <input type="password" required placeholder="Password" minlength="8" class="" v-model="password">
                <button @click.prevent="login" class="">Iniciar sesión</button>
                <span>Si no tienes cuenta? <router-link to="/" class="">Puedes Registrarse</router-link></span>
                <p>Nuestras redes sociales</p>
                <div class="">
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                </div>
            </form>
            <div class="flex mt-3 gap-x-3">
                <p class="">Política de privacidad</p>
                <p class="">Terminos y condiciones</p>
            </div>
        </div>
        <div class="">
            <img src="https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2020/06/01125323/Arcade-Studio-3D-Illustration-Character-Animation-Paypal-Bookworm.gif" alt="" class="">
        </div>
    </div> -->
    <div class="flex mt-14">
        <div class="flex flex-col w-[30%] mt-10 ml-[7%] gap-y-3 h-[25rem]">
            <h1 class="text-black text-4xl text-left">Forjando futuros <br> luminosos</h1>
            <p class="text-black w-[75%] text-justify">Descubre en nuestra Escuela Brillante el sendero del saber, cultivando mentes creativas y forjando futuros luminosos.</p>
            <form action="" class="flex flex-col w-[75%] gap-y-3">
                <input type="email" required placeholder="Email" class="bg-[#F6BF80] border rounded-lg px-4 py-2 placeholder:text-black border-[#914538] outline-none" v-model="email">
                <input type="password" required placeholder="Password" minlength="8" class="bg-[#F6BF80] rounded-lg px-4 py-2 placeholder:text-black border border-[#914538] outline-none" v-model="password">
                <button @click.prevent="login" class="bg-red-500 w-[40%] px-4 py-2 rounded-lg text-red-100 mr-2">Iniciar sesión</button>
                <span>Si no tienes cuenta? <router-link to="/" class="text-blue-500 underline cursor-pointer">Puedes Registrarse</router-link></span>
                <p>Nuestras redes sociales</p>
                <div class="flex gap-x-7">
                    <i class="fa-brands fa-square-instagram text-3xl text-red-500"></i>
                    <i class="fa-brands fa-square-facebook text-3xl text-red-500"></i>
                </div>
            </form>
            <div class="flex mt-3 gap-x-3">
                <p class="text-blue-500 underline cursor-pointer">Política de privacidad</p>
                <p class="text-blue-500 underline cursor-pointer">Terminos y condiciones</p>
            </div>
        </div>
        <div class="flex w-[70%] items-start justify-end">
            <img src="https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2020/06/01125323/Arcade-Studio-3D-Illustration-Character-Animation-Paypal-Bookworm.gif" alt="" class="h-[37rem]">
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import {mapState} from 'vuex'
export default {
  data(){
    return{
      email: "",
      password: "",
    }
  },
  computed: {
    ...mapState(['usuarios'])
  },
  methods:{
    login(){
      const comprobar = this.usuarios.find((usuario) => usuario.password == this.password && usuario.email == this.email)
      if (comprobar){
        Swal.fire("Credenciales correctas.")
        this.$router.push({name: 'cuestionario', params: {id: comprobar.id}})
      }else {
        Swal.fire("Credenciales incorrectas.")
      }
    }
  }
}
</script>

<style>

</style>