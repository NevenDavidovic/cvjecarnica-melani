<template>
  <section class="bg-white pb-6">
    <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div class="container mx-auto sm:px-6 sm:p-6 bg-white">
        <div class="mb-16 text-center">
          <h4
            class="text-base text-primary font-semibold tracking-wide uppercase"
          >
            {{ $t("usluge") }}
          </h4>
          <p
            class="mt-2 text-5xl lg:text-4xl font-normal tracking-tight text-gray-900"
          >
            {{ $t("full_service_range") }}
          </p>
        </div>

        <div class="flex flex-wrap my-12">
          <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl text-gray-900">
                {{ $t("transport_service") }}
              </div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t("international_transport") }}
            </p>
          </div>

          <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl">{{ $t("arrangements") }}</div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t("arrangements_description") }}
            </p>
          </div>

          <div
            class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8"
          >
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl">{{ $t("coffins_offer") }}</div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t("coffins_description") }}
            </p>
          </div>

          <div
            class="w-full border-b md:w-1/2 lg:w-1/3 border-b md:w-1/2 md:border-r lg:w-1/3 p-8"
          >
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl">{{ $t("wreath_making") }}</div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t("wreath_making_description") }}
            </p>
          </div>

          <div
            class="w-full border-b md:w-1/2 border-b md:w-1/2 md:border-r lg:w-1/3 p-8"
          >
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl">{{ $t("funeral_equipment") }}</div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t("funeral_equipment_description") }}
            </p>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3 p-8 border-b md:w-1/2 lg:w-1/3">
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl">{{ $t("bouquet_making") }}</div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t("bouquet_making_description") }}
            </p>
          </div>

          <div
            class="w-full md:w-1/2 lg:w-1/3 p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0"
          >
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl">{{ $t("coffin_flowers") }}</div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t("coffin_flowers_description") }}
            </p>
          </div>

          <div
            class="w-full md:w-1/2 lg:w-1/3 p-8 w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0"
          >
            <div class="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6 text-primary"
              >
                <path
                  d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
                ></path>
              </svg>
              <div class="ml-4 text-xl">{{ $t("cremation") }}</div>
            </div>
            <p class="leading-loose text-gray-500 text-left">
              {{ $t("cremation_description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
