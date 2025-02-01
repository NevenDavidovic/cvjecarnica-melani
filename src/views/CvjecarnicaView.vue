<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <NavbarComponent :isSectionVisible="isSectionVisible" />

    <!-- Hero Section -->
    <div class="section__1 relative h-screen" ref="section1">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="../assets/images/hero-image-cvjecarna.jpg"
          alt="Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Content -->
      <div
        class="gap-[50px] container px-4 relative h-full flex flex-col items-center justify-center mx-auto text-white text-center px-4"
      >
        <h1
          class="max-w-[70%] mx-auto w-full text-5xl font-medium text-left flex align-left justify-left"
        >
          {{ t("welcome") }}
        </h1>

        <p
          class="max-w-[70%] mx-auto sm:text-xl sm:text-sm font-normal text-left"
        >
          {{ $t("melaniIntro") }}.<br />
        </p>
      </div>
    </div>
    <!--USLUGE-->

    <div
      class="usluge-cvjecarnica w-full px-[16px] bg-bg_primary py-[130px] flex flex-col gap-[80px]"
    >
      <div
        class="title-usluge flex flex-col gap-[20px] justify-center align-center"
      >
        <p class="underline text-center text-primary uppercase">
          {{ t("usluge") }}
        </p>
        <h2 class="text-4xl md:text-5xl text-center text-primary">
          {{ t("ponuda_cvijeca_usluga") }}
        </h2>
      </div>
      <div
        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl gap-8 border border-primary p-12 mx-auto"
      >
        <div class="item">
          <div class="text-cyan-400 mb-4 flex align-center justify-center">
            <svg
              width="40"
              height="42"
              viewBox="0 0 40 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_223_19161)">
                <path
                  d="M9.19572 21.5432C10.5723 21.5432 11.6883 20.6035 11.6883 19.4444C11.6883 18.2853 10.5723 17.3457 9.19572 17.3457C7.8191 17.3457 6.70312 18.2853 6.70312 19.4444C6.70312 20.6035 7.8191 21.5432 9.19572 21.5432Z"
                  fill="#6FDCF6"
                />
                <path
                  d="M39.5191 16.1198C39.5191 7.23135 30.9103 0 20.3289 0C10.6179 0 2.57011 6.09099 1.31152 13.9635C1.78088 13.7778 2.27954 13.6368 2.80058 13.5496C3.25243 11.7463 4.7558 10.2628 6.73728 9.57798C9.44385 5.6256 14.522 2.95796 20.3289 2.95796C28.9689 2.95796 35.9979 8.86228 35.9979 16.1199V19.5214H32.3516C32.0888 19.8998 31.7657 20.2519 31.3839 20.5676C30.8592 21.0018 30.2543 21.3431 29.5986 21.5842C30.5043 23.2277 31.1937 25.2267 31.6029 26.5796L31.6031 26.5798C31.8164 27.2861 31.6034 28.0355 31.0329 28.5843C30.5316 29.0671 29.8063 29.3441 29.0435 29.3441C28.944 29.3441 28.8437 29.3393 28.7455 29.33C26.0933 29.0774 21.3689 28.452 19.5273 27.102C18.4883 26.3404 17.8957 25.0599 17.5598 23.7591C16.9363 24.0707 16.2474 24.2981 15.5151 24.4208C14.889 26.9168 12.2489 28.8008 9.11455 28.8008L9.07095 28.8007C7.3287 28.7914 5.69469 28.2111 4.46977 27.1674C3.54991 26.3835 2.943 25.4087 2.70075 24.351C2.47516 24.3108 2.25428 24.2573 2.0361 24.1977L7.00092 40.8801C7.19671 41.5384 7.90092 42.0003 8.70883 42.0003H31.9482C32.7561 42.0003 33.4603 41.5384 33.6561 40.8801C33.6561 40.8801 38.7444 26.2159 39.4925 21.1796C39.6792 19.9241 39.5191 16.1198 39.5191 16.1198Z"
                  fill="#6FDCF6"
                />
                <path
                  d="M24.2319 16.3272C24.7947 16.3272 25.3582 16.1465 25.7882 15.7853C26.6469 15.0639 26.6483 13.896 25.7917 13.1765C25.3641 12.8173 24.8033 12.6377 24.2422 12.6377C23.6794 12.6377 23.1159 12.8184 22.686 13.1797C21.8274 13.9009 21.8259 15.0689 22.6824 15.7884C23.1102 16.1476 23.6708 16.3272 24.2319 16.3272Z"
                  fill="#6FDCF6"
                />
                <path
                  d="M18.7086 19.0558C19.3766 19.6246 20.2591 19.9093 21.144 19.9093C22.0199 19.9093 22.898 19.6304 23.5733 19.0719C23.8249 18.8638 24.03 18.6319 24.1899 18.384C24.3438 18.6333 24.543 18.8666 24.7894 19.0763C25.4573 19.645 26.3401 19.9298 27.2249 19.9298C28.1009 19.9298 28.9788 19.6509 29.6536 19.0926C31.0115 17.9699 31.0342 16.1427 29.7039 15.011C29.4578 14.8011 29.1824 14.6308 28.8876 14.4983C29.1849 14.3674 29.465 14.199 29.7165 13.9905C31.0729 12.8681 31.0957 11.0413 29.7657 9.9093C29.0978 9.34067 28.2152 9.05601 27.3303 9.05601C26.4544 9.05601 25.5763 9.33488 24.9012 9.89332C24.6495 10.1016 24.4446 10.3335 24.2845 10.581C24.1312 10.3321 23.9313 10.0988 23.6847 9.88936C23.0169 9.32045 22.134 9.03564 21.2489 9.03564C20.3731 9.03564 19.495 9.31437 18.8201 9.87239C17.4632 10.9952 17.4408 12.8229 18.7704 13.9539C19.0165 14.1639 19.2921 14.3349 19.5867 14.4672C19.2888 14.5977 19.0096 14.7666 18.7584 14.9749C17.4009 16.0973 17.3788 17.9245 18.7086 19.0558ZM21.4411 12.1342C22.1896 11.5053 23.1845 11.159 24.2425 11.159C25.2982 11.159 26.2906 11.5042 27.0367 12.1309C28.5785 13.426 28.5768 15.5345 27.0332 16.8312C26.2847 17.46 25.2899 17.8063 24.232 17.8063C23.1761 17.8063 22.1835 17.4611 21.4376 16.8344C20.6903 16.2066 20.2793 15.3717 20.2805 14.4832C20.2818 13.596 20.694 12.7616 21.4411 12.1342Z"
                  fill="#6FDCF6"
                />
                <path
                  d="M24.1666 21.2847C23.2604 21.7378 22.2232 21.9797 21.1439 21.9797C20.6981 21.9797 20.2609 21.9372 19.837 21.8571C19.7991 21.9097 19.7626 21.963 19.7227 22.0145C19.926 23.56 20.387 24.9842 21.1476 25.5418C22.0671 26.2159 25.2321 26.9115 29.0232 27.2727C29.0831 27.2774 29.1376 27.2593 29.1753 27.2231C29.2137 27.1863 29.2277 27.1362 29.2136 27.0892C28.5833 25.0054 27.8139 23.1781 27.0981 21.9967C26.0466 21.9782 25.0422 21.733 24.1666 21.2847Z"
                  fill="#6FDCF6"
                />
                <path
                  d="M4.31233 22.7096C4.70054 22.7096 5.07563 22.6611 5.43 22.5708C5.31553 22.8768 5.25273 23.201 5.25004 23.5379C5.23253 25.3559 6.96283 26.8392 9.11334 26.8508C9.12209 26.8508 9.13118 26.8509 9.13994 26.8509C11.2785 26.8509 13.0209 25.391 13.0379 23.5803C13.0413 23.2432 12.984 22.9184 12.8755 22.6113C13.2374 22.7076 13.6206 22.7608 14.0194 22.7629C14.0282 22.7629 14.0372 22.7629 14.046 22.7629C15.3682 22.7629 16.5384 22.2043 17.2435 21.3505C17.031 21.2147 16.8282 21.0658 16.6372 20.9033C15.582 20.0056 15.0069 18.8155 15.0177 17.5522C15.0212 17.1331 15.0911 16.7231 15.2191 16.3292C14.8591 16.2338 14.4765 16.1814 14.0795 16.1791C14.0699 16.179 14.0603 16.179 14.0507 16.179C13.6623 16.179 13.2879 16.228 12.9334 16.3183C13.047 16.0124 13.111 15.6878 13.1137 15.3507C13.1298 13.5333 11.4005 12.05 9.24936 12.0381C9.24061 12.0381 9.23152 12.0381 9.22276 12.0381C7.08421 12.0379 5.34162 13.498 5.32512 15.3084C5.32209 15.6457 5.37916 15.9705 5.48758 16.2774C5.12613 16.1808 4.74229 16.1282 4.34398 16.1267C4.33472 16.1265 4.32546 16.1265 4.3162 16.1265C2.17849 16.1265 0.435895 17.5865 0.41906 19.3964C0.40273 21.2143 2.1332 22.698 4.28337 22.7096C4.29297 22.7095 4.30273 22.7096 4.31233 22.7096ZM9.18118 15.9314C11.4839 15.9314 13.3573 17.5073 13.3573 19.4442C13.3573 21.3812 11.4839 22.9571 9.18118 22.9571C6.87849 22.9571 5.00509 21.3813 5.00509 19.4442C5.00509 17.5073 6.87849 15.9314 9.18118 15.9314Z"
                  fill="#6FDCF6"
                />
              </g>
              <defs>
                <clipPath id="clip0_223_19161">
                  <rect width="40" height="42" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="text-xl text-cyan-400 font-semibold mb-2">
            <img :src="flowerIcon" class="mx-auto" width="216" height="45" />
          </h3>
          <p class="text-gray-400">
            {{ t("flowersDescription") }}
          </p>
        </div>

        <div class="item">
          <div class="text-cyan-400 mb-4 flex align-center justify-center">
            <svg
              width="40"
              height="43"
              viewBox="0 0 40 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.42383 23.0308H19.3935V42.4247H7.27231C4.59457 42.4247 2.42383 40.254 2.42383 37.5762V23.0308Z"
                fill="#6FDCF6"
              />
              <path
                d="M20.6064 23.0308H37.5761V37.5762C37.5761 40.254 35.4054 42.4247 32.7277 42.4247H20.6064V23.0308Z"
                fill="#6FDCF6"
              />
              <path
                d="M3.63672 1.75628C3.63672 0.823708 4.45407 0.102169 5.37944 0.21784L10.2037 0.820868C14.9309 1.41177 18.6998 5.05361 19.4525 9.7578L19.8774 12.4132C20.2599 14.804 18.4131 16.9697 15.992 16.9697C9.16837 16.9697 3.63672 11.438 3.63672 4.61442V1.75628Z"
                fill="#6FDCF6"
              />
              <path
                d="M21.8643 5.71261C22.6176 3.98014 23.9562 2.56784 25.6459 1.72299L26.1992 1.44635C27.3088 0.891579 28.514 0.55362 29.7502 0.450601L33.3842 0.147765C34.3356 0.0684838 35.1515 0.819265 35.1515 1.77394V4.94371C35.1515 11.5857 29.7671 16.9702 23.1251 16.9702C20.2187 16.9702 18.2652 13.9907 19.424 11.3253L21.8643 5.71261Z"
                fill="#6FDCF6"
              />
              <rect
                y="10.9097"
                width="40"
                height="10.9091"
                rx="2.42424"
                fill="#6FDCF6"
              />
            </svg>
          </div>
          <h3 class="text-xl text-cyan-400 font-semibold mb-2">
            <img
              :src="giftIcon"
              class="mx-auto h-[45px]"
              width="216"
              height="45"
              :alt="t('icons.gifts')"
            />
          </h3>
          <p class="text-gray-400">
            {{ t("icons.gifts") }}
          </p>
        </div>

        <div class="item">
          <div class="text-cyan-400 mb-4 flex align-center justify-center">
            <svg
              width="40"
              height="42"
              viewBox="0 0 40 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.52156C0 6.09631 1.15539 4.94092 2.58065 4.94092H37.4194C38.8446 4.94092 40 6.09631 40 7.52156V13.588H0V7.52156Z"
                fill="#6FDCF6"
              />
              <rect
                x="7.74219"
                width="6.45161"
                height="8.64706"
                rx="2.58065"
                fill="#6FDCF6"
              />
              <rect
                x="24.5166"
                width="6.45161"
                height="9.88235"
                rx="2.58065"
                fill="#6FDCF6"
              />
              <path
                d="M0 14.8237H40V36.8389C40 39.6894 37.6892 42.0002 34.8387 42.0002H5.16129C2.31079 42.0002 0 39.6894 0 36.8389V14.8237Z"
                fill="#6FDCF6"
              />
              <rect
                x="6.45117"
                y="19.7646"
                width="5.16129"
                height="5.16129"
                fill="#353638"
              />
              <rect
                x="18.0645"
                y="19.7646"
                width="5.16129"
                height="5.16129"
                fill="#353638"
              />
              <rect
                x="29.6768"
                y="19.7646"
                width="5.16129"
                height="5.16129"
                fill="#353638"
              />
              <rect
                x="6.45117"
                y="31.3774"
                width="5.16129"
                height="5.16129"
                fill="#353638"
              />
              <rect
                x="18.0645"
                y="31.3774"
                width="5.16129"
                height="5.16129"
                fill="#353638"
              />
              <rect
                x="29.6768"
                y="31.3774"
                width="5.16129"
                height="5.16129"
                fill="#353638"
              />
            </svg>
          </div>
          <h3 class="text-xl text-cyan-400 font-semibold mb-2">
            <img
              :src="eventsIcon"
              class="mx-auto"
              height="45"
              :alt="t('icons.events')"
            />
          </h3>
          <p class="text-gray-400">
            {{ t("icons.events") }}
          </p>
        </div>
        <div class="item">
          <div class="text-cyan-400 mb-4 flex align-center justify-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0864 40.6483C22.5732 41.4754 23.5765 41.9983 24.6726 42.0002C25.7708 42.0029 26.7753 41.4856 27.2687 40.6622L31.8284 33.0659H17.6084L22.0864 40.6483Z"
                fill="#6FDCF6"
              />
              <path
                d="M49.5607 10.1043C49.5607 7.69832 47.2306 5.74013 44.3652 5.74013C44.0661 5.74013 43.7725 5.76145 43.4811 5.8041C42.7504 4.19082 40.8883 3.04298 38.715 3.04298C37.3651 3.04298 36.1377 3.48617 35.2259 4.20658C34.2933 3.71425 33.1939 3.42776 32.0151 3.42776C31.5095 3.42776 31.0128 3.48061 30.5338 3.58167C29.7898 1.51222 27.5006 0 24.7986 0C22.0998 0 19.8117 1.50666 19.0655 3.57054C18.5975 3.47504 18.1119 3.42498 17.624 3.42498C16.4231 3.42498 15.3017 3.71889 14.3568 4.22327C13.4429 3.49173 12.2056 3.04391 10.8468 3.04391C8.67127 3.04391 6.81141 4.19175 6.0785 5.80503C5.78821 5.76238 5.4935 5.74105 5.19548 5.74105C2.32897 5.74105 0 7.69832 0 10.1053C0 11.1641 0.448133 12.145 1.20753 12.9072C0.452549 13.6591 0 14.6271 0 15.6637C0 18.0252 2.28592 19.9463 5.09724 19.9463C5.39968 19.9463 5.70101 19.924 5.99241 19.8814C6.70876 21.5373 8.59953 22.7222 10.8159 22.7222C11.0433 22.7222 11.2685 22.7083 11.4892 22.6842L15.8293 30.0515H33.6376L38.0483 22.6814C38.2746 22.7065 38.5097 22.7222 38.747 22.7222C40.9612 22.7222 42.8541 21.5364 43.5694 19.8814C43.863 19.924 44.1588 19.9463 44.4657 19.9463C47.277 19.9463 49.5607 18.0252 49.5607 15.6637C49.5607 14.628 49.1104 13.6591 48.3532 12.9072C49.1104 12.1432 49.5607 11.1632 49.5607 10.1043ZM17.1792 10.6486C15.9717 10.4687 15.0964 9.58975 15.0964 8.56059C15.0964 7.38957 16.2288 6.43643 17.6229 6.43643C18.3359 6.43643 18.9949 6.67935 19.4795 7.11976C20.049 7.63805 20.9718 7.7558 21.6958 7.40162C22.421 7.04744 22.7599 6.31961 22.506 5.64741C22.431 5.44529 22.3923 5.23945 22.3923 5.03177C22.3923 3.91823 23.4707 3.01238 24.7975 3.01238C26.1209 3.01238 27.2004 3.91823 27.2004 5.03177C27.2004 5.26449 27.1551 5.4935 27.0602 5.70953C26.7666 6.39749 27.101 7.16241 27.856 7.52493C28.6154 7.88931 29.5669 7.74467 30.1265 7.18373C30.5945 6.7118 31.2833 6.44107 32.0151 6.44107C33.3716 6.44107 34.4754 7.36824 34.4754 8.50774C34.4754 9.51465 33.5846 10.3936 32.4058 10.5503C31.5327 10.6662 30.8903 11.2967 30.8903 12.0375C30.8903 12.7783 31.5327 13.4088 32.4058 13.5247C33.5846 13.6814 34.4754 14.5594 34.4754 15.5663C34.4754 16.7067 33.3716 17.6348 32.0151 17.6348C31.2667 17.6348 30.5691 17.3539 30.1 16.8634C29.5437 16.2867 28.5713 16.1319 27.8041 16.5065C27.0414 16.8783 26.7136 17.6636 27.0348 18.3552C27.1474 18.6 27.2048 18.8541 27.2048 19.109C27.2048 20.2402 26.1087 21.159 24.7654 21.159C23.4177 21.159 22.3228 20.2393 22.3228 19.109C22.3228 18.8337 22.3857 18.5676 22.5093 18.3172C22.857 17.6172 22.5314 16.8087 21.7477 16.4304C21.4685 16.2951 21.1605 16.2311 20.857 16.2311C20.3106 16.2311 19.7742 16.4406 19.4243 16.83C18.9651 17.3418 18.2642 17.6348 17.5048 17.6348C16.1792 17.6348 15.1008 16.729 15.1008 15.6164C15.1008 14.6271 15.9761 13.7685 17.1395 13.6211C18.007 13.5108 18.6516 12.8886 18.6627 12.1515C18.6704 11.4126 18.0445 10.7775 17.1792 10.6486ZM10.8159 19.7089C9.9649 19.7089 9.27283 19.1276 9.27283 18.4137C9.27283 18.2393 9.31257 18.0734 9.38983 17.9176C9.73973 17.2176 9.41522 16.4082 8.63375 16.029C8.35118 15.8927 8.04322 15.8268 7.73858 15.8268C7.19332 15.8268 6.65688 16.0364 6.30698 16.4249C6.01559 16.7475 5.57518 16.933 5.09614 16.933C4.26168 16.933 3.58396 16.3627 3.58396 15.6627C3.58396 15.0397 4.13475 14.5001 4.86435 14.4073C5.73191 14.297 6.37762 13.6749 6.38756 12.9378C6.3986 12.2007 5.77055 11.5646 4.9085 11.4367C4.13916 11.3217 3.58396 10.7626 3.58396 10.1053C3.58396 9.35981 4.30584 8.75344 5.19438 8.75344C5.64692 8.75344 6.06746 8.90828 6.37652 9.18921C6.94607 9.70657 7.86772 9.82525 8.5918 9.47014C9.31698 9.11689 9.65584 8.38813 9.40308 7.71593C9.35451 7.58613 9.33133 7.4554 9.33133 7.32652C9.33133 6.6265 10.0102 6.05629 10.8457 6.05629C11.3148 6.05629 11.7365 6.23802 12.0135 6.52173C11.6901 7.14665 11.5102 7.83646 11.5102 8.56151C11.5102 9.14563 11.6261 9.71028 11.8435 10.2378C11.5256 10.1516 11.1857 10.1053 10.8336 10.1053C9.00903 10.1053 7.52886 11.3495 7.52886 12.884C7.52886 14.4185 9.00903 15.6637 10.8336 15.6637C11.0665 15.6637 11.2927 15.6442 11.5102 15.6052C11.5102 15.609 11.5102 15.6136 11.5102 15.6182C11.5102 16.5371 11.806 17.3975 12.3204 18.1392C12.3435 18.2301 12.3568 18.3228 12.3568 18.4155C12.3579 19.1276 11.6658 19.7089 10.8159 19.7089ZM44.6952 14.4064C45.4226 14.5001 45.9745 15.0397 45.9745 15.6618C45.9745 16.3618 45.2979 16.932 44.4635 16.932C43.9822 16.932 43.5418 16.7466 43.2515 16.4239C42.7062 15.8185 41.7106 15.6479 40.9258 16.028C40.1444 16.4073 39.8199 17.2167 40.1687 17.9167C40.247 18.0734 40.2868 18.2403 40.2868 18.4127C40.2868 19.1266 39.5947 19.708 38.7437 19.708C37.8927 19.708 37.2017 19.1266 37.2017 18.4127C37.2017 18.307 37.2205 18.2023 37.2492 18.1003C37.7569 17.3641 38.0505 16.5129 38.0582 15.6043C38.2713 15.6414 38.4953 15.6609 38.7249 15.6609C40.5506 15.6609 42.0318 14.4157 42.0318 12.8812C42.0318 11.3467 40.5506 10.1025 38.7249 10.1025C38.3695 10.1025 38.0251 10.1507 37.7039 10.2378C37.9335 9.69637 38.0582 9.11318 38.0582 8.50588C38.0582 7.79381 37.8838 7.11512 37.5671 6.49855C37.8441 6.22689 38.2558 6.05351 38.7139 6.05351C39.5494 6.05351 40.2305 6.62372 40.2305 7.32374C40.2305 7.45076 40.2051 7.58242 40.1565 7.71315C39.9038 8.38535 40.2404 9.11411 40.9667 9.46736C41.6908 9.82247 42.6135 9.70379 43.1831 9.18643C43.491 8.90642 43.9105 8.75066 44.3641 8.75066C45.2515 8.75066 45.9745 9.35703 45.9745 10.1025C45.9745 10.7589 45.4182 11.3189 44.6522 11.4339C43.7868 11.5618 43.1588 12.1979 43.1698 12.935C43.182 13.6739 43.8266 14.2961 44.6952 14.4064Z"
                fill="#6FDCF6"
              />
              <path
                d="M24.7858 15.827C27.2455 15.827 29.2395 14.152 29.2395 12.0859C29.2395 10.0197 27.2455 8.34473 24.7858 8.34473C22.326 8.34473 20.332 10.0197 20.332 12.0859C20.332 14.152 22.326 15.827 24.7858 15.827Z"
                fill="#6FDCF6"
              />
            </svg>
          </div>
          <h3 class="text-xl text-cyan-400 font-semibold mb-2">
            <img
              :src="arrangementsIcon"
              class="mx-auto"
              height="45"
              :alt="t('icons.arrangements')"
            />
          </h3>
          <p class="text-gray-400">
            {{ t("icons.arrangements") }}
          </p>
        </div>
        <div class="item">
          <div class="text-cyan-400 mb-4 flex align-center justify-center">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#6FDCF6"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M769.52 1008H254.488l-77.024-538.816h670.496z"
                  fill="######6FDCF6"
                ></path>
                <path
                  d="M511.416 469.184V1008H769.52l78.44-538.816z"
                  fill="######6FDCF6"
                ></path>
                <path
                  d="M741.24 18.592c-59.984-9.816-123.616 8.24-169.784 54.504-35.424 35.36-54.16 80.912-56.648 127.192-0.992-0.064-1.824-0.552-2.84-0.552-1.016 0-1.848 0.496-2.84 0.552-2.504-46.288-21.192-91.832-56.592-127.192-46.288-46.256-109.856-64.28-169.784-54.504-9.752 59.992 8.208 123.56 54.496 169.816 39.376 39.408 91.472 58.112 143.12 56.752v92.848a31.584 31.584 0 0 0 31.6 31.6 31.576 31.576 0 0 0 31.6-31.6V245.16c51.656 1.352 103.744-17.344 143.12-56.776 46.288-46.232 64.312-109.808 54.552-169.792z"
                  fill="######6FDCF6"
                ></path>
                <path
                  d="M931.464 433.144a52.864 52.864 0 0 1-52.896 52.832h-733.2a52.816 52.816 0 0 1-52.832-52.832v-31.008a52.832 52.832 0 0 1 52.832-52.832h733.192c29.2 0 52.896 23.664 52.896 52.832v31.008z"
                  fill="######6FDCF6"
                ></path>
                <path
                  d="M511.416 369.488c0.184 0.032 0.368 0.128 0.552 0.128 13.456 0 24.752-8.456 29.312-20.304a31.2 31.2 0 0 0 2.288-11.296V245.16c51.656 1.352 103.744-17.344 143.12-56.776 46.288-46.232 64.312-109.8 54.552-169.792-59.984-9.816-123.616 8.24-169.784 54.504-35.424 35.36-54.16 80.912-56.648 127.192-0.992-0.064-1.824-0.552-2.84-0.552a1.536 1.536 0 0 0-0.552 0.128v169.624z"
                  fill="######6FDCF6"
                ></path>
                <path
                  d="M878.56 349.304H511.416v136.672H878.568a52.864 52.864 0 0 0 52.896-52.832v-31.008c0-29.16-23.696-52.832-52.904-52.832z"
                  fill="######6FDCF6"
                ></path>
              </g>
            </svg>
          </div>
          <h3 class="text-xl text-cyan-400 font-semibold mb-2">
            <img
              :src="accessoriesIcon"
              class="mx-auto"
              height="45"
              :alt="t('icons.accessories')"
            />
          </h3>
          <p class="text-gray-400">
            {{ t("icons.accessories") }}
          </p>
        </div>

        <div class="item">
          <div class="text-primary mb-4 flex align-center justify-center">
            <svg
              class="w-[60px] h-[52px]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              ></path>
              <path
                d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl text-cyan-400 font-semibold mb-2">
            <img
              class="mx-auto"
              height="45"
              :src="deliveryIcon"
              :alt="t('delivery.alt')"
            />
          </h3>
          <p class="text-gray-400">{{ t("delivery.alt") }}.</p>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="container mx-auto max-w-[1440px] px-4">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 justify-items-center"
        >
          <!-- Image Column -->
          <div
            class="max-w-[591px] max-h-[954px] w-full relative overflow-hidden"
          >
            <img
              src="../assets/images/about-us-section.jpg"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>

          <!-- Text Column -->
          <div class="flex flex-col justify-center max-w-xl">
            <div class="mb-8">
              <p
                class="border-b text-gray-500 text-left uppercase tracking-wider mb-4"
              >
                {{ t("location") }}
              </p>
              <h2
                class="font-playfair text-left text-4xl md:text-5xl font-medium mb-8"
              >
                {{ t("title") }}
              </h2>
              <p
                class="text-gray-600 text-left text-[1.25rem] leading-relaxed mb-8"
              >
                {{ t("description") }}
              </p>
              <p class="italic text-left text-gray-800 text-2xl">
                {{ t("quote") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="Carousel px-[16px] py-[50px] lg:py-[150px] flex flex-col gap-14"
    >
      <div class="carousel-container">
        <OwlCarousel :options="owlOptions">
          <div
            class="item flex flex-col gap-4 cursor-pointer"
            @click="$router.push('/ponuda?filter=buketi')"
          >
            <img src="../assets/images/buketi-i-aranzmani.jpg" alt="Slide 1" />
            <!-- <h3 class="text-xl">{{ t("bouquet") }}</h3> -->
          </div>
          <div
            class="item flex flex-col gap-4 cursor-pointer"
            @click="$router.push('/ponuda?filter=rezano_cvijece')"
          >
            <img src="../assets/images/vjencani-buketi.jpg" alt="Slide 2" />
            <!-- <h3 class="text-xl">{{ t("rezano_cvijece") }}</h3> -->
          </div>
          <div
            class="item flex flex-col gap-4 cursor-pointer"
            @click="$router.push('/ponuda?filter=bozic')"
          >
            <img src="../assets/images/prigoodni-aranzmani.jpg" alt="Slide 3" />
            <!-- <h3 class="text-xl">{{ t("vijenci") }}</h3> -->
          </div>

          <div
            class="item flex flex-col gap-4 cursor-pointer"
            @click="$router.push('/ponuda?filter=umjetno_cvijece')"
          >
            <img src="../assets/images/grobni-vijenci.jpg" alt="Slide 3" />
            <!-- <h3 class="text-xl">{{ t("artificial_flowers") }}</h3> -->
          </div>
          <div
            class="item flex flex-col gap-4 cursor-pointer"
            @click="$router.push('/ponuda?filter=valentinovo')"
          >
            <img src="../assets/images/kutije.jpg" alt="Slide 3" />
            <!-- <h3 class="text-xl">{{ t("coffin_flowers") }}</h3> -->
          </div>
        </OwlCarousel>
      </div>

      <div class="flex flex-col gap-8 justify-center align-center">
        <p class="text-[#6C6B71] max-w-[80%] mx-auto text-xl sm:text-[1.25rem]">
          {{ t("additional_offer_text") }}
        </p>
        <router-link
          to="/ponuda"
          class="bg-primary text-xl px-[20px] text-black text-xl py-[10px] max-w-[250px] rounded mx-auto"
          >{{ t("view_more") }}
          <span aria-hidden="true">&rarr;</span></router-link
        >
      </div>
    </div>

    <div class="bg-red-600 py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <h2 class="text-white font-playfair text-4xl md:text-5xl mb-4">
            {{ t("valentinovo") }}
          </h2>
          <p class="text-white italic text-lg md:text-xl">
            "Love is like a flower, blooming with care and tenderness."
          </p>
        </div>

        <!-- Main Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Large Image 1 -->
          <div class="overflow-hidden">
            <img
              src="../assets/images/buket-valentinovo.png"
              alt="Valentine's Day Roses"
              class="w-full h-full"
            />
          </div>
          <!-- Large Image 2 -->
          <div class="rounded-2xl overflow-hidden">
            <img
              src="../assets/images/izlog-valentinovo.png"
              alt="Valentine's Day Shop Display"
              class="w-full h-full"
            />
          </div>
        </div>

        <!-- Small Images Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="overflow-hidden aspect-square">
            <img
              src="../assets/images/c-1-valentinovo.png"
              alt="Valentine's Arrangement 1"
              class="w-full h-full"
            />
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="../assets/images/c-2-valentinovo.png"
              alt="Valentine's Arrangement 2"
              class="w-full h-full"
            />
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="../assets/images/c-3-valentinovo.png"
              alt="Valentine's Arrangement 3"
              class="w-full h-full"
            />
          </div>
          <div class="overflow-hidden aspect-square">
            <img
              src="../assets/images/c-4-valentinovo.png"
              alt="Valentine's Arrangement 4"
              class="w-full h-full object-cov"
            />
          </div>
        </div>
      </div>
    </div>

    <UmjetnoComponent />

    <div class="bg-bg_primary text-cyan-300 py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <h2 class="text-4xl md:text-5xl font-medium text-center mb-4">
          {{ t("kako_doci_do_nas") }}
        </h2>

        <!-- Address Text -->
        <div class="text-center text-[1.25rem] mb-8 text-gray-300">
          <p>
            {{ t("flower_shop") }} Melani - Ulica Mladena Vodanovića 4b,
            Supetar, Hrvatska.
          </p>
          <p class="mt-2">
            {{ t("u_trenutku") }}
          </p>
        </div>

        <!-- Images Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Store Front Image -->
          <div class="md:col-span-2">
            <div class="rounded-lg overflow-hidden shadow-xl">
              <img
                src="../assets/images/storefront-melani-1.png"
                alt="Melanie Flower Shop Storefront"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Store Window Image -->
          <div>
            <div class="rounded-lg overflow-hidden shadow-xl">
              <img
                src="../assets/images/storefront-melani-2.png"
                alt="Melanie Flower Shop Window Display"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import FooterComponent from "../components/FooterComponent.vue";
import OwlCarousel from "../components/CarouselComponent.vue";
import UmjetnoComponent from "@/components/UmjetnoComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "HomeView",
  components: {
    FooterComponent,
    OwlCarousel,
    UmjetnoComponent,
    NavbarComponent,
  },
  data() {
    return {
      isSectionVisible: false,

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
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 5 },
        },
      },
    };
  },
  setup() {
    const { t, locale } = useI18n();

    // Function to return correct image paths
    const getImagePath = (hrPath, enPath) =>
      computed(() =>
        locale.value === "hr"
          ? require(`@/assets/svg/${hrPath}`)
          : require(`@/assets/svg/${enPath}`)
      );

    // Dynamic SVG sources
    const flowerIcon = getImagePath("svjeze-cvijce.svg", "Fresh-flowers.svg");
    const giftIcon = getImagePath("poklon-artikli.svg", "Gifts.svg");
    const eventsIcon = getImagePath("Dogadanja.svg", "Events.svg");
    const arrangementsIcon = getImagePath(
      "Aranzmani.svg",
      "Flower-arrangements.svg"
    );
    const deliveryIcon = getImagePath("usluge-dostave.svg", "Delivery.svg");
    const accessoriesIcon = getImagePath(
      "cvjetni-dodaci.svg",
      "Flower-accessories.svg"
    );

    return {
      t,
      flowerIcon,
      giftIcon,
      eventsIcon,
      arrangementsIcon,
      accessoriesIcon,
      deliveryIcon,
    };
  },

  mounted() {
    this.initIntersectionObserver();
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "auto"; // Reset overflow
  },
  beforeUnmount() {
    document.body.style.overflow = "auto"; // Reset overflow
  },
  methods: {
    initIntersectionObserver() {
      const section = this.$refs.section1;

      if (!section) {
        console.error("Section1 not found");
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          this.isSectionVisible = entry.isIntersecting;
        });
      });

      observer.observe(section);
    },
    redirectToContact() {
      // Use this.$router to navigate
      this.$router.push("/contact-melani");
    },
    toggleSubmenuPonuda() {
      this.submenuPonuda = !this.submenuPonuda;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;

      // Use a more robust method to control body overflow
      if (this.isMobileMenuOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
};
</script>
<style scoped>
/* Optional: Custom styling for navigation */
.owl-prev,
.owl-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.owl-prev {
  left: -20px;
}
.owl-next {
  right: -20px;
}
</style>
