<script setup lang="ts">
import { RouterName } from '@/consts/RouterNamespace'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'

const route = useRoute()

const currentDate = ref("");
const time = ref("");

onBeforeMount(() => {
  setInterval(() => {
    getDate();
  }, 1000);
})

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours =
    date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  currentDate.value = `${day}.${month}.${year}`;
  time.value = `${hours}:${minutes}`;
};
</script>

<template>
  <nav class="mainNavigation">
    <h1>
      <img src="@/assets/img/logo-tiversy.svg" alt="Tiversy Logo" class="mediaLogotype">
    </h1>
    <ul>
      <li>
        <RouterLink :to="{name: RouterName.HOME}" :class="{'current': RouterName.HOME === route.name}">
          <i class="fa-solid fa-fw fa-shield-check"></i> Meine Aufgaben
        </RouterLink>
      </li>
    </ul>

    <ul>
      <h2>IFD Mittelfranken</h2>
      <li>
        <RouterLink :to="{name: RouterName.CLIENT_SEARCH}" :class="{'current': RouterName.CLIENT_SEARCH === route.name}">
          <i class="fa-solid fa-fw fa-person"></i> Klienten
        </RouterLink>
      </li>
      <li><a href="#"><i class="fa-solid fa-fw fa-table-list"></i> Abrechnungslisten</a></li>
      <li><a href="#"><i class="fa-solid fa-fw fa-chart-pie"></i> Auswertung</a></li>
    </ul>

    <ul>
      <h2>Darstellung</h2>
      <li><a href="#">Hoher Kontrast</a></li>
      <li><a href="#">Farben invertieren</a></li>
    </ul>

    <ul>
      <h2>Petra Müller</h2>
      <li>Koordinator:in</li>
      <li>
        {{currentDate}} • {{time}}
      </li>
      <li>Einrichtung<br><strong>Integrationsfachdienst Mittelfranken</strong></li>
      <button class="btn">Abmelden</button>
    </ul>
  </nav>
</template>
