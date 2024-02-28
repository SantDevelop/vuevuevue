<template>
  <div class="pag">
    <div class="cabecera">
      <div class="logo">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/school-building-9052539-7460687.png" alt="">
      </div>
      <nav class="sub_cabeA">
        <router-link to="/" class="lnk"><i class="fa-solid fa-house"></i></router-link>
        <router-link to="#" class="lnk"><i class="fa-solid fa-list-check"></i></router-link>
        <router-link to="#" class="lnk"><i class="fa-solid fa-info"></i></router-link>
      </nav>
    </div>
    <div class="cuerpo">
      <router-view/>
    </div>
  </div>
  
</template>

<style lang="sass">

*
  margin: 0
  padding: 0
  color: #914538
  font-family: "Jua", sans-serif

  body
    background-color: #f6bf80

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.jua-regular
  font-family: "Jua", sans-serif
  font-weight: 400
  font-style: normal

.cabecera
  height: 10vh
  display: flex
  flex-direction: row
  justify-content: space-around
  box-shadow: 0px 2px 10px black
  margin-bottom: 3px
  
  

  .logo
    align-items: center
    img
      width: 90px


  .sub_cabeA
    width: 15%
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center

    .lnk
      font-size: 40px
      color: #914538

      &.router-link-exact-active 
        color: #6c2b20
.cuerpo
  height: 84vh
  background-color: #f6bf80

</style>
