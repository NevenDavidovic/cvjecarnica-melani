<template>
  <div
    class="grid min-h-[500px] grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1"
  >
    <div class="relative flex">
      <img
        src="../assets/images/cvjecarna-cat.jpg"
        alt=""
        class="absolute inset-0 size-full object-cover"
      />
      <div
        class="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12"
      >
        <h2 class="text-lg font-medium text-white/75">
          {{ $t("flower_shop") }}
        </h2>
        <p class="mt-1 text-2xl font-medium text-white">
          {{ $t("flowers_for_all_occasions") }}
        </p>
        <a
          href="/cvjecarnica-melani"
          class="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >{{ $t("view_more") }}</a
        >
      </div>
    </div>
    <div class="relative flex">
      <img
        src="../assets/images/pogrebno-poduzece-cat.jpg"
        alt=""
        class="absolute inset-0 size-full object-cover"
      />
      <div
        class="relative flex w-full flex-col items-start justify-end bg-black/40 p-8 sm:p-12"
      >
        <h2 class="text-lg font-medium text-white/75">
          {{ $t("funeral_services") }}
        </h2>
        <p class="mt-1 text-2xl font-medium text-white">
          {{ $t("funeral_services_description") }}
        </p>
        <a
          href="/pogrebne-usluge"
          class="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >{{ $t("view_more") }}</a
        >
      </div>
    </div>
  </div>
</template>
