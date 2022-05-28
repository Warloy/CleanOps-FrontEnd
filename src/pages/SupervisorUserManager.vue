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
                    Listado de usuarios registrados
                  </q-label>
                </div>
                <div class="column self-end q-px-md">
                  <q-input outlined v-model="userCedula" label="Buscar usuarios por cédula" style="width:100%; min-width:320px">
                    <template v-slot:append>
                      <q-btn flat color="secondary" icon="search"/>
                    </template>
                  </q-input>
                </div>
                <div class="column q-pt-sm">
                  <q-btn flat color="secondary" label="Registrar Nuevo" icon="add" to="/supervisor/users/edit"/>
                </div>
              </div>  
            </q-card>
          </div>
        </div>
      </div>

      <div class="row q-pa-sm items-center">
        <q-card class="q-py-sm q-px-md" style="margin-left:auto; margin-right:auto; width:100%; min-width:1000px; max-width:1400px">
          <div class="row no-wrap">
            <div class="column col-2 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Tipo
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Cédula
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Nombre y apellido
              </q-label>
            </div>
            <div class="column col-2 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Correo
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Teléfono
              </q-label>
            </div>
            <div class="column col-2 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Cargo
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Disponibilidad
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
          <div class="row no-wrap q-pt-sm" v-for="(item, index) in user" :key="index">
            <div class="column col-2 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <div v-if="item.userTipo===1">
                <q-icon color="secondary" size=36px name="report_problem"/>
                Personal de monitoreo
                </div>
                <div v-if="item.userTipo===2">
                <q-icon color="secondary" size=36px name="engineering"/>
                Personal de operaciones
                </div>
                <div v-if="item.userTipo===3">
                <q-icon color="secondary" size=36px name="photo_camera_front"/>
                Jefe de monitoreo
                </div>
                <div v-if="item.userTipo===4">
                <q-icon color="secondary" size=36px name="receipt"/>
                Jefe de operaciones
                </div>
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.userCedula}}
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.userNombre + " " + item.userApellido}}
              </q-label>
            </div>
            <div class="column col-2 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.userCorreo}}
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.userTelefono}}
              </q-label>
            </div>
            <div class="column col-2 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.userCargo}}
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <div v-if="item.userDisponible===0">
                <q-icon color="secondary" size=36px name="check_circle_outline"/>
                </div>
                <div v-if="item.userDisponible===1">
                <q-icon color="secondary" size=36px name="highlight_off"/>
                </div>
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <q-btn flat color="secondary" icon="edit" to="/supervisor/users/edit"/>
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
  name: 'SupervisorUserManager',

  data(){
    return{
      user:[
        {
        userCedula: '25989002',
        userNombre: 'Jesus',
        userApellido: 'Manzano',
        userCorreo: 'warloy989@gmail.com',
        userTelefono: '0424-5451773',
        userCargo: 'Desarrollador',
        userDisponible: 0,
        userTipo: 4,
        },
        {
        userCedula: '18262200',
        userNombre: 'Cristina',
        userApellido: 'Gonzalez del Castillo',
        userCorreo: 'crisdelosag@gmail.com',
        userTelefono: '0424-1234567',
        userCargo: 'Ingeniera',
        userDisponible: 1,
        userTipo: 3,
        }
      ]
    }
  }
})
</script>
