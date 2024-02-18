<script setup lang="ts">

import Navigation from '@/components/Navigation.vue'
import ToDoManagement from '@/components/ToDoManagement.vue'
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
          <li><a href="#">Meine Aufgaben</a></li>
          <li>Petra Müller (Koordination)</li>
        </ul>
      </nav>
<!--       <?php include('components/ViewToDoManagement.php') ?> -->
      <ToDoManagement />
    </div>
  </div>
<!--  <?php include('components/master/scripts.php') ?>-->
</template>
