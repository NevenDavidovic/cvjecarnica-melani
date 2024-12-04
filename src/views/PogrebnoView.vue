<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <div
      :class="{ hidden: !isMobileMenuOpen }"
      class="fixed inset-0 bg-[#353638]/80 backdrop-blur-md z-40 h-screen w-screen"
    ></div>
    <nav
      :class="{ gray: isSectionVisible }"
      class="py-[8px] navigation fixed w-full bg-[#353638d4] transition-all duration-500 ease-in-out backdrop-blur-sm z-50 shadow-sm"
    >
      <div class="container mx-auto px-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            src="../assets/images/logo_melani.png"
            alt="Logo"
            :class="{ resize: !isSectionVisible }"
            class="h-24 w-24 transition-all duration-1000 ease-in-out"
          />
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden lg:flex space-x-8 text-gray-700 items-center">
          <RouterLink to="/" class="font-jacques uppercase text-white">
            Naslovnica
          </RouterLink>
          <RouterLink to="/ponuda" class="font-jacques uppercase text-white">
            Ponuda
          </RouterLink>
          <RouterLink
            to="/cvjecarnica-melani"
            class="font-jacques uppercase text-primary"
          >
            Cvjećarnica
          </RouterLink>
          <RouterLink
            to="/pogrebne-usluge"
            class="font-jacques uppercase text-[#FBCA00]"
          >
            Pogrebne Usluge
          </RouterLink>

          <button
            @click="redirectToContact"
            class="font-jacques uppercase w-[200px] px-4 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-500 ml-[60px]"
          >
            Kontakt
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="lg:hidden p-2">
          <svg
            width="43"
            height="18"
            viewBox="0 0 43 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="43" height="6" rx="3" fill="white" />
            <rect y="11" width="43" height="6" rx="3" fill="white" />
            <rect y="22" width="43" height="6" rx="3" fill="white" />
          </svg>
        </button>
      </div>

      <!-- Blurred Overlay -->
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-40 backdrop-blur-md bg-black/30"
        @click="toggleMobileMenu"
      ></div>

      <!-- Mobile Menu -->
      <div
        :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
        class="fixed top-0 right-0 h-full w-full bg-[#353638]/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-50"
      >
        <!-- Mobile Menu Header -->
        <div
          class="nav-background-mobile flex h-[137px] justify-between items-center p-6 border-b border-gray-700/50"
        >
          <span class="text-white font-jacques text-xl"
            ><svg
              class="w-[200px]"
              viewBox="0 0 600 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M186.005 3.32574C174.381 16.2782 168.403 35.8728 168.901 58.9547C169.399 75.8924 169.233 76.0585 163.753 83.8632C148.31 105.617 118.087 129.529 98.3266 135.673C61.296 146.965 24.9295 135.673 11.9771 108.772C0.18706 84.5274 7.32751 57.4602 28.2507 46.5004C38.8783 41.0206 56.6464 40.3563 70.7612 45.0059C83.0494 49.1573 103.142 61.2795 115.597 72.0731C121.242 77.0548 126.058 81.0402 126.556 81.0402C127.885 81.0402 145.985 71.0768 149.472 68.4199C154.288 64.9327 151.631 63.7703 145.653 66.7593C137.018 71.2429 133.365 70.0805 116.925 57.6262C91.1862 38.0316 79.5622 33.7141 55.9822 34.8765C43.5279 35.3747 39.5425 36.371 30.4094 40.8545C18.4533 46.8326 9.98441 55.3014 4.00637 67.5896C-1.30745 78.2172 -1.30745 101.465 3.84031 112.923C8.82201 123.717 15.2982 131.687 25.0956 138.33C35.8893 145.802 45.5206 149.123 60.4657 150.286C80.2264 151.946 98.8248 145.636 121.409 129.861C131.704 122.72 163.421 91.3357 166.908 84.6934C167.904 82.7008 169.399 81.0402 170.229 81.0402C171.724 81.0402 175.875 100.137 178.864 120.23C180.359 130.359 180.359 135.673 179.03 140.987C178.034 144.972 177.536 148.459 177.868 148.791C178.532 149.622 188.662 138.496 190.986 134.344C191.817 132.85 192.854 129.819 194.681 128.158C195.926 126.29 195.303 126.913 195.926 126.29C195.096 126.124 197.629 124.547 199.455 122.886C201.282 121.392 205.433 116.742 208.588 112.591C215.729 103.458 218.884 99.4725 221.043 96.9816C222.039 95.9853 225.36 91.8339 228.515 87.6825C231.67 83.531 234.659 79.8778 235.157 79.3796C235.656 78.8815 237.814 76.0585 239.973 73.0695C241.966 70.0805 244.291 68.0878 244.955 68.4199C245.619 68.9181 243.46 82.8668 239.973 99.6385C236.652 116.41 233.331 135.175 232.667 141.319C231.504 152.278 231.504 152.611 234.493 150.784C236.32 149.788 242.962 146.965 249.272 144.474C255.748 141.983 261.062 139.326 260.896 138.33C260.896 137.499 259.734 137.001 258.405 137.333C257.077 137.665 254.088 138.164 251.763 138.164C248.11 138.33 247.612 137.499 247.114 131.687C246.781 128.034 249.604 109.768 253.424 91.3357C260.896 53.973 266.376 39.8582 278 28.2342C285.805 20.4296 297.761 16.4442 304.403 19.4332C308.056 21.0938 310.713 22.9616 309.882 27.279C309.218 30.7662 309.177 32.1366 310.505 32.2607C311.833 32.3849 312.166 32.012 313.619 29.7699C315.071 27.5278 315.487 23.6898 315.487 22.2973C315.487 21.0519 315.321 22.2143 315.487 21.0519C315.653 20.0556 315.944 18.229 316.11 16.0702C316.732 11.7112 316.11 14.8248 316.732 12.334C317.034 11.1257 316.732 12.9567 317.355 7.97498C317.554 3.98997 317.023 2.99364 311.544 3.98997C302.577 5.65054 290.288 12.4588 281.155 20.9277C272.852 28.7324 254.918 50.1537 216.891 97.6458C192.481 128.034 190.654 129.861 191.152 122.222C191.484 118.403 187.831 100.303 182.683 79.7117C179.694 67.7557 179.694 67.2575 182.683 62.2758C198.459 34.8765 205.101 13.6213 200.119 4.98631C196.964 -0.991714 190.488 -1.65594 186.005 3.32574ZM191.983 12.1267C195.304 16.1121 192.979 30.7251 187.001 45.172C179.694 62.4419 177.038 61.7776 177.038 42.349C177.204 19.2672 184.842 3.65785 191.983 12.1267Z"
                fill="white"
              />
              <path
                d="M389.757 10.9641C376.306 16.9421 376.14 17.1082 381.952 17.6064C386.436 17.9385 387.93 18.9348 387.93 21.0936C387.93 24.7468 384.775 34.212 379.959 44.6736C368.834 69.0839 347.911 122.388 345.42 132.85C342.929 143.145 344.423 150.784 348.907 150.784C353.224 150.784 361.859 146.632 367.339 141.983C370.328 139.492 372.985 137.499 373.483 137.499C373.981 137.499 374.646 140.322 374.978 143.643C375.476 149.123 376.14 149.953 380.126 150.452C387.764 151.282 401.879 142.979 417.156 128.698C424.795 121.558 431.105 116.078 431.105 116.576C431.105 117.24 429.278 122.222 426.954 128.034C424.629 133.68 422.304 141.152 421.64 144.474L420.643 150.784L427.784 148.293C438.245 144.64 449.371 138.828 449.371 137.001C449.371 136.171 448.209 136.005 446.714 136.503C439.408 139.326 436.087 139.492 436.087 137.167C436.087 133.182 441.899 116.908 445.552 110.432C446.05 109.602 443.725 109.602 440.57 110.1L434.758 111.262L439.574 101.631C444.223 92.4979 445.386 85.6895 443.393 80.3757C442.065 77.0546 439.408 76.8885 439.408 80.2097C439.408 90.1731 426.123 114.251 413.005 128.2C402.377 139.326 395.901 143.145 390.255 141.817C386.602 140.82 386.27 139.824 386.27 132.019C386.27 120.561 392.414 108.273 403.54 96.6493C420.311 79.3794 437.249 72.239 460.497 72.405C472.951 72.5711 473.948 72.239 474.944 68.9178C476.605 62.6077 476.106 62.2756 465.313 63.2719C431.935 66.427 393.908 92.4979 379.627 122.056C375.144 131.023 372.321 134.842 367.837 137.333C364.516 139.326 361.029 140.82 360.033 140.82C353.722 140.82 358.04 125.211 375.974 83.5308C391.417 47.4965 402.377 18.9348 403.706 11.2962C404.37 7.64297 404.536 4.65396 404.204 4.82002C404.038 4.98607 397.395 7.64297 389.757 10.9641Z"
                fill="white"
              />
              <path
                d="M589.855 36.0389C586.534 39.6922 587.863 44.5078 592.18 44.5078C596.332 44.5078 600.981 39.6922 599.819 36.7032C599.321 35.3747 598.822 33.8802 598.822 33.5481C598.822 31.5554 592.346 33.382 589.855 36.0389Z"
                fill="white"
              />
              <path
                d="M573.582 66.7593C558.471 72.9034 555.482 75.2281 564.947 73.5676C569.098 72.9034 572.254 73.2355 572.918 74.0657C574.08 75.8924 568.268 91.1696 556.81 116.742C552.825 125.875 548.673 137.499 547.843 142.647L546.183 152.112L558.803 146.798C572.42 140.82 575.575 137.665 566.94 137.998C562.124 138.33 561.46 137.831 561.958 134.51C562.29 132.352 567.272 119.565 572.918 106.281C583.047 82.7007 585.704 75.3942 587.863 65.5969C589.191 60.117 589.523 60.117 573.582 66.7593Z"
                fill="white"
              />
              <path
                d="M331.14 65.0984C320.844 68.7516 303.408 82.5343 295.77 92.8298C284.478 108.107 279.662 119.897 278.666 133.514C278.002 144.141 278.334 145.636 281.655 148.791C284.312 151.282 287.135 151.946 292.283 151.614C300.585 151.116 303.906 149.455 318.686 137.831C330.808 128.2 337.45 119.731 339.111 111.262C340.771 103.291 337.616 104.786 333.132 114.417C327.487 126.207 313.87 140.156 305.401 142.315C298.593 144.141 293.445 143.311 291.286 140.156C286.969 134.012 292.947 109.269 302.412 94.4904C314.866 74.5636 332.966 63.7699 339.941 72.0728C341.767 74.2315 341.601 75.726 338.944 80.7077C334.627 88.6784 323.667 94.3243 312.707 94.3243C305.401 94.3243 304.737 94.6564 306.729 96.9812C309.718 100.634 317.689 99.14 330.808 92.6638C345.753 85.3573 355.384 73.0691 352.395 65.2644C351.233 62.1094 339.775 62.1094 331.14 65.0984Z"
                fill="white"
              />
              <path
                d="M490.055 67.0912C484.741 69.2499 479.262 71.0766 478.099 71.0766C476.937 71.0766 475.94 71.7408 475.94 72.7371C475.94 73.5674 478.099 73.8995 480.756 73.4014C487.398 72.0729 488.229 74.5638 485.074 85.6895C481.919 95.985 467.97 130.359 461.66 142.813C459.335 147.297 458.006 150.784 458.504 150.784C458.837 150.784 462.158 149.621 465.479 148.293C470.793 146.134 472.785 143.809 477.601 133.68C485.406 117.905 499.354 99.1401 512.805 86.8519C537.049 64.6004 539.374 67.5894 523.433 100.801C511.477 125.543 502.842 148.293 504.668 150.119C506.163 151.614 520.776 146.3 528.248 141.651L534.891 137.499L526.754 138.496C518.949 139.492 518.783 139.492 519.946 135.673C520.61 133.514 527.418 118.735 535.223 102.959C543.027 87.184 549.504 71.9068 549.67 68.9178C549.836 64.2682 549.172 63.604 545.352 63.1059C542.861 62.7737 538.378 63.7701 535.389 65.4306C527.584 69.416 508.82 84.8593 499.188 95.4869C490.72 104.786 488.893 104.786 493.542 95.6529C497.03 89.0107 504.004 65.5967 503.008 63.9361C502.011 62.2756 501.513 62.4416 490.055 67.0912Z"
                fill="white"
              /></svg
          ></span>
          <button @click="toggleMobileMenu" class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Links -->
        <div
          class="flex flex-col p-6 space-y-6 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-50"
        >
          <RouterLink
            to="/"
            class="font-jacques uppercase text-white text-lg hover:text-cyan-400 transition-colors"
          >
            Naslovnica
          </RouterLink>
          <RouterLink
            to="/ponuda"
            class="font-jacques uppercase text-white text-lg hover:text-cyan-400 transition-colors"
          >
            Ponuda
          </RouterLink>
          <RouterLink
            to="/cvjecarnica-melani"
            class="font-jacques uppercase text-primary text-lg hover:text-cyan-400 transition-colors"
          >
            Cvjećarnica
          </RouterLink>
          <RouterLink
            to="/pogrebne-usluge"
            class="font-jacques uppercase text-[#FBCA00] text-lg hover:text-cyan-400 transition-colors"
          >
            Pogrebne Usluge
          </RouterLink>

          <button
            @click="redirectToContact"
            class="w-[200px] font-jacques uppercase px-4 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-500 text-lg w-full mt-4"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="section__1 relative h-screen" ref="section1">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="../assets/images/pogrebno-hero.png"
          alt="Background"
          class="w-full h-full object-cover bg-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Content -->
      <div
        class="container px-4 relative h-full flex flex-col items-center justify-center mx-auto text-white text-center px-4"
      >
        <h1 class="px-4 text-3xl sm:text-5xl text-left w-full md:text-6xl mb-4">
          POGREBNE USLUGE
        </h1>

        <h3 class="px-4 text-5xl w-full md:text-7xl font-script text-cyan-300">
          <svg
            class="w-full md:w-[500px]"
            viewBox="0 0 600 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M186.005 3.32574C174.381 16.2782 168.403 35.8728 168.901 58.9547C169.399 75.8924 169.233 76.0585 163.753 83.8632C148.31 105.617 118.087 129.529 98.3266 135.673C61.296 146.965 24.9295 135.673 11.9771 108.772C0.18706 84.5274 7.32751 57.4602 28.2507 46.5004C38.8783 41.0206 56.6464 40.3563 70.7612 45.0059C83.0494 49.1573 103.142 61.2795 115.597 72.0731C121.242 77.0548 126.058 81.0402 126.556 81.0402C127.885 81.0402 145.985 71.0768 149.472 68.4199C154.288 64.9327 151.631 63.7703 145.653 66.7593C137.018 71.2429 133.365 70.0805 116.925 57.6262C91.1862 38.0316 79.5622 33.7141 55.9822 34.8765C43.5279 35.3747 39.5425 36.371 30.4094 40.8545C18.4533 46.8326 9.98441 55.3014 4.00637 67.5896C-1.30745 78.2172 -1.30745 101.465 3.84031 112.923C8.82201 123.717 15.2982 131.687 25.0956 138.33C35.8893 145.802 45.5206 149.123 60.4657 150.286C80.2264 151.946 98.8248 145.636 121.409 129.861C131.704 122.72 163.421 91.3357 166.908 84.6934C167.904 82.7008 169.399 81.0402 170.229 81.0402C171.724 81.0402 175.875 100.137 178.864 120.23C180.359 130.359 180.359 135.673 179.03 140.987C178.034 144.972 177.536 148.459 177.868 148.791C178.532 149.622 188.662 138.496 190.986 134.344C191.817 132.85 192.854 129.819 194.681 128.158C195.926 126.29 195.303 126.913 195.926 126.29C195.096 126.124 197.629 124.547 199.455 122.886C201.282 121.392 205.433 116.742 208.588 112.591C215.729 103.458 218.884 99.4725 221.043 96.9816C222.039 95.9853 225.36 91.8339 228.515 87.6825C231.67 83.531 234.659 79.8778 235.157 79.3796C235.656 78.8815 237.814 76.0585 239.973 73.0695C241.966 70.0805 244.291 68.0878 244.955 68.4199C245.619 68.9181 243.46 82.8668 239.973 99.6385C236.652 116.41 233.331 135.175 232.667 141.319C231.504 152.278 231.504 152.611 234.493 150.784C236.32 149.788 242.962 146.965 249.272 144.474C255.748 141.983 261.062 139.326 260.896 138.33C260.896 137.499 259.734 137.001 258.405 137.333C257.077 137.665 254.088 138.164 251.763 138.164C248.11 138.33 247.612 137.499 247.114 131.687C246.781 128.034 249.604 109.768 253.424 91.3357C260.896 53.973 266.376 39.8582 278 28.2342C285.805 20.4296 297.761 16.4442 304.403 19.4332C308.056 21.0938 310.713 22.9616 309.882 27.279C309.218 30.7662 309.177 32.1366 310.505 32.2607C311.833 32.3849 312.166 32.012 313.619 29.7699C315.071 27.5278 315.487 23.6898 315.487 22.2973C315.487 21.0519 315.321 22.2143 315.487 21.0519C315.653 20.0556 315.944 18.229 316.11 16.0702C316.732 11.7112 316.11 14.8248 316.732 12.334C317.034 11.1257 316.732 12.9567 317.355 7.97498C317.554 3.98997 317.023 2.99364 311.544 3.98997C302.577 5.65054 290.288 12.4588 281.155 20.9277C272.852 28.7324 254.918 50.1537 216.891 97.6458C192.481 128.034 190.654 129.861 191.152 122.222C191.484 118.403 187.831 100.303 182.683 79.7117C179.694 67.7557 179.694 67.2575 182.683 62.2758C198.459 34.8765 205.101 13.6213 200.119 4.98631C196.964 -0.991714 190.488 -1.65594 186.005 3.32574ZM191.983 12.1267C195.304 16.1121 192.979 30.7251 187.001 45.172C179.694 62.4419 177.038 61.7776 177.038 42.349C177.204 19.2672 184.842 3.65785 191.983 12.1267Z"
              fill="#6FDCF6"
            />
            <path
              d="M389.757 10.9641C376.306 16.9421 376.14 17.1082 381.952 17.6064C386.436 17.9385 387.93 18.9348 387.93 21.0936C387.93 24.7468 384.775 34.212 379.959 44.6736C368.834 69.0839 347.911 122.388 345.42 132.85C342.929 143.145 344.423 150.784 348.907 150.784C353.224 150.784 361.859 146.632 367.339 141.983C370.328 139.492 372.985 137.499 373.483 137.499C373.981 137.499 374.646 140.322 374.978 143.643C375.476 149.123 376.14 149.953 380.126 150.452C387.764 151.282 401.879 142.979 417.156 128.698C424.795 121.558 431.105 116.078 431.105 116.576C431.105 117.24 429.278 122.222 426.954 128.034C424.629 133.68 422.304 141.152 421.64 144.474L420.643 150.784L427.784 148.293C438.245 144.64 449.371 138.828 449.371 137.001C449.371 136.171 448.209 136.005 446.714 136.503C439.408 139.326 436.087 139.492 436.087 137.167C436.087 133.182 441.899 116.908 445.552 110.432C446.05 109.602 443.725 109.602 440.57 110.1L434.758 111.262L439.574 101.631C444.223 92.4979 445.386 85.6895 443.393 80.3757C442.065 77.0546 439.408 76.8885 439.408 80.2097C439.408 90.1731 426.123 114.251 413.005 128.2C402.377 139.326 395.901 143.145 390.255 141.817C386.602 140.82 386.27 139.824 386.27 132.019C386.27 120.561 392.414 108.273 403.54 96.6493C420.311 79.3794 437.249 72.239 460.497 72.405C472.951 72.5711 473.948 72.239 474.944 68.9178C476.605 62.6077 476.106 62.2756 465.313 63.2719C431.935 66.427 393.908 92.4979 379.627 122.056C375.144 131.023 372.321 134.842 367.837 137.333C364.516 139.326 361.029 140.82 360.033 140.82C353.722 140.82 358.04 125.211 375.974 83.5308C391.417 47.4965 402.377 18.9348 403.706 11.2962C404.37 7.64297 404.536 4.65396 404.204 4.82002C404.038 4.98607 397.395 7.64297 389.757 10.9641Z"
              fill="#6FDCF6"
            />
            <path
              d="M589.855 36.0389C586.534 39.6922 587.863 44.5078 592.18 44.5078C596.332 44.5078 600.981 39.6922 599.819 36.7032C599.321 35.3747 598.822 33.8802 598.822 33.5481C598.822 31.5554 592.346 33.382 589.855 36.0389Z"
              fill="#6FDCF6"
            />
            <path
              d="M573.582 66.7593C558.471 72.9034 555.482 75.2281 564.947 73.5676C569.098 72.9034 572.254 73.2355 572.918 74.0657C574.08 75.8924 568.268 91.1696 556.81 116.742C552.825 125.875 548.673 137.499 547.843 142.647L546.183 152.112L558.803 146.798C572.42 140.82 575.575 137.665 566.94 137.998C562.124 138.33 561.46 137.831 561.958 134.51C562.29 132.352 567.272 119.565 572.918 106.281C583.047 82.7007 585.704 75.3942 587.863 65.5969C589.191 60.117 589.523 60.117 573.582 66.7593Z"
              fill="#6FDCF6"
            />
            <path
              d="M331.14 65.0984C320.844 68.7516 303.408 82.5343 295.77 92.8298C284.478 108.107 279.662 119.897 278.666 133.514C278.002 144.141 278.334 145.636 281.655 148.791C284.312 151.282 287.135 151.946 292.283 151.614C300.585 151.116 303.906 149.455 318.686 137.831C330.808 128.2 337.45 119.731 339.111 111.262C340.771 103.291 337.616 104.786 333.132 114.417C327.487 126.207 313.87 140.156 305.401 142.315C298.593 144.141 293.445 143.311 291.286 140.156C286.969 134.012 292.947 109.269 302.412 94.4904C314.866 74.5636 332.966 63.7699 339.941 72.0728C341.767 74.2315 341.601 75.726 338.944 80.7077C334.627 88.6784 323.667 94.3243 312.707 94.3243C305.401 94.3243 304.737 94.6564 306.729 96.9812C309.718 100.634 317.689 99.14 330.808 92.6638C345.753 85.3573 355.384 73.0691 352.395 65.2644C351.233 62.1094 339.775 62.1094 331.14 65.0984Z"
              fill="#6FDCF6"
            />
            <path
              d="M490.055 67.0912C484.741 69.2499 479.262 71.0766 478.099 71.0766C476.937 71.0766 475.94 71.7408 475.94 72.7371C475.94 73.5674 478.099 73.8995 480.756 73.4014C487.398 72.0729 488.229 74.5638 485.074 85.6895C481.919 95.985 467.97 130.359 461.66 142.813C459.335 147.297 458.006 150.784 458.504 150.784C458.837 150.784 462.158 149.621 465.479 148.293C470.793 146.134 472.785 143.809 477.601 133.68C485.406 117.905 499.354 99.1401 512.805 86.8519C537.049 64.6004 539.374 67.5894 523.433 100.801C511.477 125.543 502.842 148.293 504.668 150.119C506.163 151.614 520.776 146.3 528.248 141.651L534.891 137.499L526.754 138.496C518.949 139.492 518.783 139.492 519.946 135.673C520.61 133.514 527.418 118.735 535.223 102.959C543.027 87.184 549.504 71.9068 549.67 68.9178C549.836 64.2682 549.172 63.604 545.352 63.1059C542.861 62.7737 538.378 63.7701 535.389 65.4306C527.584 69.416 508.82 84.8593 499.188 95.4869C490.72 104.786 488.893 104.786 493.542 95.6529C497.03 89.0107 504.004 65.5967 503.008 63.9361C502.011 62.2756 501.513 62.4416 490.055 67.0912Z"
              fill="#6FDCF6"
            />
          </svg>
        </h3>
      </div>
    </div>

    <div class="nase-usluge bg-bg_primary">
      <div class="container mx-auto px-4 py-20 xl:py-[150px]">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <h2
            class="text-[28px] sm:text-[40px] text-secundary mb-4 font-jacques"
          >
            NAŠE USLUGE
          </h2>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
          <!-- 24/7 Service -->
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 text-cyan-400">
                <img src="../assets/images/24_sata.png" alt="" />
              </div>
            </div>
            <h3 class="text-xl mb-5 font-jacques text-secundary">
              USLUGA 0 - 24
            </h3>
            <p class="text-white mb-5 font-jacques">
              Usluga od 24h dnevno za uslugu <br />
              prijevoza pokojnika.
            </p>
            <button
              class="w-[200px] font-jacques bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors"
            >
              SAZNAJ VIŠE
            </button>
          </div>

          <!-- Coffin Selection -->
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 text-cyan-400">
                <img src="../assets/images/ponuda_lijesova.png" alt="" />
              </div>
            </div>
            <h3 class="text-xl mb-5 font-jacques text-secundary">
              PONUDA LJESOVA
            </h3>
            <p class="text-white mb-5 font-jacques">
              Želite samo određeni proizvod ili neku od naših pogrebnih usluga?
              Stojimo Vam na raspolaganju za sve Vaše upite.
            </p>
            <button
              class="w-[200px] font-jacques bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors"
            >
              POGLEDAJ PONUDU
            </button>
          </div>

          <!-- Urn Selection -->
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 text-cyan-400">
                <img
                  class="h-[63px]"
                  src="../assets/images/ponuda_urni.png"
                  alt=""
                />
              </div>
            </div>
            <h3 class="text-xl mb-5 font-jacques text-secundary">
              PONUDA URNI
            </h3>
            <p class="text-white mb-5 font-jacques">
              Želite samo određeni proizvod ili neku od naših pogrebnih usluga?
              Stojimo Vam na raspolaganju za sve Vaše upite.
            </p>
            <button
              class="w-[200px] font-jacques bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors"
            >
              POGLEDAJ PONUDU
            </button>
          </div>

          <!-- Additional Services -->
        </div>
      </div>
    </div>

    <div
      class="Carousel px-[16px] py-[50px] lg:py-[150px] flex flex-col gap-6 sm:gap-14"
    >
      <h2 class="text-[28px] sm:text-[40px] text-bg_primary mb-4 font-jacques">
        PONUDA LIJESOVA
      </h2>
      <p
        class="text-gray-600 text-left text-[18px] sm:text-[28px] leading-relaxed mb-8 max-w-[90%] lg:max-w-[80%] mx-auto text-center"
      >
        Naša ponuda obuhvaća širok izbor kvalitetno izrađenih lijesova,
        prilagođenih različitim financijskim mogućnostima naših klijenata.
        Cijene variraju od 200,00 € do 1000,00 €, uz mogućnost dogovora
        povoljnih uvjeta plaćanja za sve naše usluge. Uz prodaju cvijeća i
        opgrebnog asortimana nudimo usluge prijevoza pokojnika.
      </p>

      <div class="carousel-container">
        <OwlCarousel :options="owlOptions">
          <div
            v-for="image in lijesovImages"
            :key="image.filename"
            class="item flex flex-col gap-4 cursor-pointer"
          >
            <img
              :src="require(`@/assets/images/lijesovi/${image.filename}`)"
              :alt="image.alt"
            />
            <h3 class="text-xl">{{ image.title }}</h3>
          </div>
        </OwlCarousel>
      </div>

      <button
        class="w-[200px] font-jacques bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors mx-auto"
      >
        POGLEDAJ SVE
      </button>
    </div>

    <div class="lampioni bg-bg_primary py-[50px] lg:py-[80px] xl:py-[150px]">
      <div class="container text-white py-8 mx-auto px-[16px]">
        <div class="flex flex-col md:flex-row gap-4 mb-4">
          <div class="flex-1 flex flex-col gap-4 justify-center">
            <h2
              class="text-yellow-500 text-[28px] sm:text-[40px] font-bold text-left"
            >
              PONUDA LAMPIONA I SVIJEĆA
            </h2>
            <p
              class="text-gray-400 text-[18px] sm:text-[28px] text-white text-left max-w-[80%]"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button
              class="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded mt-4 max-w-[200px]"
            >
              POGLEDAJ SVE
            </button>
          </div>
          <div class="flex-1 grid grid-cols-2 gap-4">
            <img
              src="../assets/images/lampioni/lampion-1.png"
              alt="Placeholder"
              class="rounded-lg w-full"
            />
            <img
              src="../assets/images/lampioni/lampion-2.png"
              alt="Placeholder"
              class="rounded-lg w-full"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="../assets/images/lampioni/lampion-3.png"
            alt="Placeholder"
            class="rounded-lg flex-1 w-full"
          />
          <img
            src="../assets/images/lampioni/lampion-4.png"
            alt="Placeholder"
            class="rounded-lg flex-1 w-full"
          />
          <img
            src="../assets/images/lampioni/lampion-5.png"
            alt="Placeholder"
            class="rounded-lg flex-1 w-full"
          />
          <img
            src="../assets/images/lampioni/lampion-6.png"
            alt="Placeholder"
            class="rounded-lg flex-1 w-full"
          />
        </div>
      </div>
    </div>

    <div
      class="pogrebno-odvoz container mx-auto py-[50px] lg:py-[80px] xl:py-[150px]"
    >
      <div
        class="lg:flex-row-reverse lg:flex pt-0 lg:pt-12 xl:pb-12 px-4 sm:pb-12 lg:gap-52 flex-col lg:flex-row mt-0 lg:mt-12"
      >
        <div
          class="lg:flex-1 flex flex-col items-center lg:items-start sm:text-center lg:text-left justify-center order-1 lg:order-2 mb-12"
        >
          <h2
            class="font-jacques text-secundary text-[28px] sm:text-[40px] mb-8 w-full"
          >
            POGREBNE USLUGE
          </h2>
          <p
            class="text-gray-600 mb-12 text-[18px] sm:text-[28px] font-jacques"
          >
            Naša ponuda uključuje širok izbor kvalitetno izrađenih ljesova,
            prilagođenih sadašnjim financijskim mogućnostima naših klijenata.
            Cijene variraju od 2000.00 € do 3000.00 €, uz mogućnost dogovora
            povoljnijih uvjeta plaćanja za sve naše usluge. Za prodaju grobnica
            i grobnih ograda molimo studium usluge za prijevoz pokojnika.
          </p>
          <button
            class="w-[200px] font-jacques bg-secundary text-black px-6 py-2 rounded hover:bg-cyan-500 transition-colors"
          >
            POGLEDAJ PONUDU
          </button>
        </div>

        <div class="lg:flex-1">
          <img
            src="../assets/images/pogrebno-pogledaj.png"
            alt="Colorful bouquet"
            class="lg:w-full xl:h-full lg:max-w-full sm:max-w-[350px] sm:mx-auto"
          />
        </div>
      </div>
    </div>

    <DodatnaPonuda />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import OwlCarousel from "../components/CarouselComponent.vue";
import DodatnaPonuda from "../components/DodatnaPonuda.vue";

export default {
  name: "HomeView",
  components: {
    FooterComponent,
    OwlCarousel,
    DodatnaPonuda,
  },
  data() {
    return {
      isSectionVisible: false,
      isMobileMenuOpen: false,
      lijesovImages: [],
      owlOptions: {
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 1000,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 5 },
        },
      },
    };
  },
  created() {
    const lijesovImages = require.context(
      "@/assets/images/lijesovi",
      false,
      /\.(png|jpe?g|svg)$/
    );
    this.lijesovImages = lijesovImages.keys().map((filename) => ({
      filename: filename.slice(2),
      title: filename.slice(2, -4),
      alt: filename.slice(2, -4),
    }));
  },
  mounted() {
    this.initIntersectionObserver();
  },
  beforeUnmount() {
    document.body.style.overflow = "";
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

    redirectToContact() {
      // Use this.$router to navigate
      this.$router.push("/contact-melani");
    },
  },
};
</script>
