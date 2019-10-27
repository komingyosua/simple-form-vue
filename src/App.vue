<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.config.productionTip = false

export default {
  name: 'App'
}
</script>

<style lang="stylus">
*{
  margin: 0
  padding: 0
  -webkit-box-sizing: border-box
  box-sizing: border-box
}

body
  background-color: #FFFAE6

a
  color: #2c3e50
  text-decoration: none

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

.row:before,.row:after
  content:""
  display: table
  clear:both

[class*='col--']
  float: left
  min-height: 1px
  width: 16.66%

.col--1
  width: 16.66%
.col--2
  width: 33.33%
.col--3
  width: 50%
.col--4
  width: 66.66%
.col--5
  width: 83.33%
.col--6
  width: 100%

.right
  text-align: right

.left
  text-align: left

.primary__color
  color: #FF8A00

.margin-top-100
  margin-top: 150px

.padding-top-15
  padding-top: 15px

.padding-right-15
  padding-right: 15px

.padding-left-15
  padding-left: 15px

.font-size-13
  font-size: 13px
</style>
