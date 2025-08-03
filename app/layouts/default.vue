<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

// Синхронізуємо локаль із localStorage на клієнті
if (process.client) {
  const savedLocale = localStorage.getItem("nuxt-i18n-preferred-locale");
  if (savedLocale && (savedLocale === "uk" || savedLocale === "en")) {
    locale.value = savedLocale as "uk" | "en";
  }
}

useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header class="flex-shrink-0" />
    <NuxtPage class="flex-grow" />
    <Footer class="flex-shrink-0" />
  </div>
</template>
