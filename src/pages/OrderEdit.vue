<template>
  <div class="q-pa-md bg-image">
    <q-page class="fit justify-center content-start">
     <q-card class="my-card" style="margin-left:auto; margin-right:auto; width:90%; min-width:840px; max-width:1200px">
      <q-section>
        <div class="row justify-center q-pa-sm">
          <q-text class="text-h4">Orden de servicio</q-text>
        </div>
        <div class="row justify-center q-pa-md">
          <q-icon
            alt="order"
            name="event"
            size="200px"
          />
        </div>
      </q-section>
      <q-separator/>
      <q-card-section>
        <div class="row wrap justify-around q-py-md">
          <div class="column col-3 q-px-sm">
            <q-input outlined v-model="orderUserid" label="Cédula del responsable" style="min-width: 240px;">
              <template v-slot:append>
                <q-btn flat color="secondary" icon="search"/>
              </template>
            </q-input>
          </div>
          <div class="column col-3 q-px-sm">
            <q-input outlined v-model="orderAreaid" label="Código de área" style="min-width: 240px;">
              <template v-slot:append>
                <q-btn flat color="secondary" icon="search"/>
              </template>
            </q-input>
          </div>
          <div class="column col-3 q-px-sm">
            <q-input outlined v-model="orderIncid" label="Código de incidencia" style="min-width: 240px;">
              <template v-slot:append>
                <q-btn flat color="secondary" icon="search"/>
              </template>
            </q-input>
          </div>
        </div>

        <div class="row justify-center q-py-md">
          <div class="column col-grow" style="max-width:90%">
            <div>
              <q-input
                v-model="orderTrabajo"
                label="Descripción del trabajo a realizar"
                autogrow
                outlined
              />
            </div>
          </div>
        </div>

        <div class="row justify-evenly q-py-sm">
          <div class="column col-4">
            <q-input v-model="orderFechaInicio" label="Fecha de inicio" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="orderFechaInicio">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="column col-4">
            <div class="row justify-center">
              <q-label class="text-subtitle1">Estado</q-label>
            </div>
            <div class="row justify-center">
              <q-btn-toggle
                  v-model="orderEstado"
                  push
                  dense
                  unelevated
                  toggle-color="secondary"
                  :options="[
                    {value: 2, slot: 'one'},
                    {value: 0, slot: 'two'},
                    {value: 1, slot: 'three'},
                  ]"
                >
                  <template v-slot:two>
                    <div class="row items-center no-wrap">
                      <q-icon left name="update" />
                      <div class="text-center">
                        Pendiente
                      </div>
                    </div>
                  </template>

                  <template v-slot:one>
                    <div class="row items-center no-wrap">
                      <q-icon left name="highlight_off" />
                      <div class="text-center">
                        Cancelada
                      </div>
                    </div>
                  </template>

                  <template v-slot:three>
                    <div class="row items-center no-wrap">
                      <q-icon left name="check_circle_outline" />
                      <div class="text-center">
                        Finalizada
                      </div>
                    </div>
                  </template>

                  <template v-slot:four>
                    <div class="row items-center no-wrap">
                      <q-icon left name="receipt" />
                      <div class="text-center">
                        Jefe de<br>operaciones
                      </div>
                    </div>
                  </template>
                </q-btn-toggle>
              </div>
          </div>
        </div>
        <div class="row justify-evenly q-py-sm">

        </div>
        <div class="row">
          <q-card class="my-card" style="margin-left:auto; margin-right:auto; width:90%;">
            <div class="row justify-evenly items-center q-py-sm">
              <div class="column items-center col-6 q-px-sm">
              Participantes adicionales
              </div>  
              <div class="column col-3 q-px-sm">
                <q-input outlined v-model="addparticipant" label="Cédula del operador" style="min-width: 240px;">
                </q-input>
              </div>
              <div class="column col-2 q-px-sm">
                <q-btn flat color="secondary" label="Añadir" icon="add" @click="addNewParticipant()"/>
              </div>
            </div>
            <q-separator/>
            
            <div class="row justify-center items-center no-wrap q-pt-sm" v-for="(item, index) in Participant" :key="index">
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.participantID}}
              </q-label>
            </div>
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.participantName +" "+ item.participantSurname}}
              </q-label>
            </div>
            <div class="column col-3 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                {{item.participantCargo}}
              </q-label>
            </div>
            <div class="column col-1 items-center">
              <q-label style="margin-left:auto; margin-right:auto">
                <q-btn flat color="secondary" icon="cancel" @click="deleteParticipant(index)"/>
              </q-label>
            </div>
          </div>

          </q-card>
        </div>
        

      </q-card-section>

      <q-separator/>
      <q-card-section>
        <div class="row justify-end q-py-md">
          <div class="column col-2 q-px-sm">
            <q-btn class="btn-fixed-width" color="secondary" label="Guardar" icon="save" @click="$router.back()"/>
          </div>
          <div class="column col-2 q-px-sm">
            <q-btn class="btn-fixed-width" color="secondary" label="Volver" icon="cancel" @click="$router.back()"/>
          </div>
        </div>
      </q-card-section>
     </q-card>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {ref} from 'vue'

export default defineComponent({
  name: 'OrderEdit',
  data(){
    return{
      addparticipant:'',
      orderUserid: '',
      orderAreaid: '',
      orderIncid: '',
      orderTrabajo: '',
      orderFechaInicio: '',
      orderFechaCierre: '',
      orderEstado: ref(0),
      Participant:[ {
        participantID:'101',
        participantName:'Fulanito',
        participantSurname:'Ejemplificado',
        participantCargo:'Ejemplo',
        }
      ]
    }
  },
  methods: {
    addNewParticipant() {
      this.Participant.push({
        participantID: this.addparticipant,
        participantName:'Fulanito',
        participantSurname:'Ejemplificado',
        participantCargo:'Ejemplo',
      }),
      this.addparticipant=''
    },
    deleteParticipant(index) {
      this.Participant.splice(index, 1)
    }
  }
})
</script>