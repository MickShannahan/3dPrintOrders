<script setup>
import Pop from '../utils/Pop.js';
import {galleryService} from '../services/GalleryService.js'
import { onMounted } from 'vue';

async function getGallery(){
  try {
    await galleryService.getGallery();
  } catch (error) {
    Pop.error(error)
  }
}


onMounted(()=>{
  getGallery()
})
</script>

<template>
  <div class="container-fluid">
    <section class="row">

    </section>
  </div>

</template>

<style lang="scss" scoped>
</style>
