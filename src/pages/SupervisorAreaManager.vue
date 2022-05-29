<template>
  <div class="q-pa-md bg-image">
    <q-page class="fit justify-center content-start">
     
      <div class="q-pa-sm">
        <div class="row items-center">
          <div class="col">  
            <q-card class="q-py-sm q-px-md" style="margin-left:auto; margin-right:auto; width:90%; max-width:1200px">
              <div class="row wrap justify-evenly">
                <div class="column q-pt-sm">
                  <q-label class="text-h6">
                    Listado de áreas de servicio
                  </q-label>
                </div>
                <div class="column self-end q-px-md">
                  <q-input outlined v-model="userCedula" label="Buscar por código" style="width:100%; min-width:320px">
                    <template v-slot:append>
                      <q-btn flat color="secondary" icon="search"/>
                    </template>
                  </q-input>
                </div>
                <div class="column q-pt-sm">
                  <q-btn flat color="secondary" label="Registrar Nueva" icon="add" to="/supervisor/areas/edit"/>
                </div>
              </div>  
            </q-card>
          </div>
        </div>
      </div>

      <div class="row q-pa-sm items-center">
        <q-card class="q-py-sm q-px-md" style="margin-left:auto; margin-right:auto; width:100%; min-width:1000px; max-width:1400px">
          <div class="row no-wrap">
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Código
              </q-label>
            </div>
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Descripción
              </q-label>
            </div>
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Sector
              </q-label>
            </div>
            
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Editar
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Eliminar
              </q-label>
            </div>
          </div>
          <q-separator/>
          <div class="row no-wrap q-pt-sm" v-for="(item, index) in area" :key="index">
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.areaCodigo}}
              </q-label>
            </div>
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.areaDesc}}
              </q-label>
            </div>
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.areaSect}}
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <q-btn flat color="secondary" icon="edit" to="/supervisor/areas/edit"/>
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <q-btn flat color="secondary" icon="delete"/>
              </q-label>
            </div>
          </div>
        </q-card>
      </div>

    </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SupervisorAreaManager',
  data(){
    return{
      area:[
        {
        areaCodigo: 'PC-0010-NA',
        areaDesc: 'Baños y zonas adyacentes.',
        areaSect: 'Sector de comida. Segundo piso.',
        },
        {
        areaCodigo: 'PC-0012-KR',
        areaDesc: 'Depósito de comida.',
        areaSect: 'Sector subterráneo, planta B división 4.',
        },
        {
          areaCodigo: 'PC-0015-JP',
          areaDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          areaSect: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
      ]
    }
  }
})
</script>
