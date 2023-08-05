<template>
  <section class="row bg-page drop-2 p-1 rounded mb-2 ">
    <div class="col-md-6 text-accent fw-bold">{{ order.customer }}</div>
    <div class="col-6 col-md-4"><i :class="`mdi mdi-${icons[order.status]}`"></i> {{ order.status }}</div>
    <div class="col-6 col-md-2 text-end">
      <i class="mdi mdi-currency-usd text-green"></i>
      {{ order.cost }}</div>
    <div class="col-4 col-md-2">
      <img :src="'Previews/'+order.picture" class="order-picture img-fluid" alt="">
    </div>
    <div class="col-8 col-md-9">
      <div class="border-bottom">
        {{ order.qty }} <i class="mdi mdi-circle-small text-accent"></i> {{ order.model }}
      </div>
      <div>{{ order.color }}</div>
      <small class="text-light burn-30"><i class="mdi mdi-information text-hazard me-1"></i>{{ order.customRequest }}</small>
    </div>
      <div class="col-1 btn-group dropstart d-none d-md-block">
        <button type="button" class="btn dropdown-toggle h-100 w-100" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="mdi mdi-menu fs-2"></i>
        </button>
        <ul class="dropdown-menu">
          <li>
            <button @click="updateOrder('printed')" class="btn text-purple w-100" >printed</button>
          </li>
          <li>
            <button @click="updateOrder('complete')" class="btn text-teal w-100">complete</button>
          </li>
          <li>
            <button @click="updateOrder('in-queue')" class="btn text-yellow w-100">in-queue</button>
          </li>
          <li>
            <button @click="deleteOrder" class="btn hover-text-hazard w-100">delete</button>
          </li>
        </ul>
    </div>
      <div class="col-12 btn-group dropup d-block d-md-none">
        <button type="button" class="btn dropdown-toggle h-100 w-100" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="mdi mdi-menu fs-2"></i>
        </button>
        <ul class="dropdown-menu">
          <li>
            <button @click="updateOrder('printed')" class="btn text-purple w-100" >printed</button>
          </li>
          <li>
            <button @click="updateOrder('complete')" class="btn text-teal w-100">complete</button>
          </li>
          <li>
            <button @click="updateOrder('in-queue')" class="btn text-yellow w-100">in-queue</button>
          </li>
          <li>
            <button @click="deleteOrder" class="btn hover-text-hazard w-100">delete</button>
          </li>
        </ul>
    </div>
  </section>
</template>


<script setup>
import { Order } from '../models/Order.js';
import { ordersService } from '../services/ordersService.js';
import Pop from '../utils/Pop.js';

const props = defineProps({order: {type: Order}})
const icons = {'in-queue': 'progress-clock text-yellow', 'complete': 'check-decagram text-teal', 'printed': 'package-variant-closed-check text-purple'}

async function updateOrder(status){
  try {
    let update = {...props.order}
    update.status = status
    await ordersService.updateOrder(update)
    Pop.toast('order updated', 'success', 'bottom')
  } catch (error) {
    Pop.error(error)
  }
}

async function deleteOrder(){
  try {
    if(await Pop.confirm('Are you sure?', `Delete ${props.order.customer}'s ${props.order.color} ${props.order.model}.`,'Yes',)){
      await ordersService.deleteOrder(props.order.id)
      Pop.toast('order for '+ props.order.customer + ' deleted', 'info', 'center')
    } else {
      Pop.toast('delete canceled', 'info')
    }
  } catch (error) {
    Pop.error(error)

  }
}

</script>


<style lang="scss" scoped>

.order-picture{
  height: 10vh;
  widows: 10vh;
  object-fit: cover;
  border-radius: 8px;
}

</style>
