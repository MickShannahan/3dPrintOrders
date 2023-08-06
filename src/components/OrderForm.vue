<template>
<form @submit.prevent="createOrder()" class="row">

        <div class="col-md-4 form-floating mb-2">
          <input type="text" v-model="editable.customer" required name="customer" class="form-control" placeholder="Customer Name">
          <label for="floatingInput">Customer Name</label>
        </div>
        <div  class="col-md-2  mb-2 d-flex h-25 px-0" id="preview-cost">
          <i class="mdi mdi-currency-usd text-green"></i><label for=""></label>
         <input type="number" class="form-control" v-model="editable.cost" placeholder="0">
        </div>
        <div class="col-md-6 mb-1">
          <img v-if="selected?.picture" :src="basePath+'Previews/'+ selected?.picture" id="preview-img" class="img-fluid rounded" />
          <img v-else :src="basePath + 'Previews/placeholder.png'" id="preview-img" class="img-fluid rounded" />
        </div>


        <div class="col-2 pe-0">
          <input type="quantity" v-model="editable.qty" name="qty" class=" form-control" >
        </div>

        <div class="col-10 ps-0">
          <div class="input-group mb-3 w-100">

            <select v-model="editable.model" required class="form-select" id="model-list" name="model" >
              <option selected disabled value="">Model</option>
             <!-- Model Options -->
              <option v-for="p in printables" :key="p" :value="p.name">{{ p.name }}</option>
            </select>
            <select v-model="editable.color" required class="form-select" id="color-list" name="color" >
              <option selected disabled value="">Color</option>
              <!-- Color Options -->
              <option v-for="c in colors" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>
        </div>

        <div class="col-12 mb-2">
          <label for="">Custom Request</label>
          <textarea v-model="editable.customRequest" class="form-control" name="customRequest" placeholder="no legs, colored eyes, smaller etc.">      </textarea>
        </div>
        <div v-if="!order" class="col-6 col-md-4 offset-md-4 mb-2">
          <button type="button" class="btn text-secondary w-100" @click="resetForm">clear form</button>
        </div>
        <div v-else class="col-6 col-md-4 offset-md-4 mb-2">
          <button type="button" class="btn text-secondary w-100" data-bs-dismiss="modal">cancel</button>
        </div>
        <div v-if="!order" class="col-6 col-md-4  mb-2">
          <button type="submit" class="btn btn-accent w-100"><i class="mdi mdi-check"></i>create</button>
        </div>
        <div v-else class="col-6 col-md-4  mb-2">
          <button type="button" class="btn btn-indigo w-100" @click="updateOrder"><i class="mdi mdi-tray-arrow-up" ></i>update</button>
        </div>

      </form>
</template>


<script setup>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref, watch, watchEffect } from 'vue';
import Pop from '../utils/Pop.js';
import { ordersService } from '../services/ordersService.js';
import { logger } from '../utils/Logger.js';
import { Modal } from 'bootstrap';
import { basePath } from '../env.js';
import { Order } from '../models/Order.js';

const props = defineProps({order: {type: Order}, target: String})

const editable = ref({})
const printables = computed(()=> AppState.printables)
const colors = computed(()=> AppState.colors)
const selected = computed(()=> AppState.printables.find(p => p.name == editable.value.model))

watch(selected, ()=>{
  editable.value.cost = selected.value?.cost
})

watchEffect(()=>{
  if(props.order){
    editable.value = {...props.order}
  } else {
    resetForm()
  }
})

function resetForm(){
editable.value = {qty: 1, model: '', color: ''}
}

async function createOrder(){
  try {
    let order = { ...selected.value,...editable.value }
    delete order.id
    await ordersService.createOrder(order)
    resetForm()
    closeModal()
  } catch (error) {
    Pop.error(error, 'CREATE ORDER')
  }
}

async function updateOrder(){
  try {
    await ordersService.updateOrder(editable.value)
    closeModal()
    Pop.toast("Order Updated", 'success', 'center')
  } catch (error) {
    Pop.error(error, 'UPDATING ORDER')
  }
}

function closeModal(){
  console.log(props)
  Modal.getOrCreateInstance('#'+ props.target).hide()
}

</script>


<style lang="scss" scoped>

</style>
