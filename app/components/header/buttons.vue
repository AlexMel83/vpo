<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";

const { locale, locales, setLocale } = useI18n();

// Типізуємо locales як масив об’єктів із code типу 'uk' | 'en'
const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (i) => i.code !== locale.value
  ) as Array<LocaleObject & { code: "uk" | "en" }>;
});

// Типізуємо параметр code як 'uk' | 'en'
const switchLanguage = (code: "uk" | "en") => {
  setLocale(code);
  if (process.client) {
    localStorage.setItem("nuxt-i18n-preferred-locale", code);
  }
};
</script>

<template>
  <div class="flex items-center gap-2">
    <UBadge
      :label="locale.toUpperCase()"
      color="primary"
      variant="solid"
      size="sm"
    />
    <div class="flex gap-1">
      <UButton
        v-for="loc in availableLocales"
        :key="loc.code"
        :label="loc.code.toUpperCase()"
        variant="ghost"
        size="sm"
        @click="switchLanguage(loc.code)"
        :title="$t('header.ui.switch_language')"
      />
    </div>
  </div>
</template>
