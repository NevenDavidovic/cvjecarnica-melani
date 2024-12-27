<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            >
              <div class="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="size-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab
                      as="template"
                      v-for="category in navigation.categories"
                      :key="category.name"
                      v-slot="{ selected }"
                    >
                      <button
                        :class="[
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-900',
                          'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium',
                        ]"
                      >
                        {{ category.name }}
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel
                    v-for="category in navigation.categories"
                    :key="category.name"
                    class="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div class="space-y-4">
                      <div
                        v-for="(item, itemIdx) in category.featured"
                        :key="itemIdx"
                        class="group relative overflow-hidden rounded-md bg-gray-100"
                      >
                        <img
                          :src="item.imageSrc"
                          :alt="item.imageAlt"
                          class="aspect-square w-full object-cover group-hover:opacity-75"
                        />
                        <div class="absolute inset-0 flex flex-col justify-end">
                          <div class="bg-white/60 p-4 text-base sm:text-sm">
                            <a
                              :href="item.href"
                              class="font-medium text-gray-900"
                            >
                              <span
                                class="absolute inset-0"
                                aria-hidden="true"
                              />
                              {{ item.name }}
                            </a>
                            <p
                              aria-hidden="true"
                              class="mt-0.5 text-gray-700 sm:mt-1"
                            >
                              Shop now
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      v-for="(column, columnIdx) in category.sections"
                      :key="columnIdx"
                      class="space-y-10"
                    >
                      <div v-for="section in column" :key="section.name">
                        <p
                          :id="`${category.id}-${section.id}-heading-mobile`"
                          class="font-medium text-gray-900"
                        >
                          {{ section.name }}
                        </p>
                        <ul
                          role="list"
                          :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                          class="mt-6 flex flex-col space-y-6"
                        >
                          <li
                            v-for="item in section.items"
                            :key="item.name"
                            class="flow-root"
                          >
                            <a
                              :href="item.href"
                              class="-m-2 block p-2 text-gray-500"
                              >{{ item.name }}</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div
                  v-for="page in navigation.pages"
                  :key="page.name"
                  class="flow-root"
                >
                  <a
                    :href="page.href"
                    class="-m-2 block p-2 font-medium text-gray-900"
                    >{{ page.name }}</a
                  >
                </div>
              </div>

              <div class="border-t border-gray-200 px-4 py-6">
                <a href="#" class="-m-2 flex items-center p-2">
                  <img
                    src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                    alt=""
                    class="block h-auto w-5 shrink-0"
                  />
                  <span class="ml-3 block text-base font-medium text-gray-900"
                    >CAD</span
                  >
                  <span class="sr-only">, change currency</span>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <main class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <!-- Product -->
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <!-- Image gallery -->
          <TabGroup as="div" class="flex flex-col-reverse">
            <!-- Image selector -->
            <div
              class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
            >
              <TabList class="grid grid-cols-4 gap-6">
                <Tab
                  v-for="image in product.images"
                  :key="image.id"
                  class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4"
                  v-slot="{ selected }"
                >
                  <span class="sr-only">{{ image.name }}</span>
                  <span class="absolute inset-0 overflow-hidden rounded-md">
                    <img
                      :src="image.src"
                      alt=""
                      class="size-full object-cover"
                    />
                  </span>
                  <span
                    :class="[
                      selected ? 'ring-indigo-500' : 'ring-transparent',
                      'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                    ]"
                    aria-hidden="true"
                  />
                </Tab>
              </TabList>
            </div>

            <TabPanels>
              <TabPanel v-for="image in product.images" :key="image.id">
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="aspect-square w-full object-cover sm:rounded-lg"
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>

          <!-- Product info -->
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">
              {{ product.name }}
            </h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">
                {{ product.price }}
              </p>
            </div>

            <!-- Reviews -->
            <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      product.rating > rating
                        ? 'text-indigo-500'
                        : 'text-gray-300',
                      'size-5 shrink-0',
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>

              <div
                class="space-y-6 text-base text-gray-700"
                v-html="product.description"
              />
            </div>

            <form class="mt-6">
              <!-- Colors -->
              <div>
                <h3 class="text-sm text-gray-600">Color</h3>

                <fieldset aria-label="Choose a color" class="mt-2">
                  <RadioGroup
                    v-model="selectedColor"
                    class="flex items-center gap-x-3"
                  >
                    <RadioGroupOption
                      as="template"
                      v-for="color in product.colors"
                      :key="color.name"
                      :value="color"
                      :aria-label="color.name"
                      v-slot="{ active, checked }"
                    >
                      <div
                        :class="[
                          color.selectedColor,
                          active && checked ? 'ring ring-offset-1' : '',
                          !active && checked ? 'ring-2' : '',
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            color.bgColor,
                            'size-8 rounded-full border border-black/10',
                          ]"
                        />
                      </div>
                    </RadioGroupOption>
                  </RadioGroup>
                </fieldset>
              </div>

              <div class="mt-10 flex">
                <button
                  type="submit"
                  class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to bag
                </button>

                <button
                  type="button"
                  class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon class="size-6 shrink-0" aria-hidden="true" />
                  <span class="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">Additional details</h2>

              <div class="divide-y divide-gray-200 border-t">
                <Disclosure
                  as="div"
                  v-for="detail in product.details"
                  :key="detail.name"
                  v-slot="{ open }"
                >
                  <h3>
                    <DisclosureButton
                      class="group relative flex w-full items-center justify-between py-6 text-left"
                    >
                      <span
                        :class="[
                          open ? 'text-indigo-600' : 'text-gray-900',
                          'text-sm font-medium',
                        ]"
                        >{{ detail.name }}</span
                      >
                      <span class="ml-6 flex items-center">
                        <PlusIcon
                          v-if="!open"
                          class="block size-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <MinusIcon
                          v-else
                          class="block size-6 text-indigo-400 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel as="div" class="pb-6">
                    <ul
                      role="list"
                      class="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                    >
                      <li v-for="item in detail.items" :key="item" class="pl-2">
                        {{ item }}
                      </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { StarIcon } from "@heroicons/vue/20/solid";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Flats", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Heels", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
              { name: "Accessories", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Tops", href: "#" },
              { name: "Bottoms", href: "#" },
              { name: "Swimwear", href: "#" },
              { name: "Underwear", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Significant Other", href: "#" },
            ],
          },
        ],
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-category-01.jpg",
          imageAlt:
            "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Hoodies", href: "#" },
              { name: "Swimsuits", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

const open = ref(false);
const selectedColor = ref(product.colors[0]);
</script>
