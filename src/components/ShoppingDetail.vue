<template>
  <div class="wrapper">
    <div class="container--form">
      <div class="row">
        <div class="col--6 font-size-13">
          <font-awesome-icon icon="arrow-left" /> &nbsp; &nbsp;Back to cart
        </div>
        <div class="col--4">
          <div class="row">
            <div class="col--3 padding-top-15">
              <h2 class="primary__color">Delivery details</h2>
            </div>
            <div class="col--3 padding-top-15 right padding-right-15 font-size-13">
              <input type="checkbox"> Send as Dropshipper
            </div>
            <div class="col--6">
              <div class="row">
                <div class="col--3 padding-top-15 padding-right-15">
                  <div class="form-group" >
                    <input type="text" id="email" name="email" v-model.trim.lazy="$v.email.$model" :class="{ 'form-control--error': $v.email.$error }" class="form--control" required>
                    <label class="form-control-placeholder" :class="{ 'form-control-placeholder--error': $v.email.$error }" for="email">Email</label>
                  </div>
                  <div class="form-group">
                    <input type="text" id="number" class="form--control" v-model.trim.lazy="$v.number.$model" name="number" required>
                    <label class="form-control-placeholder" :class="{ 'form-control-placeholder--error': $v.number.$error }" for="number">Number</label>
                  </div>
                  <div class="form-group">
                    <textarea class="form--control height-100" v-model.trim.lazy="$v.address.$model" :class="{ 'form-control--error': $v.address.$error }"  id="address" name="address" required></textarea>
                    <label class="form-control-placeholder" :class="{ 'form-control-placeholder--error': $v.address.$error }" for="address">Delivery Address</label>
                  </div>
                </div>
                <div class="col--3 padding-top-15 padding-right-15">
                  <div class="form-group">
                    <input type="text" class="form--control" v-model.trim.lazy="$v.dropshipper_name.$model" :class="{ 'form-control--error': $v.dropshipper_name.$error }" id="dropshipper_name" name="dropshipper_name" required>
                    <label class="form-control-placeholder" :class="{ 'form-control-placeholder--error': $v.dropshipper_name.$error }" for="dropshipper_name">Dropshipper Name</label>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form--control" v-model.trim.lazy="$v.dropshipper_phone.$model" :class="{ 'form-control--error': $v.dropshipper_phone.$error }" id="dropshipper_phone" name="dropshipper_phone" required>
                    <label class="form-control-placeholder" :class="{ 'form-control-placeholder--error': $v.dropshipper_phone.$error }" for="dropshipper_phone">Dropshipper Name</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col--2 padding-left-15 border-left">
          <div class="row">
            <div class="col--6 padding-top-15">
              <h2 class="primary__color">Summary</h2>
              <span class="font-size-13">10 items purchased</span>
            </div>
            <div class="col--6 margin-top-100">
              <div class="row">
                <div class="col--3">
                  <span class="font-size-13">Cost of goods</span>
                </div>
                <div class="col--3 right">
                  <span class="font-size-13">500,000</span>
                </div>
                <div class="col--3 padding-top-15">
                  <span class="font-size-13">Dropshipping Fee</span>
                </div>
                <div class="col--3 right padding-top-15">
                  <span class="font-size-13">5,900</span>
                </div>
                <div class="col--3 padding-top-15">
                  <h2 class="primary__color">Total</h2>
                </div>
                <div class="col--3 right padding-top-15">
                  <h2 class="primary__color">505,900</h2>
                </div>
                <div class="col--6 padding-top-15">
                  <router-link to="/payment">
                    <button class="btn__payment">Continue to payment</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'ShoppingDetail',
  data () {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      required,
      minLength: minLength(4)
    },
    number: {
      required,
      minLength: minLength(4)
    },
    address: {
      required,
      minLength: minLength(4)
    },
    dropshipper_name: {
      required,
      minLength: minLength(4)
    },
    dropshipper_phone: {
      required,
      mingLength: minLength(4)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 80%
    height: auto
    margin: 0 auto

  .container--form
    width: 100%
    height: 500px
    background: #ffffff
    margin-top: 100px
    padding: 30px
    box-shadow: 0 20px 24px rgba(0, 0, 0, 0.1)
    border-radius: 3px

  .form--control--area
    width: 100%
    height: 150px
    padding: 8px 15px
    border: 1px solid #DDD
    margin-bottom: 15px
    font-size: 13px;
    border-radius: 3px
    outline: 0

  .form--control
    width: 100%
    height: 50px
    padding: 20px 15px 10px 15px
    border: 1px solid #DDD
    margin-bottom: 15px
    font-size: 13px;
    border-radius: 3px
    outline: 0

  .form-control--error
    border: 1px solid #FF8A00

  .form-control-placeholder--error
    color: #FF8A00

  ::placeholder {
    color: #999
  }

  .border-left
    border-left: 1px solid #ffead1

  .btn__payment
    width: 100%
    height: 60px
    background: #FF8A00
    border: 0;
    box-shadow: 0 20px 24px rgba(0, 0, 0, 0.1)
    color: #FFF
    font-size: 18px
    border-radius: 3px
    cursor: pointer
    outline: 0

  .form-group{
    position: relative
  }

  .form-control-placeholder{
    position: absolute
    top: 0px
    left: 0
    padding: 15px
    transition: all 200ms
    opacity: 0.5
    font-size: 14px
  }

  .form--control:focus + .form-control-placeholder,
  .form--control:valid + .form-control-placeholder{
    font-size: 60%
    transform: translate3d(0, -20%, 0)
    opacity: 1
  }

  .height-100
    height: 150px
</style>
