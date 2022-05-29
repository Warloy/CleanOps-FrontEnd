<template>
  <q-page padding class="bg-image">
    <q-page class="flex flex-center">
      <q-card class="my-card">
        <q-card-section>
          <div class=" flex flex-center">
            <img src="~assets/assetsv0.2/boorm-text.svg" alt="background-imagen" style="height:350px; width:400px">
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-body2 text-center">
          CleanOps es una herramienta en línea para la gestión de mantenimiento.
        </div>
        <div class="text-body2 text-center">
          Actualmente te encuentras en el portal del jefe de operaciones.
        </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page>
</template>
<style lang="scss">
.divimg{
  background: linear-gradient($grey-9, $grey-10);

}
</style>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name:"OperationCheifIndex",
})
</script>

