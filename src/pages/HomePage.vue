<template>
<section class="container-fluid">

  <section class="row justify-content-center">
    <div class="col-12 col-md-10 bg-page drop-1 rounded mb-3 mt-1 py-2">

      <section class="row mb-2 ">
        <div class="col-4 pe-0 ps-1">
          <i class="mdi mdi-file-document text-yellow"></i> Orders <span class="text-yellow"> {{ orders.length }}/{{ totalCount }}</span>
        </div>
        <div class="col-4 text-center px-1">
          <i class="mdi mdi-package-variant-closed text-purple"></i> Units <span class="text-purple"> {{units}}</span>
        </div>
        <div class="col-4 text-end ps-0">
          <i class="mdi mdi-currency-usd text-teal"></i><span class="text-light">{{ money }}</span>
        </div>
      </section>

        <section class="row justify-content-between">
        <div class="col-12 col-md-4 mb-3 mt-2 mb-md-0">
          <div class="input-group">
            <input type="text" v-model="search" class="form-control" placeholder="Search" >
            <button class="input-group-text btn-accent"><i class="mdi mdi-magnify"></i></button>
          </div>
        </div>
        <div class="col-3 col-md-1 my-1">
          <div class="form-check form-switch">
            <input v-model="filter['in-queue']" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"><i class="mdi mdi-progress-clock text-yellow"></i></label>
          </div>
        </div>
        <div class="col-3 col-md-1 my-1">
          <div class="form-check form-switch">
            <input v-model="filter.printed" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"><i class="mdi mdi-package-variant-closed-check text-purple"></i></label>
          </div>
        </div>
        <div class="col-3 col-md-1 my-1">
          <div class="form-check form-switch">
            <input v-model="filter.complete" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"><i class="mdi mdi-check-decagram text-teal"></i></label>
          </div>
        </div>
        <div class="col-3 col-md-1 my-1">
          <div class="form-check form-switch">
            <input v-model="paidFilter" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"><i class="mdi mdi-credit-card-check text-blue dodge-10"></i></label>
          </div>
        </div>
        <div class="col-12 col-md-2 my-1 text-end">
          <button  @click="resetFilter" class="btn selectable text-purple">
            <i class="mdi mdi-filter text-purple"></i>clear
          </button>
        </div>
      </section>

    </div>


  </section>

  <section v-if="orders.length && !loading" class="row justify-content-center">

    <div v-for="o in orders" :key="o.id" class="col-12 col-md-10">
      <Order :order="o"/>
    </div>
    <Modal id="order-form">
      <template #header>Create Order</template>
      <template #body><OrderForm target="order-form"/></template>
    </Modal>
    <Modal id="update-form">
      <template #header>Edit Order</template>
      <template #body><OrderForm :order="activeOrder" target="update-form"/></template>
    </Modal>
  </section>
  <section class="row text-center text-dark dodge-50" v-else>
    loading orders... <i class="mdi mdi-loading mdi-spin text-accent"></i>
  </section>
</section>
</template>

<script setup>
import Pop from '../utils/Pop.js';
import {ordersService} from '../services/ordersService.js'
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { basePath } from '../env.js';
  async function getOrders(){
    try {
      loading.value = true
      await ordersService.getOrders()
    } catch (error) {
      Pop.error(error, '[Getting Orders]')
    } finally{
      loading.value = false
    }
  }

  onMounted(()=>{
    getOrders()
    resetFilter()
  })

  const search = ref('')
  const paidFilter = ref(false)
  const filter = ref({})
  const loading = ref(false)

  function resetFilter(){
    search.value = ''
    filter.value = {'in-queue': true, printed: true}
  }

  const activeOrder = computed(()=> AppState.activeOrder)
  const orders = computed(()=> AppState.orders.filter(order =>{

    if(paidFilter.value && !order.paid) return false
    let include = false
    for(let key in filter.value){
        if(order.status == key && filter.value[key]) include = true
    }
    if(!include) return false
    if(search.value == '') return true
    const rgx = new RegExp(search.value, 'ig')
    return rgx.test(order.customer) || rgx.test(order.model) || rgx.test(order.color) || rgx.test(order.customRequest) || rgx.test(order.status)
  }))
  const totalCount = computed(()=> AppState.orders.length)
  const units = computed(()=> orders.value.reduce((acc, cur)=> acc + parseInt(cur.qty) , 0))
  const money = computed(()=> orders.value.reduce((acc, cur)=> acc + parseInt(cur.cost) , 0))
</script>

<style  lang="scss">
.order-row{
  display: grid;
  grid-template-columns: 28px 200px 15ch 30ch 1fr 15ch 28px;
}

@media  (max-width: 768px) {
  .order-row{
    grid-template-columns: 2% 175px 10% 1fr 1fr 10% 4%;

  }
}
</style>
