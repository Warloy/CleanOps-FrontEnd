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
                    Estadísticas y recolección de datos
                  </q-label>
                </div>
              </div>
              <div class="row justify-around q-py-md">
                <div class="col-3">
                  <div class="q-pa-md">
                    <q-input v-model="startdate" label="Fecha de inicio" mask="date" :rules="['date']">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="startdate">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </div>
                <div class="col-3">
                  <div class="q-pa-md">
                    <q-input v-model="enddate" label="Fecha de fin" mask="date" :rules="['date']">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="enddate">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </div>
              </div>  
            </q-card>
          </div>
        </div>
      </div>

      <div class="row wrap q-pa-sm justify-center">
        <div class="column col-3">
          <q-card class="q-py-sm q-px-sm" style="margin-left:auto; margin-right:auto; width:80%; min-width:300px; max-width:1400px">
            <div class="row wrap justify-center">
                <q-label class="text-h6">
                  Incidencias
                </q-label>
            </div>
            <q-separator/>
            <div class="row justify-center">
              <q-circular-progress
                    show-value
                    reverse
                    :value="100"
                    size="120px"
                    :thickness="0.12"
                    color="secondary"
                    center-color="transparent"
                    track-color="grey-3"
                    class="q-ma-md"
                  >
                  {{cantIncidencias}}
                </q-circular-progress>
            </div>
            <div class="row justify-center">
              Incidencias registradas
            </div>
            <q-separator/>
            <div class="row justify-start q-mt-sm">
              Porcentaje de incidencias aprobadas
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcIncidencias/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcIncidencias}}%
              </div>
            </div> 
            <div class="row justify-start q-mt-sm">
              Porcentaje de incidencias por revisar
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcIncidencias2/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcIncidencias2}}%
              </div>
            </div>
            <div class="row justify-start q-mt-sm">
              Porcentaje de incidencias convertidas en orden
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcIncidencias3/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcIncidencias3}}%
              </div>
            </div>  
          </q-card>
        </div>
        <div class="column col-3">
          <q-card class="q-py-sm q-px-sm" style="margin-left:auto; margin-right:auto; width:80%; min-width:300px; max-width:1400px">
            <div class="row wrap justify-center">
                <q-label class="text-h6">
                  Trabajadores
                </q-label>
            </div>
            <q-separator/>
            <div class="row justify-center">
              <q-circular-progress
                    show-value
                    reverse
                    :value="100"
                    size="120px"
                    :thickness="0.12"
                    color="secondary"
                    center-color="transparent"
                    track-color="grey-3"
                    class="q-ma-md"
                  >
                  {{cantUsuarios}}
                </q-circular-progress>
            </div>
            <div class="row justify-center">
              Trabajadores registrados en el sistema
            </div>
            <q-separator/>
            <div class="row justify-start q-mt-sm">
              Porcentaje de trabajadores con estatus disponible
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcUsuarios/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcUsuarios}}%
              </div>
            </div> 
            <div class="row justify-start q-mt-sm">
              Porcentaje de trabajadores activos
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcUsuarios2/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcUsuarios2}}%
              </div>
            </div>
            <div class="row justify-start q-mt-sm">
              Porcentaje de operadores de mantenimiento
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcUsuarios3/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcUsuarios3}}%
              </div>
            </div>
          </q-card>
        </div>
        <div class="column col-3">
          <q-card class="q-py-sm q-px-sm" style="margin-left:auto; margin-right:auto; width:80%; min-width:300px; max-width:1400px">
            <div class="row wrap justify-center">
                <q-label class="text-h6">
                  Órdenes
                </q-label>
            </div>
            <q-separator/>
            <div class="row justify-center">
              <q-circular-progress
                    show-value
                    reverse
                    :value="100"
                    size="120px"
                    :thickness="0.12"
                    color="secondary"
                    center-color="transparent"
                    track-color="grey-3"
                    class="q-ma-md"
                  >
                  {{cantOrdenes}}
                </q-circular-progress>
            </div>
            <div class="row justify-center">
              Órdenes creadas
            </div>
            <q-separator/><div class="row justify-start q-mt-sm">
              Porcentaje de órdenes en curso
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcOrdenes/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcOrdenes}}%
              </div>
            </div> 
            <div class="row justify-start q-mt-sm">
              Porcentaje de órdenes originarias de una incidencia
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcOrdenes2/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcOrdenes2}}%
              </div>
            </div>
            <div class="row justify-start q-mt-sm">
              Porcentaje de órdenes creadas por itinerario
            </div>
            <div class="row justify-start">
              <div class="column col-10 q-pr-sm">
              <q-linear-progress stripe rounded size="20px" :value="porcOrdenes3/100" color="secondary"/>
              </div>
              <div class="column col-2">
                {{porcOrdenes3}}%
              </div>
            </div>
          </q-card>
        </div>
      </div>

    </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SupervisorDashboard',
  data(){
    return{
      startdate: '',
      enddate: '',
      cantIncidencias: 1337,
      cantUsuarios: 420,
      cantOrdenes: 6969,
      porcIncidencias: 75,
      porcIncidencias2: 10,
      porcIncidencias3: 100,
      porcUsuarios: 33,
      porcUsuarios2: 80,
      porcUsuarios3: 50,
      porcOrdenes: 20,
      porcOrdenes2: 30,
      porcOrdenes3: 70,
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
        }
      ]
    }
  }
})
</script>
