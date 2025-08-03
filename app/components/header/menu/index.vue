<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { tr } from "@nuxt/ui/runtime/locale/index.js";
const { t } = useI18n();

// Reactive orientation based on screen size
const isMobile = ref(false);

const updateOrientation = () => {
  isMobile.value = window.innerWidth < 768; // Tailwind's 'md' breakpoint (768px)
};

onMounted(() => {
  updateOrientation();
  window.addEventListener("resize", updateOrientation);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateOrientation);
});

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: t("header.menu.home"),
      icon: "i-lucide-house",
      description: "Home page",
      children: [],
      to: "/",
    },
    {
      label: t("header.menu.about"),
      icon: "i-lucide-book-open",
      description: "About us",
      to: "/",
      children: [
        {
          label: t("header.menu.team"),
          icon: "i-lucide-users-round",
          description: "Our team",
          to: "/",
        },
        {
          label: t("header.menu.partners"),
          icon: "i-lucide-handshake",
          description: "Our partners",
          to: "/",
        },
        {
          label: t("header.menu.reporting"),
          icon: "i-lucide-briefcase-business",
          description: "Our reportings",
          to: "/",
        },
        {
          label: t("header.menu.contacts"),
          icon: "i-lucide-contact",
          description: "Our contacts",
          to: "/",
        },
      ],
    },
    {
      label: t("header.menu.news"),
      icon: "i-lucide-newspaper",
      to: "/",
      children: [],
    },
    {
      label: t("header.menu.resources"),
      icon: "i-lucide-box",
      to: "/",
      children: [
        {
          label: t("header.menu.housing"),
          icon: "i-lucide-school",
          description: "Define shortcuts for your application.",
          to: "/",
        },
        {
          label: t("header.menu.employment"),
          icon: "i-lucide-pickaxe",
          to: "/",
        },
        {
          label: t("header.menu.support"),
          icon: "i-lucide-file-text",
          description: "Display a toast within your application.",
          to: "/",
        },
      ],
    },
  ],
]);
</script>

<template>
  <UNavigationMenu
    highlight
    highlight-color="primary"
    :orientation="isMobile ? 'vertical' : 'horizontal'"
    arrow
    content-orientation="vertical"
    :items="items"
    class="w-full md:w-auto"
    :class="{
      'border-b border-default': !isMobile,
      'w-48': isMobile,
    }"
  />
</template>
