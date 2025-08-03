<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const { t, locale } = useI18n();

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

// Base items without locale prefix
const baseItems: NavigationMenuItem[][] = [
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
      to: "/about",
      children: [
        {
          label: t("header.menu.team"),
          icon: "i-lucide-users-round",
          description: "Our team",
          to: "/terms",
        },
        {
          label: t("header.menu.partners"),
          icon: "i-lucide-handshake",
          description: "Our partners",
          to: "/terms",
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
          to: "/terms",
        },
      ],
    },
    {
      label: t("header.menu.news"),
      icon: "i-lucide-newspaper",
      to: "/news",
      children: [],
    },
    {
      label: t("header.menu.resources"),
      icon: "i-lucide-box",
      to: "/resources",
      children: [
        {
          label: t("header.menu.housing"),
          icon: "i-lucide-school",
          description: "Define shortcuts for your application.",
          to: "/terms",
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
          to: "/terms",
        },
      ],
    },
  ],
];

// Computed property to add locale prefix to links
const items = computed<NavigationMenuItem[][]>(() => {
  const prefix = locale.value === "en" ? "/en" : ""; // Add /en prefix for English, empty for default locale

  const addPrefix = (item: NavigationMenuItem): NavigationMenuItem => ({
    ...item,
    to: item.to ? `${prefix}${item.to}` : undefined,
    children: item.children?.map(addPrefix),
  });

  return baseItems.map((group) => group.map(addPrefix));
});
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
