<template>

<div class="modal fade"  tabindex="-1"  data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header bg-accent-to-emphasis">
        <div class="modal-title" id="modalTitleId">
          <slot name="header"></slot>
        </div>
          <button type="button" class="btn text-dark" data-bs-dismiss="modal" aria-label="Close"><i class="mdi mdi-close"></i></button>
      </div>
      <div class="modal-body">
       <slot name="body"></slot>
      </div>
    </div>
  </div>
</div>

</template>


<script setup>

</script>


<style lang="scss" scoped>

</style>
