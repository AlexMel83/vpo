<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const { t } = useI18n();

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: t("header.menu.home"),
      icon: "i-lucide-house",
      description: "Home page",
      // active: true,
      children: [],
    },
    {
      label: t("header.menu.about"),
      icon: "i-lucide-book-open",
      description: "About us",
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
      // target: "_blank",
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
          description: "Display a modal/slideover within your application.",
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
    color="primary"
    highlight-color="primary"
    orientation="horizontal"
    arrow
    content-orientation="vertical"
    :items="items"
    class="data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
  />
</template>
