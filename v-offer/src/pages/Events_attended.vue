<template>
  <q-page class="flex flex-center column">
    <div class="q-pa-md">
      <q-table
        title="Events Attended"
        :data="data"
        :columns="columns"
        row-key="name"
        :selected.sync="selected"
        :filter="filter"
        grid
        hide-header
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:item="props">
          <div
            class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
            :style="props.selected ? 'transform: scale(0.95);' : ''"
          >
            <q-card :class="props.selected ? 'bg-grey-2' : ''">
              <q-card-section>
                <q-checkbox dense v-model="props.selected" :label="props.row.name" />
              </q-card-section>
              <q-separator />
              <q-list dense>
                <q-item
                  v-for="col in props.cols.filter(col => col.name !== 'desc')"
                  :key="col.name"
                >
                  <q-item-section>
                    <q-item-label>{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ col.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<style scoped>
.q-pa-md {
  padding: 0;
  margin-top: 25px;
}
</style>

<script>
export default {
  beforeCreate() {
    const loggedIn = this.$cookies.get("loggedIn");
    if (!loggedIn) {
      this.$router.push("/login");
    }
  },
  data() {
    return {
      filter: "",
      selected: [],
      columns: [
        {
          name: "name-event",
          required: true,
          label: "Name event",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "organisator",
          required: true,
          label: "Organisator",
          field: row => `${row.organisator.name}`
        },
        {
          name: "purpose",

          label: "Purpose",
          field: "purpose"
        },
        {
          name: "location",
          label: "Location",
          field: "location"
        },
        {
          name: "number_of_volunteers",
          label: "Number of volunteers",
          field: "number"
        },
        {
          name: "period",
          required: true,
          label: "Period",
          align: "left",
          field: row =>
            row.start === row.end
              ? `${row.start}`
              : `${row.start} - ${row.end}`,

          format: val => `${val}`,
          sortable: true
        },
        {
          name: "skills",
          label: "Skills",
          field: "skills",
          format: val => `${val}`,
          sortable: true
        }
      ],
      data: [
        {
          name: "Christmas in the Garden",
          name_event: "Christmas in the Garden",
          location: "AFI Cotroceni",
          purpose: "collect ghift for poor children",
          start: "19.12.2019",
          end: "29.12.2019",
          number: "15",
          organisator: {
            name: "George Timpau",
            email: "george.timpau@yahoo.com",
            phone: "0765558745"
          },
          skills: ["generosity ", " kindness"]
        },
        {
          name: "Help Earth by Planting Trees",
          name_event: "Help Earth by Planting Trees",
          location: "Ilfov",
          purpose: "reforestation",
          start: "10.03.2020",
          end: "13.03.2020",
          number: "250",
          organisator: {
            name: "Claudiu Harton",
            email: "Claudiu.Harton@yahoo.com",
            phone: "07655677745"
          },
          skills: ["willingness"]
        },
        {
          name: "Animal Rescue Shelters",
          name_event: "Animal Rescue Shelters",
          location: "National Park",
          purpose: "help animals",
          start: "15.01.2020",
          end: "15.01.2020",
          number: "25",
          organisator: {
            name: "Ximena Ene",
            email: "ximena.ene@yahoo.com",
            phone: "0765558745"
          },
          skills: [" kindness"]
        }
      ]
    };
  }
};
</script>
