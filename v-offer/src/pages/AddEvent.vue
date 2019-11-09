<template>
  <q-page padding>
    <div class="q-pa-md flex flex-center column">
      <h3>Add New Event</h3>
      <p>Availability</p>
      <q-form @submit="onSubmit" class="q-gutter-md">
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
        <div class="q-pa-md">
          <q-input filled bottom-slots v-model="place" label="Location" style="max-width: 200px">
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
          </q-input>
          <!-- <q-input filled outlined v-model="number" label="Number of volunteers" /> -->
          <q-input
            v-model.number="number"
            label="Number of volunteers"
            type="number"
            filled
            style="max-width: 200px"
          />
          <p></p>
          <div class>
            Select skills:
            <!-- <div class="q-gutter-md row items-start"> -->
            <q-select
              filled
              v-model="multiple"
              multiple
              :options="options"
              label="Multiple"
              style="width: 250px"
            />
            <!-- </div> -->
          </div>
          <div style="max-width: 300px">
            <p></p>Description of event:
            <q-input v-model="description" filled type="textarea" />
          </div>
        </div>
        <div class="q-pa-md">
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageAddEvent",
  data() {
    return {
      startDate: "2019/11/09",
      endDate: "2019/11/09",
      place: "",
      number: "",
      multiple: null,
      options: [
        "Cooking",
        "Public speaking",
        "Web coding",
        "Teaching",
        "Swimming",
        "Driving"
      ],
      description: ""
    };
  }
};
</script>
