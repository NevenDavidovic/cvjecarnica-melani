<template>
  <div class="container mx-auto px-4 pt-20">
    <div class="text-left pb-[50px] mb-0">
      <h2 class="font-jacques text-[28px] sm:text-[40px] mb-6 text-gray-900">
        {{ $t("showcase") }}
      </h2>
      <p class="font-jacques text-gray-600 mx-auto">
        {{ $t("showcase_description") }}
      </p>
    </div>

    <div class="space-b-[60px] flex flex-col gap-[50px]">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <h3 class="text-xl mb-4 font-jacques text-left text-gray-900">
            {{ $t("wedding_bouquets") }}
          </h3>
          <p class="text-gray-600 font-jacques text-left">
            {{ $t("showcase_description") }}
          </p>
        </div>
        <div class="md:w-1/2">
          <div class="rounded-xl overflow-hidden">
            <img
              src="../assets/images/vjencani_buketi.png"
              alt="Wedding bouquet with pink and blue flowers"
              class="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <div class="md:w-1/2">
          <h3 class="text-xl mb-4 font-jacques text-left text-gray-900">
            {{ $t("grave_wreaths") }}
          </h3>
          <p class="text-gray-600 font-jacques text-left">
            {{ $t("grobni_vijenci_desc") }}
          </p>
        </div>
        <div class="md:w-1/2">
          <div class="rounded-xl overflow-hidden">
            <img
              src="../assets/images/grobni_vijenci.png"
              alt="Red and white rose arrangement"
              class="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="md:w-1/2">
          <h3 class="text-xl mb-4 font-jacques text-left text-gray-900">
            {{ $t("special_occasion_flowers") }}
          </h3>
          <p class="text-gray-600 font-jacques text-left">
            {{ $t("special-ocassion-desc") }}
          </p>
        </div>
        <div class="md:w-1/2">
          <div class="rounded-xl overflow-hidden">
            <img
              src="../assets/images/prigodno_cvijece.png"
              alt="Purple candle arrangement"
              class="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <div class="md:w-1/2">
          <h3 class="text-xl mb-4 font-jacques text-left text-gray-900">
            {{ $t("custom_bouquets") }}
          </h3>
          <p class="text-gray-600 font-jacques text-left">
            {{ $t("custom_bouquets_desc") }}
          </p>
        </div>
        <div class="md:w-1/2">
          <div class="rounded-xl overflow-hidden">
            <img
              src="../assets/images/ostalo_cvijece.png"
              alt="Colorful mixed flower arrangement"
              class="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-16 space-y-4">
      <p class="text-gray-600 font-jacques">
        {{ $t("offer_intro") }}

        <a href="/ponuda" class="text-cyan-400 hover:text-cyan-500">{{
          $t("offer")
        }}</a
        >.
      </p>
      <p class="text-gray-600 font-jacques">
        {{ $t("services_") }}
      </p>
    </div>
  </div>
</template>
