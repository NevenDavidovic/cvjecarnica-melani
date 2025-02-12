<template>
  <div class="relative" v-click-outside="closeDropdown">
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 px-4 py-2 bg-transparent rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
    >
      <img
        class="rounded-[4px] h-[20px]"
        v-if="currentFlag"
        :src="currentFlag.src"
        :srcset="currentFlag.srcset"
        width="30"
        alt="Flag"
      />
    </button>

    <div
      v-show="isOpen"
      class="absolute left-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <div
          v-for="lang in languages"
          :key="lang.value"
          @click="changeLanguage(lang.value)"
          class="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <img
            class="h-[20px] rounded-[4px]"
            :src="lang.src"
            :srcset="lang.srcset"
            width="30"
            alt="Flag"
          />
          <span>{{ $t(lang.labelKey) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadLocaleMessages } from "../i18n";

export default {
  name: "LanguageSwitcher",

  directives: {
    "click-outside": {
      bind(el, binding) {
        el.clickOutsideEvent = function (event) {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el) {
        document.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },

  data() {
    return {
      isOpen: false,
      languages: [
        {
          value: "en",
          labelKey: "english",
          src: "https://flagcdn.com/w40/us.png",
          srcset: "https://flagcdn.com/w80/us.png 2x",
        },
        {
          value: "hr",
          labelKey: "croatian",
          src: "https://flagcdn.com/w40/hr.png",
          srcset: "https://flagcdn.com/w80/hr.png 2x",
        },
      ],
    };
  },

  computed: {
    currentFlag() {
      return this.languages.find((l) => l.value === this.$i18n.locale);
    },
  },

  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    async changeLanguage(lang) {
      if (!this.$i18n.availableLocales.includes(lang)) {
        const messages = await loadLocaleMessages(lang);
        this.$i18n.setLocaleMessage(lang, messages);
      }

      this.$i18n.locale = lang;
      this.closeDropdown();
    },
  },
};
</script>
