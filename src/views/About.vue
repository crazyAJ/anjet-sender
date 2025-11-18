<template>
  <div class="about-page" :class="{ 'lang-en': isEnglish }">
    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-image">
          <img src="/images/about/hero-ship.png" alt="Hero Ship" />
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

      <!-- Content Grid Section - 2x2 Layout -->
      <section class="content-grid-section">
        <div class="container">
          <!-- Desktop Layout: 图、字、字、图 -->
          <div v-if="!isMobile" class="content-grid">
            <!-- Top Left: Image -->
            <div class="grid-item grid-image-top-left">
              <div class="image-wrapper">
                <img src="/images/about/ship-containers.png" alt="Ship Containers" />
              </div>
            </div>

            <!-- Top Right: Services Text -->
            <div class="grid-item grid-text-top-right">
              <p class="description-text">{{ $t('about.services.description') }}</p>
            </div>

            <!-- Bottom Left: Company Text -->
            <div class="grid-item grid-text-bottom-left">
              <p class="description-text">{{ $t('about.company.description') }}</p>
            </div>

            <!-- Bottom Right: Image -->
            <div class="grid-item grid-image-bottom-right">
              <div class="image-wrapper">
                <img src="/images/about/package-containers.png" alt="Package Containers" />
              </div>
            </div>
          </div>

          <!-- Mobile Layout: 图、字、图、字 -->
          <div v-else class="content-grid content-grid-mobile">
            <!-- Image 1 -->
            <div class="grid-item grid-image-top-left">
              <div class="image-wrapper">
                <img src="/images/about/ship-containers.png" alt="Ship Containers" />
              </div>
            </div>

            <!-- Text 1 -->
            <div class="grid-item grid-text-top-right">
              <p class="description-text">{{ $t('about.services.description') }}</p>
            </div>

            <!-- Image 2 -->
            <div class="grid-item grid-image-bottom-right">
              <div class="image-wrapper">
                <img src="/images/about/package-containers.png" alt="Package Containers" />
              </div>
            </div>

            <!-- Text 2 -->
            <div class="grid-item grid-text-bottom-left">
              <p class="description-text">{{ $t('about.company.description') }}</p>
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
  name: 'About'
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
.about-page {
  min-height: 60vh;
  padding-top: 0;
  background: #fff;
}

.about-page main {
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

/* Content Grid Section - 2x2 Layout */
.content-grid-section {
  padding: 0 0 60px;
  background: #fff;
}

.lang-en .content-grid-section {
  padding: 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  height: 800px;
}

.lang-en .content-grid {
  gap: 35px;
  height: 750px;
}

.grid-item {
  display: flex;
  align-items: stretch;
  min-height: 0;
}

.grid-image-top-left {
  grid-column: 1;
  grid-row: 1;
}

.grid-text-top-right {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: flex-start;
}

.grid-text-bottom-left {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: flex-start;
}

.grid-image-bottom-right {
  grid-column: 2;
  grid-row: 2;
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

.description-text {
  font-size: 16px;
  line-height: 2;
  color: #666;
  margin: 0;
  text-align: left;
}

.lang-en .description-text {
  line-height: 1.6;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .about-page {
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
  }

  .main-business-section {
    padding: 40px 0 30px;
  }

  .about-page main {
    height: auto;
    min-height: 0;
  }

  .content-grid-section {
    padding: 0;
    height: auto !important;
    min-height: 0 !important;
  }

  .content-grid-section .container {
    height: auto !important;
    min-height: 0 !important;
  }

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .content-grid,
  .content-grid-mobile {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 30px;
    height: auto !important;
    min-height: 0 !important;
  }

  .grid-item {
    align-items: flex-start;
  }

  .grid-image-top-left {
    grid-column: 1;
    grid-row: 1;
  }

  .grid-text-top-right {
    grid-column: 1;
    grid-row: 2;
  }

  .grid-image-bottom-right {
    grid-column: 1;
    grid-row: 3;
  }

  .grid-text-bottom-left {
    grid-column: 1;
    grid-row: 4;
  }

  .image-wrapper {
    height: 250px;
    min-height: 250px;
  }

  .image-wrapper img {
    object-fit: cover;
    height: 100%;
  }

  .description-text {
    font-size: 14px;
    line-height: 1.8;
    width: 100%;
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .lang-en .description-text {
    line-height: 1.6;
    font-size: 13px;
  }
}
</style>
