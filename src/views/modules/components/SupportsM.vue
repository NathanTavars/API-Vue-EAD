<template>
    <div class="comments">
      <div class="header">
        <span class="title">Dúvidas</span>
        <button class="btn primary">
          <i class="fas fa-plus"></i>
          Enviar nova dúvida
        </button>
      </div>
  
      <SupportsView/>
    </div>
  </template>
  
  <script>
  import SupportsView from '@/components/SupportsView.vue'

  export default {
    name: "SupportsM",
    components: {
        SupportsView,
        
    }
  };
  </script>