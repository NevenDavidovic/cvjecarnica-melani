import { createI18n } from "vue-i18n";
import { watch } from "vue";

// Static imports for initial translations
import enMessages from "@/locales/en.json";
import hrMessages from "@/locales/hr.json";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "hr",
  fallbackLocale: "hr",
  messages: {
    en: enMessages,
    hr: hrMessages,
  },
  missing: (locale, key) => {
    console.warn(`Missing translation: ${key} in ${locale}`);
    return key;
  },
});

// Dynamic loading for additional languages
async function loadLocaleMessages(locale) {
  try {
    const messages = await import(`@/locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Error loading ${locale} translations:`, error);
    return {};
  }
}

watch(
  () => i18n.global.locale.value,
  async (newLocale) => {
    localStorage.setItem("lang", newLocale);

    if (!i18n.global.availableLocales.includes(newLocale)) {
      const messages = await loadLocaleMessages(newLocale);
      i18n.global.setLocaleMessage(newLocale, messages);
    }
  }
);

export default i18n;
