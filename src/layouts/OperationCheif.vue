<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn icon="menu" size="15px" flat @click="toggleLeftDrawer" />
        <q-space />
        <div >
          <q-btn-dropdown  color="white" text-color="primary" dropdown-icon="arrow_drop_down" unelevated >
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <div class="text-center"><q-item-label>{{name}}</q-item-label>
                  <q-item-label caption>Jefe de operaciones</q-item-label></div>
              </div>
            </template>

            <q-list>
              <q-item clickable v-close-popup @click="onItemClick" to="/OperationCheif/Profile">
                <q-item-section avatar>
                  <q-avatar icon="person" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Modificar Pérfil</q-item-label>
                  <q-item-label caption>Actualizar datos</q-item-label>
                </q-item-section>
              </q-item>


            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      rounded
      class="shadow-3 qdrawer"
    >
      <div>
        <q-img src="~assets/assetsv0.2/Logo.svg" style="height: 150px"> </q-img>
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <q-list bordered padding class="rounded-borders text-black bg-white">
           <q-item clickable class="menu " to="/OperationCheif/Home">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>Pagina principal</q-item-section>
          </q-item>
          <q-item clickable class="menu" to="/OperationCheif/OrderManagement">
            <q-item-section avatar>
              <q-icon name="list_alt" />
            </q-item-section>
            <q-item-section>Gestión de Ordenes de mantenimiento</q-item-section>
          </q-item>
          <q-item clickable class="menu" to="/OperationCheif/PreventiveManagement">
            <q-item-section avatar>
              <q-icon name="calendar_month" />
            </q-item-section>
            <q-item-section>Gestión de  mantenimiento preventivo</q-item-section>
          </q-item>
          <q-item clickable class="menu" to="/Login">
            <q-item-section avatar>
              <q-icon name="logout"  />
            </q-item-section>
            <q-item-section>Cerrar sesión</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss">
.menu:hover {
  color: white;
  background: $secondary;
}
.qdrawer {
  background: linear-gradient($grey-9, $grey-10);
}
.hearditem {
  padding-right: 10px;
}
</style>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "OperationCheif",
  data:()=>({
    name:'Juanito alcachofa'
  }),
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
