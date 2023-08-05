<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 justify-content-between">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="">
        <i class="mdi mdi-dots-grid text-accent"></i> 3D Print Orders
      </div>
    </router-link>
    <section class="d-flex justify-content-end">
    <button class="rounded-pill btn btn-blue" data-bs-toggle="modal" data-bs-target="#order-form"><i class="mdi mdi-plus"></i>order</button>
  </section>
  </nav>
</template>

<script>

</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
