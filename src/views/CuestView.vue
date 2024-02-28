<template>
        <!-- <div>
        <div class="" v-show="mostrar_admin">
            <div class="">
                <p>Hola, {{ this.usuarios[0].username }}</p>
                <h1 class="">Cuestionario de <br> la semana</h1>
                <p class="">Saber sobre JavaScript es crucial para desarrollar páginas web interactivas y potenciar habilidades en programación web moderna.</p>
                <div class="">
                    <div class="">
                        <div v-for="usuario of this.usuarios" :key="usuario" class="">
                            <div v-if="usuario.id !== 0">
                                <div class="">
                                    <div class="">
                                        <p>Nombre del alumno</p>
                                        <p>{{ usuario.username }}</p>
                                    </div>
                                    <div class="">
                                        <p>Nota del alumno</p>
                                        <p>{{ usuario.nota }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>Quieres salir? <router-link to="/" class="">Puedes cerrar sesión</router-link></span>
                    <p>Nuestras redes sociales</p>
                <div class="">
                    <i class=""></i>
                    <i class=""></i>
                </div>
                <div class="">
                    <p class="">Política de privacidad</p>
                    <p class="">Terminos y condiciones</p>
                </div>
            </div>
        </div>
        <div class="">
            <img src="https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2020/06/01125323/Arcade-Studio-3D-Illustration-Character-Animation-Paypal-Bookworm.gif" alt="" class="h-[35rem]">
        </div>
    </div>
    <div class="" v-show="mostrar_user">
        <div class="">
            <p>Hola, {{ this.usuarios[this.$route.params.id].username }}</p>
            <h1 class="">Cuestionario de la semana</h1>
            <p class="">Saber sobre JavaScript es crucial para desarrollar páginas web interactivas y potenciar habilidades en programación web moderna.</p>
            <div class="">
                <div class="">
                    <div v-for="pregunta of cuestionario" :key="pregunta" class="">
                        <p>{{ pregunta.pregunta }}</p>
                        <div class="">
                            <div class="">
                                <input type="radio" :name="pregunta.id" id="" value="true" @change="comprobarRespuesta(pregunta.id, $event.target.value)"> <span class="">Verdad</span>
                            </div>
                            <div>
                                <input type="radio" :name="pregunta.id" id="" value="false" @change="comprobarRespuesta(pregunta.id, $event.target.value)"> <span class="">false</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="this.usuarios[this.$route.params.id].nota != 0" >
                    <p>Ya tienes tu nota, es {{ this.usuarios[this.$route.params.id].nota }}</p>
                </div>
                <div v-if="this.usuarios[this.$route.params.id].nota == 0" >
                    <button @click="resolver" class="">Resolver</button>
                </div>
                <span>Quieres salir? <router-link to="/" class="">Puedes cerrar sesión</router-link></span>
                <p>Nuestras redes sociales</p>
                <div class="">
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                </div>
                <div class="">
                    <p class="">Política de privacidad</p>
                    <p class="">Terminos y condiciones</p>
                </div>
            </div>
        </div>
            <div class="">
                <img src="https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2020/06/01125323/Arcade-Studio-3D-Illustration-Character-Animation-Paypal-Bookworm.gif" alt="" class="">
            </div>
        </div>
    </div> -->
    <div>
        <div class="flex mt-14" v-show="mostrar_admin">
            <div class="flex flex-col w-[30%] mt-10 ml-[7%] gap-y-3 h-[25rem]">
                <p>Hola, {{ this.usuarios[0].username }}</p>
                <h1 class="text-black text-4xl text-left">Cuestionario de <br> la semana</h1>
                <p class="text-black w-[75%] text-justify">Saber sobre JavaScript es crucial para desarrollar páginas web interactivas y potenciar habilidades en programación web moderna.</p>
                <div class="flex flex-col w-[75%] gap-y-3">
                    <div class="bg-white h-[10rem] border w-full rounded-lg p-2 text-center shadow-lg overflow-auto">
                        <div v-for="usuario of this.usuarios" :key="usuario" class="">
                            <div v-if="usuario.id !== 0">
                                <div class="flex mx-auto w-full">
                                    <div class="w-1/2 mb-3">
                                        <p>Nombre del alumno</p>
                                        <p>{{ usuario.username }}</p>
                                    </div>
                                    <div class="w-1/2">
                                        <p>Nota del alumno</p>
                                        <p>{{ usuario.nota }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>Quieres salir? <router-link to="/" class="text-blue-500 underline cursor-pointer">Puedes cerrar sesión</router-link></span>
                    <p>Nuestras redes sociales</p>
                    <div class="flex gap-x-7">
                        <i class="fa-brands fa-square-instagram text-3xl text-red-500"></i>
                        <i class="fa-brands fa-square-facebook text-3xl text-red-500"></i>
                    </div>
                    <div class="flex mt-3 gap-x-3">
                        <p class="text-blue-500 underline cursor-pointer">Política de privacidad</p>
                        <p class="text-blue-500 underline cursor-pointer">Terminos y condiciones</p>
                    </div>
                </div>
            </div>
            <div class="flex w-[70%] items-start justify-end">
                <img src="https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2020/06/01125323/Arcade-Studio-3D-Illustration-Character-Animation-Paypal-Bookworm.gif" alt="" class="h-[35rem]">
            </div>
        </div>
        <div class="flex mt-12" v-show="mostrar_user">
            <div class="flex flex-col w-[30%] mt-10 ml-[7%] gap-y-3 h-[25rem]">
                <p>Hola, {{ this.usuarios[this.$route.params.id].username }}</p>
                <h1 class="text-black text-4xl text-left">Cuestionario de la semana</h1>
                <p class="text-black w-[75%] text-justify">Saber sobre JavaScript es crucial para desarrollar páginas web interactivas y potenciar habilidades en programación web moderna.</p>
                <div class="flex flex-col w-full gap-y-3">
                    <div class="bg-white w-full items-center justify-center mx-auto rounded-lg p-1">
                        <div v-for="pregunta of cuestionario" :key="pregunta" class="w-full flex flex-col gap-y-1 overflow">
                            <p>{{ pregunta.pregunta }}</p>
                            <div class="w-full items-center justify-center flex">
                                <div class="w-[60%] gap-y-1">
                                    <input type="radio" :name="pregunta.id" id="" value="true" @change="comprobarRespuesta(pregunta.id, $event.target.value)"> <span class="text-green-500 font-bold">Verdad</span>
                                </div>
                                <div>
                                    <input type="radio" :name="pregunta.id" id="" value="false" @change="comprobarRespuesta(pregunta.id, $event.target.value)"> <span class="text-red-500 font-bold">false</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="this.usuarios[this.$route.params.id].nota != 0" >
                        <p>Ya tienes tu nota, es {{ this.usuarios[this.$route.params.id].nota }}</p>
                    </div>
                    <div v-if="this.usuarios[this.$route.params.id].nota == 0" >
                        <button @click="resolver" class="bg-red-500 text-black rounded-lg px-4 py-2 w-[30%] hover:bg-red-900">Resolver</button>
                    </div>
                    <span>Quieres salir? <router-link to="/" class="text-blue-500 underline cursor-pointer">Puedes cerrar sesión</router-link></span>
                    <p>Nuestras redes sociales</p>
                    <div class="flex gap-x-7">
                        <i class="fa-brands fa-square-instagram text-3xl text-red-500"></i>
                        <i class="fa-brands fa-square-facebook text-3xl text-red-500"></i>
                    </div>
                    <div class="flex mt-3 gap-x-3">
                        <p class="text-blue-500 underline cursor-pointer">Política de privacidad</p>
                        <p class="text-blue-500 underline cursor-pointer">Terminos y condiciones</p>
                    </div>
                </div>
            </div>
            <div class="flex w-[70%] items-start justify-end">
                <img src="https://folio-website-images.s3.eu-west-2.amazonaws.com/content/uploads/2020/06/01125323/Arcade-Studio-3D-Illustration-Character-Animation-Paypal-Bookworm.gif" alt="" class="h-[35rem]">
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            mostrar_admin: false,
            mostrar_user: false,
            cuestionario_realizado: [],
            nota: 0
        }
    },
    mounted(){
        const id = this.$route.params.id
        if (id == 0){
            this.mostrar_admin = true
            this.mostrar_user = false
        }else{
            this.mostrar_user = true
            this.mostrar_admin = false
        }
    },
    computed: {
      ...mapState(['usuarios', 'cuestionario'])
    },
    methods:{
        comprobarRespuesta(valor, respuesta){
            this.cuestionario_realizado.push({pregunta: valor, respuesta: respuesta})
        },
        resolver(){
            const respuestas_correctas = this.cuestionario.map((valor) => valor.respuesta)
            const nuevas_respuestas = []
            for (let respuesta of respuestas_correctas) {
                nuevas_respuestas.push(respuesta.toString())
            }
            for (let indice = 0; indice < this.cuestionario_realizado.length; indice++){
                if (this.cuestionario_realizado[indice].respuesta != nuevas_respuestas[indice]){
                    console.log("correcto")
                }else{
                    console.log("Incorrecto")
                    console.log(this.cuestionario_realizado[indice].respuesta, nuevas_respuestas[indice])
                    this.nota += 3.33
                    console.log("NOTA ACTUAL", this.nota)
                }
            }
            this.nota = Math.round(this.nota)
            console.log(this.nota)
            this.usuarios[this.$route.params.id].nota = this.nota
            Swal.fire("Enhorabuena, has realizado el cuestionario.")
        }
    }
}

</script>

<style>

</style>
