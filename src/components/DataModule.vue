<script setup lang="ts">
const { consultant = "Müller, Petra", isActive = true } = defineProps<{
  consultant?: string,
  isActive?: boolean
}>()
</script>

<template>
  <section class="dataModule">
    <div class="dataModulePropertiesBlockPrimary">
      <ul>
        <li><i class="fa-solid fa-square-user"></i>
          <a href="homeClientView.php"> Schumacher, Marco (14.04.1982) </a>
            <i class="fa-solid fa-grid-round-2"></i>
            <a href="homeClientViewModule.php"> Sicherung U2.1 </a>
        </li>
        <li v-if="isActive" class="statusActive"><i class="fa-solid fa-shield-check"></i> aktiv</li>
        <li v-else class="statusNotActive"><i class="fa-solid fa-shield-xmark"></i> abgeschlossen</li>
        <li><i class="fa-solid fa-briefcase"></i> <a href="#"> SuperVision Optik</a></li>
      </ul>
    </div>
    <div class="dataModulePropertiesBlockSecondary">
      <ul>
        <li>
          <h3>Eintritt</h3>
          04.05.2023
        </li>
        <li>
          <h3>Austritt</h3>
          03.11.2023
        </li>
        <li>
          <h3>Genehmigungszeitraum</h3>
          04.05.2023 - 03.11.2023
        </li>
        <li>
          <h3>Zwischenbericht</h3>
          —
        </li>
        <li>
          <h3>Abschlussbericht</h3>
          10.11.2023
        </li>
        <li>
          <h3>Kostenträger</h3>
          INA Mfr
        </li>
        <li>
          <h3>Bewilligung</h3>
          Genehmigt
        </li>
        <li>
          <h3>Integrationsberater</h3>
          {{ consultant }}
        </li>
      </ul>
    </div>
  </section>
</template>
