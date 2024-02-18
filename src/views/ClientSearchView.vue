<script setup lang="ts">

import Navigation from '@/components/Navigation.vue'
import ClientSearch from '@/components/ClientSearch.vue'
import { RouterName } from '@/consts/RouterNamespace'
import ClientNew from '@/components/ClientNew.vue'
</script>

<template>
  <div class="wrapper">
    <div class="secNavigation">
      <Navigation />
<!--      <?php include('components/Navigation.php') ?>-->
    </div>
    <div class="secView">
      <nav class="viewNavigation">
        <ul>
          <li>
            <RouterLink :to="{name: RouterName.CLIENT_SEARCH}" >
              Klienten
            </RouterLink>
          </li>
          <li>Startseite</li>
        </ul>
      </nav>
      <ClientSearch />
      <ClientNew />
<!--      <?php include('components/ViewClientSearch.php') ?>-->
<!--      <?php include('components/ViewClientNew.php') ?>-->
    </div>
  </div>
<!--  <?php include('components/master/scripts.php') ?>-->
</template>
