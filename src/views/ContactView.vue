<template>
  <div class="w-full">
    <!-- Hero Banner -->
    <div class="relative h-48 bg-gray-900">
      <img
        src="../assets/images/telefon-banner.jpg"
        alt="Vintage phone background"
        class="w-full h-full object-cover opacity-40"
      />
      <h1
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-semibold"
      >
        KONTAKTIRAJTE NAS
      </h1>
    </div>

    <!-- Contact Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-semibold mb-6">Informacije o kontaktu</h2>
          <p class="text-gray-600 mb-8">
            Pitanja su dobrodošla, tu smo da Vam pomognemo. Kontaktirajte nas!
          </p>

          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="font-medium">Ulica Mladena Vodanovića 4b</p>
                <p class="text-gray-600">21400 Supetar</p>
              </div>
            </div>

            <div class="flex items-center">
              <div
                class="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p class="font-medium">021/630 996</p>
            </div>

            <div class="flex items-center">
              <div
                class="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p class="font-medium">cvjecarnica.melani@gmail.com</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <input
                type="text"
                v-model="formData.name"
                placeholder="Prezime*"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <input
                type="email"
                v-model="formData.email"
                placeholder="Email*"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <input
                type="tel"
                v-model="formData.phone"
                placeholder="Telefonski broj*"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <textarea
                v-model="formData.message"
                placeholder="Tvoja poruka..."
                rows="4"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log("Form submitted:", this.formData);
      // Reset form
      this.formData = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>
