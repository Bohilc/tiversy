<script setup lang="ts">
import DataModuleEmpty from '@/components/DataModuleEmpty.vue'
import { computed, onBeforeMount, reactive, ref } from 'vue'
import DataModule from '@/components/DataModule.vue'

type Item = {
  consultant: string,
  isActive: boolean
}

onBeforeMount(() => {
  filteredItems.value = items
})

const items = reactive<Item[]>([
  {
    consultant: "Müller, Petra",
    isActive: true
  },
  {
    consultant: "Müller, Petra",
    isActive: true
  },
  {
    consultant: "Müller, Georg",
    isActive: true
  },
  {
    consultant: "Müller, Bob",
    isActive: false
  }
])


const options = reactive<{name: string, value: string}[]>([
  {
    name: "Bitte wählen...",
    value: ""
  },
  {
    name: "Mustermann, Petra",
    value: "Petra"
  },
  {
    name: "Mustermann, Georg",
    value: "Georg"
  },
  {
    name: "Mustermann, Albert",
    value: "Albert"
  }
])

const selectedOption = ref<{name: string, value: string}>(options[0])

const filteredItems = ref<Item[]>([])

const activityStatus = ref<undefined | boolean>(undefined)

function filterItems() {
  filteredItems.value = items
    .filter((item: Item) => {
      if (0 === selectedOption.value.value.length) {
        return true
      }
      return selectedOption.value.value.length > 0 && item.consultant.includes(selectedOption.value.value)
    })
    .filter((item: Item) => {
      if (undefined === activityStatus.value) {
        return true
      }
      return activityStatus.value === item.isActive
    })
}

function resetFilters() {
  selectedOption.value = options[0]
  activityStatus.value = undefined
}
</script>

<template>
  <section class="viewClientProperties">
    <h2 class="sectionTitle"><i class="fa-solid fa-magnifying-glass"></i> Suche</h2>

    <div class="form">
      <h3 class="subSectionTitle">Allgemeiner Suchfilter</h3>
      <div class="variogrid" style="--passVarioGrid: 1fr 2fr 2fr 1fr">
        <div class="form-group">
          <label class="form-label" for="clientCounselor">Integrationsberater</label>
          <select v-model="selectedOption" class="form-select" id="clientCounselor" name="clientCounselor" required>
            <template v-for="(option, index) in options" :key="index">
              <option v-if="index === 0" :value="option" disabled selected>{{option.name}}</option>
              <option v-else :value="option">{{option.name}}</option>
            </template>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="clientSurname">Nachname (Klient)</label>
          <input class="form-input" type="clientSurname" name="clientSurname" id="clientSurname" value="" />
        </div>
        <div class="form-group">
          <label class="form-label" for="clientName">Vorname (Klient)</label>
          <input class="form-input" type="clientName" name="clientName" id="clientName" value="" />
        </div>
        <div class="form-group">
          <label class="form-label" for="clientBirthday">Geburtsdatum</label>
          <input class="form-input" type="date" id="clientBirthday" name="clientBirthday">
        </div>
      </div>
      <div class="variogrid" style="--passVarioGrid: 2fr 2fr 1fr 1fr">
        <div class="form-group">
          <label class="form-label" for="clientModule">Maßnahme oder Modul</label>
          <select class="form-select" id="clientModule" name="clientModule" required>
            <option value="" disabled selected>Bitte wählen...</option>
            <option value="EK">EK</option>
            <option value="QB">QB</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="clientTiversyStatus">Aktivitätsstatus</label>
          <select v-model="activityStatus" class="form-select" id="clientTiversyStatus" name="clientTiversyStatus" required>
            <option :value="undefined" disabled selected>Bitte wählen...</option>
            <option :value="true">Aktiv</option>
            <option :value="false">Abgeschlossen</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="clientBirthday">Zeitraum von</label>
          <input class="form-input" type="date" id="clientBirthday" name="clientBirthday">
        </div>
        <div class="form-group">
          <label class="form-label" for="clientBirthday">Zeitraum bis</label>
          <input class="form-input" type="date" id="clientBirthday" name="clientBirthday">
        </div>
      </div>

      <h3 class="subSectionTitle">Tiversy Status</h3>
      <div class="form-group">
        <label class="form-radio form-inline">
          <input type="radio" name="radio" checked=""><i class="form-icon"></i> Alle meine Fälle (305)
        </label>
        <label class="form-radio form-inline">
          <input type="radio" name="radio"><i class="form-icon"></i> In Bearbeitung (0)
        </label>
        <label class="form-radio form-inline">
          <input type="radio" name="radio"><i class="form-icon"></i> Zur Übearbeitung (0)
        </label>
        <label class="form-radio form-inline">
          <input type="radio" name="radio"><i class="form-icon"></i> Beantragt durch IFD (0)
        </label>
        <label class="form-radio form-inline">
          <input type="radio" name="radio"><i class="form-icon"></i> Beauftragt von INA (0)
        </label>
        <label class="form-radio form-inline">
          <input type="radio" name="radio"><i class="form-icon"></i> Abgelehnt von INA (0)
        </label>
        <label class="form-radio form-inline">
          <input type="radio" name="radio"><i class="form-icon"></i> Genehmigt von INA (0)
        </label>
      </div>
    </div>

    <button @click="filterItems()" class="btn">Suchen</button> <button @click="resetFilters" class="btn">Zur
    ücksetzen</button>

    <h2 class="sectionTitle">Suchergebnisse</h2>
    <DataModuleEmpty v-if="0 === filteredItems.length" />
    <DataModule v-else v-for="item in filteredItems" :key="item" :consultant="item.consultant" :is-active="item.isActive" />
  </section>
</template>
