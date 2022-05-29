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
                    Listado de órdenes de servicio
                  </q-label>
                </div>
                <div class="column q-pt-sm">
                  <q-btn flat color="secondary" label="Registrar Nueva" icon="add" to="/OperationCheif/OrderManagement/edit"/>
                </div>
              </div>  
            </q-card>
          </div>
        </div>
      </div>

      <div class="row q-pa-sm items-center">
        <q-card class="q-py-sm q-px-md" style="margin-left:auto; margin-right:auto; width:100%; min-width:1000px; max-width:1400px">
          <div class="row no-wrap justify-center">
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Responsable
              </q-label>
            </div>
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Código de área
              </q-label>
            </div>
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Tipo
              </q-label>
            </div>
            <div class="column col-3 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Trabajo requerido
              </q-label>
            </div>
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Estatus
              </q-label>
            </div>
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Ver participantes
              </q-label>
            </div>
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                Editar
              </q-label>
            </div>
          </div>
          <q-separator/>
          <div class="row no-wrap q-pt-sm justify-center items-center" v-for="(item, index) in Order" :key="index">
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.orderUserid}}
              </q-label>
            </div>
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.orderAreaid}}
              </q-label>
            </div>
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <div v-if="item.orderIncid">
                Correctivo
                </div>
                <div v-if="item.orderIncid===''">
                Preventivo
                </div>
              </q-label>
            </div>
            <div class="column col-3 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.orderTrabajo}}
              </q-label>
            </div>
            <div class="column col-1 items-center justify-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <div v-if="item.orderEstado===0">
                Pendiente
                </div>
                <div v-if="item.orderIncid===1">
                Finalizada
                </div>
                <div v-if="item.orderIncid===2">
                Cancelada
                </div>
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <q-btn flat color="secondary" icon="visibility" />
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <q-btn flat color="secondary" icon="edit" to="/OperationCheif/OrderManagement/edit"/>
              </q-label>
            </div>
          </div>
        </q-card>
      </div>

    </q-page>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {ref} from 'vue'

export default defineComponent ({
  name: "OrderManagement",
  data(){
    return{
      Order:[ {
        orderUserid:'25989002',
        orderAreaid:'PC-0010-NA',
        orderIncid:'',
        orderTrabajo:'Limpiar los baños y destapar el lavamanos.',
        orderEstado: ref(0),
      }
      ]
    }
  }
})
</script>
