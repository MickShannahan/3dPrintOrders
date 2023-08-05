<template>
<form @submit.prevent="createOrder()" class="row">

        <div class="col-md-4 form-floating mb-2">
          <input type="text" v-model="editable.customer" required name="customer" class="form-control" placeholder="Customer Name">
          <label for="floatingInput">Customer Name</label>
        </div>
        <div v-if="selected?.cost" class="col-md-2" id="preview-cost">
         standard cost ${{ selected?.cost }}
        </div>
        <div class="col-md-6 mb-1">
          <img v-if="selected?.picture" :src="'Previews/'+ selected?.picture" id="preview-img" class="img-fluid rounded" />
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
        <div class="col-6 col-md-4 offset-md-4 mb-2">
          <button type="button" class="btn text-secondary w-100" @click="resetForm">clear form</button>
        </div>
        <div class="col-6 col-md-4  mb-2">
          <button type="submit" class="btn btn-accent w-100">create</button>
        </div>

      </form>
</template>


<script setup>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { ordersService } from '../services/ordersService.js';
import { logger } from '../utils/Logger.js';
import { Modal } from 'bootstrap';
const editable = ref({})
const printables = computed(()=> AppState.printables)
const colors = computed(()=> AppState.colors)
const selected = computed(()=> AppState.printables.find(p => p.name == editable.value.model))

function resetForm(){
editable.value = {qty: 1, model: '', color: ''}
}

async function createOrder(){
  try {
    let order = {...editable.value, ...selected.value }
    delete order.id
    logger.log(order)
    await ordersService.createOrder(order)
    resetForm()
    Modal.getOrCreateInstance('#order-form').hide()
  } catch (error) {
    Pop.error(error, 'CREATE ORDER')
  }
}

onMounted(()=>{
  resetForm()
})


</script>


<style lang="scss" scoped>

</style>
