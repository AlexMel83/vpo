<script setup lang="ts"></script>

<template>
  <header
    class="w-full min-h-[60px] px-4 py-2 bg-white dark:bg-custom-black dark:text-custom-white sticky top-0 z-[1500] border-b dark:border-gray-700 border-custom-border"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div
        class="font-space-grotesk hover:text-custom-orange transition-colors scroll-mt-[80px] cursor-pointer text-start sm-md:max-w-[250px] flex flex-col text-sm md:text-base lg:text-lg"
      >
        <div class="font-bold truncate">
          {{ $t("header.title") }}
        </div>
        <div class="text-xs">
          {{ $t("header.subtitle1") }}
        </div>
        <div class="text-xs">
          {{ $t("header.subtitle2") }}
        </div>
      </div>
      <HeaderMenu />
      <HeaderButtons />
    </div>
  </header>
</template>
