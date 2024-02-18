<script setup lang="ts">

import DataModule from '@/components/DataModule.vue'
</script>

<template>
  <section class="viewClientProperties">
    <h2 class="sectionTitle">Meine Aufgaben</h2>

    <div class="dataClientCaseManagement">

      <div class="tabs">
        <input class="radiotab" name="tabsMonitor" tabindex="1" type="radio" id="tabsMonitorActivities" checked="checked">
        <label class="label" for="tabsMonitorActivities">
          <div>Aktivitäten</div>
        </label>
        <div class="panel" tabindex="1">

          <div class="componentCollapsible"> <input id="collapsibleActive" class="toggle" type="checkbox"> <label for="collapsibleActive" class="lbl-toggle" tabindex="0">Bewilligte Aktivitäten (13)</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <DataModule />
                <DataModule />
                <DataModule />
              </div>
            </div>
          </div>
          <div class="componentCollapsible"> <input id="collapsibleNew" class="toggle" type="checkbox"> <label for="collapsibleNew" class="lbl-toggle" tabindex="0">Beauftragungen (3)</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <DataModule />
                <DataModule />
                <DataModule />
              </div>
            </div>
          </div>
          <div class="componentCollapsible"> <input id="collapsibleOverdue" class="toggle" type="checkbox"> <label for="collapsibleOverdue" class="lbl-toggle" tabindex="0">Überfällig (1)</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <DataModule />
                <DataModule />
                <DataModule />
              </div>
            </div>
          </div>
          <div class="componentCollapsible"> <input id="collapsibleSoon" class="toggle" type="checkbox"> <label for="collapsibleSoon" class="lbl-toggle" tabindex="0">Bald fällig (3)</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <DataModule />
                <DataModule />
                <DataModule />
              </div>
            </div>
          </div>
        </div>
        <input class="radiotab" tabindex="1" name="tabsMonitor" type="radio" id="tabsMonitorContacts">
        <label class="label" for="tabsMonitorContacts">
          <div>Kontaktvermerke</div>
        </label>
        <div class="panel" tabindex="1">
        </div>
      </div>
    </div>
  </section>
</template>
