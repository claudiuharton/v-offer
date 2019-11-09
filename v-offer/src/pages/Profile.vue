<template>
  <q-page padding>
    <div class="q-pa-md">
      <p>Disponibilitate:</p>
      <div class="row">
        <div class="col" style="max-width: 150px">
          <q-input filled v-model="startDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="startDate" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div style="margin-left:30px;"></div>
        <div class="col" style="max-width: 150px">
          <q-input filled v-model="endDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="endDate" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <p>Aptitudini</p>
      <div class="q-gutter-md row items-start">
        <q-select
          filled
          v-model="multiple"
          multiple
          :options="options"
          label="Multiple"
          style="width: 250px"
        />
      </div>
    </div>
  </q-page>
</template>



<script>
export default {
  name: "PageProfile",
  data() {
    return {
      startDate: "",
      endDate: "",
      multiple: null,

      options: ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"]
    };
  }
};
</script>
