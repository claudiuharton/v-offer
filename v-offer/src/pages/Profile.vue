<template>
  <q-page padding>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="q-pa-md flex flex-center column">
        <h3>Edit user profile</h3>
        <div class="flex">
          <p style="padding-right:5px">Name:</p>
          <div class="cursor-pointer">
            {{user.name}}
            <q-popup-edit v-model="user.name">
              <q-input v-model="user.name" dense autofocus counter />
            </q-popup-edit>
          </div>
        </div>
        <div class="flex">
          <p style="padding-right:5px">Email:</p>
          <div class="cursor-pointer">
            {{user.email}}
            <q-popup-edit v-model="user.email">
              <q-input v-model="user.email" dense autofocus counter />
            </q-popup-edit>
          </div>
        </div>
        <div class="flex">
          <p style="padding-right:5px">Phone:</p>
          <div class="cursor-pointer">
            {{user.phone}}
            <q-popup-edit v-model="user.phone">
              <q-input v-model="user.phone" dense autofocus counter />
            </q-popup-edit>
          </div>
        </div>
        <br />
        <p>Availability</p>
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

      <div class="q-pa-md flex flex-center column">
        <p>Select skills:</p>
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
      <div class="q-pa-md">
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>



<script>
export default {
  name: "PageProfile",
  data() {
    return {
      startDate: "2019/11/09",
      endDate: "2019/11/09",
      multiple: null,
      options: [
        "Cooking",
        "Public speaking",
        "Web coding",
        "Teaching",
        "Swimming",
        "Driving"
      ],
      user: {
        name: "John Smith",
        email: "email@example.com",
        phone: "0777777777"
      }
    };
  }
};
</script>
