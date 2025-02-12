<template>
  <div class="min-h-screen">
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <HeroBanner
      :title="t('contact_us')"
      imageSrc="telefon-banner.jpg"
      imageAlt="Kontaktirajte nas"
    />

    <div class="relative isolate bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div
          class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
        >
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"
            >
              <svg
                class="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="white"
                />
                <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>

            <p class="mt-6 text-lg/8 text-gray-600 text-left">
              {{ t("contact_us_description") }}
            </p>
            <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Adresa:</span>
                  <BuildingOffice2Icon
                    class="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>Ulica Mladena Vodanovića 4b, 21400 Supetar</dd>
              </div>
              <div class="flex gap-x-4">
                <h2 class="font-semibold">{{ t("funeral_services") }}</h2>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Telefon: </span>
                  <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a class="hover:text-gray-900" href="tel:+385921992352"
                    >+385 92 199 2352</a
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Telefon: </span>
                  <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a class="hover:text-gray-900" href="tel:+385916309966"
                    >+385 91 630 9966</a
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <h2 class="font-semibold">{{ t("flower_shop") }}</h2>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">{{ t("phone") }}: </span>
                  <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>

                <dd>
                  <a class="hover:text-gray-900" href="tel:+385916309966"
                    >+385 91 630 9966</a
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">{{ t("phone") }} </span>
                  <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a class="hover:text-gray-900" href="tel:+38521630996"
                    >+385 21 630 996</a
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Email</span>
                  <EnvelopeIcon
                    class="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    class="hover:text-gray-900"
                    href="mailto:cvjecarnica.melani@gmail.com"
                    >cvjecarnica.melani@gmail.com</a
                  >
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 flex justify-center items-center"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.2875528419668!2d16.553138907725334!3d43.384342243293425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a9d99d50e35ed%3A0x2246168c3093d0ac!2sMELANI%20OBRT%20ZA%20POGREBNE%20USLUGE%20I%20CVJE%C4%86ARNICA!5e0!3m2!1sen!2shr!4v1737835860177!5m2!1sen!2shr"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import FooterComponent from "../components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroBanner from "@/components/HeroBanner.vue";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "HomeView",
  components: {
    FooterComponent,
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
    NavbarComponent,
    HeroBanner,
  },
  data() {
    return {
      isSectionVisible: false,

      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      owlOptions: {
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 1000,
        navText: [
          '<i class="custom-prev-icon">←</i>',
          '<i class="custom-next-icon">→</i>',
        ],
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 5 },
        },
      },
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },

  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  beforeUnmount() {
    document.body.style.overflow = "auto";
  },
  methods: {
    initIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          this.isSectionVisible = entry.isIntersecting;
        });
      });

      observer.observe(this.$refs.section1);
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "auto";
    },
    toggleSubmenuPonuda() {
      this.submenuPonuda = !this.submenuPonuda;
    },

    redirectToContact() {
      this.$router.push("/contact-melani");
    },
  },
};
</script>
