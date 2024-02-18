<script setup lang="ts">

</script>

<template>
  <section class="viewClientProperties">
    <h2 class="sectionTitle"><i class="fa-solid fa-circle-question"></i> Klient nicht gefunden?</h2>

    <div class="form">
      <h3 class="subSectionTitle">Neuen Klient anlegen</h3>
      <div class="variogrid" style="--passVarioGrid:  2fr 2fr 1fr">
        <div class="form-group">
          <label class="form-label" for="clientSurname">Nachname</label>
          <input class="form-input" type="clientSurname" name="clientSurname" id="clientSurname" value="" />
        </div>
        <div class="form-group">
          <label class="form-label" for="clientName">Vorname</label>
          <input class="form-input" type="clientName" name="clientName" id="clientName" value="" />
        </div>
        <div class="form-group">
          <label class="form-label" for="clientBirthday">Geburtsdatum</label>
          <input class="form-input" type="date" id="clientBirthday" name="clientBirthday">
        </div>
      </div>
    </div>

    <button class="btn">Klient und Erstkontakt anlegen</button>

  </section>
</template>
