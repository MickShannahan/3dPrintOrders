<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "/css/main.css";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

body .swal2-popup.swal2-toast{
  backdrop-filter: blur(15px);
  background: transparent;
  position: relative;
  &::before{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    content: '';
    opacity: 0.3;
  }
}
</style>
