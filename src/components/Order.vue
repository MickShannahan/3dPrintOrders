<template>
  <section class="row bg-page drop-2 p-1 rounded mb-2 ">
    <div class="col-md-6 text-accent  fw-bold">{{ order.customer }} <i class="mdi mdi-circle-small text-dark dodge-20"></i>
    <i v-if="order.paid" class="mdi mdi-credit-card-check text-blue dodge-10 "><small class="text-dark dodge-20 ms-2">paid</small></i>
    <i v-else class="mdi mdi-credit-card-remove text-yellow dodge-10"><small class="text-dark dodge-20 ms-2">needs payment</small></i>
    </div>
    <div class="col-8 col-md-5"><i :class="`mdi mdi-${icons[order.status]}`"></i> {{ order.status }} <span v-if="order.status != 'complete'" class="ms-4 me-2 text-light burn-40"><i class="mdi mdi-tag-arrow-down text-emphasis"></i>{{ order.orderedAgo }}</span><span v-if="order.orderedAgo != order.updatedAgo" class="text-light burn-40"><i class="mdi mdi-update text-indigo"></i>{{ order.updatedAgo }}</span></div>
    <div class="col-4 col-md-1 text-end">
      <i class="mdi mdi-currency-usd text-green"></i>
      {{ order.cost }}</div>
    <div class="col-4 col-md-2">
      <img :src="basePath +'Previews/'+order.picture" class="order-picture img-fluid" alt="">
    </div>
    <div class="col-8 col-md-9">
      <div class="border-bottom">
        {{ order.qty }} <i class="mdi mdi-circle-small text-accent"></i> {{ order.model }}
      </div>
      <div>{{ order.color }}</div>
      <small v-if="order.customRequest" class="text-light burn-30"><i class="mdi mdi-information text-hazard me-1"></i>{{ order.customRequest }}</small>
    </div>
      <div class="col-1 btn-group dropstart d-none d-md-block">
        <button type="button" class="btn dropdown-toggle h-100 w-100" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="mdi mdi-menu fs-2"></i>
        </button>
        <ul class="dropdown-menu">
          <li v-if="!order.paid">
            <button @click="markPaid(true)" class="btn text-blue dodge-10 w-100" ><i class="mdi mdi-credit-card-check"></i> mark paid</button>
          </li>
          <li>
            <button @click="updateOrder('printed')" class="btn text-purple w-100" ><i class="mdi mdi-package-variant-closed-check"></i> printed</button>
          </li>
          <li>
            <button @click="updateOrder('complete')" class="btn text-teal w-100"><i class="mdi mdi-check-decagram"></i> complete</button>
          </li>
          <li>
            <button @click="updateOrder('in-queue')" class="btn text-yellow w-100"><i class="mdi mdi-progress-clock"></i> in-queue</button>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li v-if="order.paid">
            <button @click="markPaid(false)" class="btn text-yellow dodge-10 w-100" ><i class="mdi mdi-credit-card-refund"></i>mark un-paid</button>
          </li>
          <li>
            <button  class="btn text-indigo dodge-20 w-100" data-bs-toggle="modal" data-bs-target="#update-form" @click="setActive"><i class="mdi mdi-tray-arrow-up"></i> update</button>
          </li>
          <li>
            <button @click="deleteOrder" class="btn text-hazard w-100"><i class="mdi mdi-delete-forever"></i> delete</button>
          </li>
        </ul>
    </div>
      <div class="col-12 btn-group dropup d-block d-md-none">
        <button type="button" class="btn dropdown-toggle h-100 w-100" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="mdi mdi-menu fs-2"></i>
        </button>
        <ul class="dropdown-menu">
          <li v-if="!order.paid">
            <button @click="markPaid(true)" class="btn text-blue dodge-10 w-100" ><i class="mdi mdi-credit-card-check"></i> mark paid</button>
          </li>
          <li>
            <button @click="updateOrder('printed')" class="btn text-purple w-100" ><i class="mdi mdi-package-variant-closed-check"></i> printed</button>
          </li>
          <li>
            <button @click="updateOrder('complete')" class="btn text-teal w-100"><i class="mdi mdi-check-decagram"></i> complete</button>
          </li>
          <li>
            <button @click="updateOrder('in-queue')" class="btn text-yellow w-100"><i class="mdi mdi-progress-clock"></i> in-queue</button>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li v-if="order.paid">
            <button @click="markPaid(false)" class="btn text-yellow dodge-10 w-100" ><i class="mdi mdi-credit-card-refund"></i>mark un-paid</button>
          </li>
          <li>
            <button  class="btn text-indigo w-100" data-bs-toggle="modal" data-bs-target="#update-form" @click="setActive"><i class="mdi mdi-tray-arrow-up"></i> update</button>
          </li>
          <li>
            <button @click="deleteOrder" class="btn text-hazard w-100"><i class="mdi mdi-delete-forever"></i> delete</button>
          </li>
        </ul>
    </div>
  </section>
</template>


<script setup>
import { AppState } from '../AppState.js';
import { basePath } from '../env.js';
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

async function markPaid(bool){
  try {
    const update = {...props.order}
    update.paid = bool
    await ordersService.updateOrder(update)
  } catch (error) {
    Pop.error(error, 'MARKING PAID')
  }
}

function setActive(){
  AppState.activeOrder = props.order
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
