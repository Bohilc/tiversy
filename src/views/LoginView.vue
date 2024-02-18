<script setup lang="ts">
import { useRouter } from 'vue-router'
import { RouterName } from '@/consts/RouterNamespace'

const router = useRouter()
function goToHomePage() {
//   homeTodo.php
  router.push({
    name: RouterName.HOME
  })
}
</script>

<template>
  <div class="viewLogin">
    <div class="viewLoginForm">
      <div>
        <img src="@/assets/img/logo-tiversy.svg" alt="Tiversy Logo">
        <div class="form-group">
          <label class="form-label" for="">Benutzername</label>
          <input class="form-input" type="text" placeholder="Name">
          <label class="form-label" for="">Passwort</label>
          <input class="form-input" type="password" placeholder="Passwort">
          <button class="btn" @click="goToHomePage">Einloggen</button>
        </div>
      </div>
    </div>
  </div>
</template>
