<template>
  <div class="services-page" :class="{ 'lang-en': isEnglish }">
    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-image">
          <img src="/images/services/hero-ship.jpeg" />
          <div class="hero-overlay">
            <div class="hero-content">
              <h1 class="hero-title">{{ $t('home.companyName') }}</h1>
              <p v-if="!isEnglish" class="hero-subtitle">{{ $t('home.companyNameEn') }}</p>
              <p class="hero-slogan">{{ $t('home.heroSlogan') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Business Section - Full Width -->
      <section class="main-business-section">
        <div class="container">
          <h2 class="section-title">{{ $t('about.mainBusiness.title') }}</h2>
          <p v-if="!isEnglish" class="section-subtitle">{{ $t('about.mainBusiness.titleEn') }}</p>
        </div>
      </section>

      <!-- Services Grid Section -->
      <section class="services-grid-section">
        <div class="container">
          <!-- Desktop Layout: 图、字、字、图、图、字、字、图 -->
          <div v-if="!isMobile" class="services-grid">
            <!-- Service 1: Image -->
            <div class="grid-item grid-image-1">
              <div class="image-wrapper">
                <img src="/images/services/port-containers.jpg" />
              </div>
            </div>

            <!-- Service 1: Text -->
            <div class="grid-item grid-text-1">
              <h3 class="service-title">{{ $t('services.transportation.title') }}</h3>
              <p v-if="!isEnglish" class="service-title-en">{{ $t('services.transportation.titleEn') }}</p>
              <p class="service-description">{{ $t('services.transportation.description') }}</p>
            </div>

            <!-- Service 2: Text -->
            <div class="grid-item grid-text-2">
              <h3 class="service-title">{{ $t('services.customsClearance.title') }}</h3>
              <p v-if="!isEnglish" class="service-title-en">{{ $t('services.customsClearance.titleEn') }}</p>
              <p class="service-description">{{ $t('services.customsClearance.description') }}</p>
            </div>

            <!-- Service 2: Image -->
            <div class="grid-item grid-image-2">
              <div class="image-wrapper">
                <img src="/images/services/warehouse-containers.png" />
              </div>
            </div>

            <!-- Service 3: Image -->
            <div class="grid-item grid-image-3">
              <div class="image-wrapper">
                <img src="/images/services/container-containers.png" />
              </div>
            </div>

            <!-- Service 3: Text -->
            <div class="grid-item grid-text-3">
              <h3 class="service-title">{{ $t('services.internationalExpress.title') }}</h3>
              <p v-if="!isEnglish" class="service-title-en">{{ $t('services.internationalExpress.titleEn') }}</p>
              <p class="service-description">{{ $t('services.internationalExpress.description') }}</p>
            </div>

            <!-- Service 4: Text -->
            <div class="grid-item grid-text-4">
              <h3 class="service-title">{{ $t('services.domesticTransportation.title') }}</h3>
              <p v-if="!isEnglish" class="service-title-en">{{ $t('services.domesticTransportation.titleEn') }}</p>
              <p class="service-description">{{ $t('services.domesticTransportation.description') }}</p>
            </div>

            <!-- Service 4: Image -->
            <div class="grid-item grid-image-4">
              <div class="image-wrapper">
                <img src="/images/services/bus-containers.png" />
              </div>
            </div>
          </div>

          <!-- Mobile Layout: 图、字、图、字、图、字、图、字 -->
          <div v-else class="services-grid">
            <!-- Service 1: Image -->
            <div class="grid-item grid-image-1">
              <div class="image-wrapper">
                <img src="/images/services/port-containers.jpg" />
              </div>
            </div>

            <!-- Service 1: Text -->
            <div class="grid-item grid-text-1">
              <h3 class="service-title">{{ $t('services.transportation.title') }}</h3>
              <p v-if="!isEnglish" class="service-title-en">{{ $t('services.transportation.titleEn') }}</p>
              <p class="service-description">{{ $t('services.transportation.description') }}</p>
            </div>

            <!-- Service 2: Image -->
            <div class="grid-item grid-image-2">
              <div class="image-wrapper">
                <img src="/images/services/warehouse-containers.png" />
              </div>
            </div>

            <!-- Service 2: Text -->
            <div class="grid-item grid-text-2">
              <h3 class="service-title">{{ $t('services.customsClearance.title') }}</h3>
              <p v-if="!isEnglish" class="service-title-en">{{ $t('services.customsClearance.titleEn') }}</p>
              <p class="service-description">{{ $t('services.customsClearance.description') }}</p>
            </div>

            <!-- Service 3: Image -->
            <div class="grid-item grid-image-3">
              <div class="image-wrapper">
                <img src="/images/services/container-containers.png" />
              </div>
            </div>

            <!-- Service 3: Text -->
            <div class="grid-item grid-text-3">
              <h3 class="service-title">{{ $t('services.internationalExpress.title') }}</h3>
              <p v-if="!isEnglish" class="service-title-en">{{ $t('services.internationalExpress.titleEn') }}</p>
              <p class="service-description">{{ $t('services.internationalExpress.description') }}</p>
            </div>

            <!-- Service 4: Image -->
            <div class="grid-item grid-image-4">
              <div class="image-wrapper">
                <img src="/images/services/bus-containers.png" />
              </div>
            </div>

            <!-- Service 4: Text -->
            <div class="grid-item grid-text-4">
              <h3 class="service-title">{{ $t('services.domesticTransportation.title') }}</h3>
              <p v-if="!isEnglish" class="service-title-en">{{ $t('services.domesticTransportation.titleEn') }}</p>
              <p class="service-description">{{ $t('services.domesticTransportation.description') }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'Services'
})

const { locale } = useI18n()
const isEnglish = computed(() => locale.value === 'en-US')

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.services-page {
  min-height: 60vh;
  padding-top: 0;
  background: #fff;
}

.services-page main {
  height: auto;
  min-height: 0;
}

/* Hero Section */
.hero-section {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-top: 80px;
}

.hero-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: #fff;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.lang-en .hero-content {
  max-width: 1200px;
}

