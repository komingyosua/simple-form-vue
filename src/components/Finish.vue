<template>
  <div class="wrapper">
    <div class="container--form">
      <div class="row">
        <div class="col--4">
          <div class="row">
            <div class="col--6">
              <div class="row">
                <div class="col--6 padding-top-15 padding-right-15">
                  <div class="offset--page">
                  <h2 class="primary__color padding-top-15">Thank You</h2>
                  <p class="padding-top-15 font-size-13"><b>Order ID: XXKYB</b></p>
                  <p class="padding-top-15 font-size-13">Your order will be delivered with GO-SEND</p>
                  <div class="padding-top-15 font-size-13">
                    <router-link to="/">
                      <font-awesome-icon icon="arrow-left" /> &nbsp; &nbsp;Go to Homepage
                    </router-link>
                  </div>
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
                  <span class="font-size-13"><b>GO-SEND</b> Shipment</span>
                </div>
                <div class="col--3 right padding-top-15">
                  <span class="font-size-13">15,000</span>
                </div>
                <div class="col--3 padding-top-15">
                  <h2 class="primary__color">Total</h2>
                </div>
                <div class="col--3 right padding-top-15">
                  <h2 class="primary__color">505,900</h2>
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
  name: 'PaymentDetail',
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

  .margin-top-100
    margin-top: 200px

  .box-select
    width: 200px
    height: 70px
    border: 1px solid #DDD
    float: left
    margin-right: 15px
    font-size: 13px
    padding: 10px 15px
    cursor: pointer

  .box-select span
    display: block
    padding-top: 5px

  .offset--page
    padding: 100px 200px 100px 200px
</style>