.hero-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 10px;
}

.lang-en .hero-title {
  white-space: nowrap;
  text-align: center;
  display: block;
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.hero-slogan {
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* Main Business Section - Full Width */
.main-business-section {
  padding: 60px 0 60px;
  background: #fff;
}

.lang-en .main-business-section {
  padding: 50px 0 50px;
}

.main-business-section .container {
  text-align: center;
}

/* Common Styles */
.section-title {
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 0;
}

/* Services Grid Section */
.services-grid-section {
  padding: 0;
  background: #fff;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  height: 1600px;
}

.lang-en .services-grid {
  gap: 35px;
  height: 1500px;
}

.grid-item {
  display: flex;
  align-items: stretch;
  min-height: 0;
}

/* Desktop Grid Positions */
.grid-image-1 {
  grid-column: 1;
  grid-row: 1;
}

.grid-text-1 {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
}

.grid-text-2 {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
}

.grid-image-2 {
  grid-column: 2;
  grid-row: 2;
}

.grid-image-3 {
  grid-column: 1;
  grid-row: 3;
}

.grid-text-3 {
  grid-column: 2;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
}

.grid-text-4 {
  grid-column: 1;
  grid-row: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
}

.grid-image-4 {
  grid-column: 2;
  grid-row: 4;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 0;
  object-fit: cover;
  transition: transform 0.3s, box-shadow 0.3s;
}

.image-wrapper img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.service-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  text-align: left;
}

.service-title-en {
  font-size: 18px;
  color: #666;
  margin-bottom: 15px;
  text-align: left;
}

.service-description {
  font-size: 16px;
  line-height: 2;
  color: #666;
  margin: 0;
  text-align: left;
}

.lang-en .service-description {
  line-height: 1.6;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .services-page {
    padding-top: 0;
  }

  .hero-section {
    height: 400px;
    margin-top: 80px;
  }

  .hero-content {
    padding: 15px;
  }

  .hero-title {
    font-size: 24px;
    line-height: 1.3;
    word-break: keep-all;
  }

  .lang-en .hero-title {
    white-space: normal;
    font-size: 20px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-slogan {
    font-size: 14px;
  }

  .hero-image img {
    object-fit: cover;
    object-position: 92% center;
  }

  .main-business-section {
    padding: 40px 0 30px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .services-grid-section {
    padding: 0;
  }

  .services-page main {
    height: auto;
    min-height: 0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, auto);
    gap: 30px;
    height: auto !important;
    min-height: 0 !important;
  }

  .grid-item {
    align-items: flex-start;
  }

  .grid-image-1 {
    grid-column: 1;
    grid-row: 1;
  }

  .grid-text-1 {
    grid-column: 1;
    grid-row: 2;
    padding: 1px;
  }

  .grid-image-2 {
    grid-column: 1;
    grid-row: 3;
  }

  .grid-text-2 {
    grid-column: 1;
    grid-row: 4;
    padding: 1px;
  }

  .grid-image-3 {
    grid-column: 1;
    grid-row: 5;
  }

  .grid-text-3 {
    grid-column: 1;
    grid-row: 6;
    padding: 1px;
  }

  .grid-image-4 {
    grid-column: 1;
    grid-row: 7;
  }

  .grid-text-4 {
    grid-column: 1;
    grid-row: 8;
    padding: 1px;
  }

  .image-wrapper {
    height: 250px;
    min-height: 250px;
  }

  .image-wrapper img {
    object-fit: cover;
    height: 100%;
  }

  .service-title {
    font-size: 20px;
  }

  .service-title-en {
    font-size: 16px;
  }

  .service-description {
    font-size: 14px;
    line-height: 1.8;
    width: 100%;
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .lang-en .service-description {
    line-height: 1.6;
    font-size: 13px;
  }
}
</style>
