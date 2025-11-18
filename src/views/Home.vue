<template>
  <div class="home" :class="{ 'lang-en': isEnglish }">
    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-image">
          <img src="/images/home/hero-airplane.png" alt="Cargo Ship" />
          <div class="hero-overlay">
            <div class="hero-content">
              <h1 class="hero-title">{{ $t('home.companyName') }}</h1>
              <p v-if="!isEnglish" class="hero-subtitle">{{ $t('home.companyNameEn') }}</p>
              <p class="hero-slogan">{{ $t('home.heroSlogan') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Company Introduction -->
      <section class="company-intro">
        <div class="container">
          <h2 class="section-title">{{ $t('home.companyIntro.title') }}</h2>
          <p v-if="!isEnglish" class="section-subtitle">{{ $t('home.companyIntro.titleEn') }}</p>
          <div class="intro-content">
            <div class="intro-left">
              <div class="principles-header">
                <img src="/images/home/icon-box.png" alt="Box Icon" class="icon-img" />
                <h3 class="principles-title">{{ $t('home.companyIntro.principles') }}</h3>
              </div>
              <p class="intro-text">{{ $t('home.companyIntro.description') }}</p>
            </div>
            <div class="intro-right">
              <img src="/images/home/ship-containers.jpg" alt="Shipping Containers" />
            </div>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section class="services-section">
        <div class="container">
          <div class="services-grid">
            <div class="service-card">
              <div class="service-header">
                <img src="/images/home/icon-express.png" alt="Express Icon" class="service-icon" />
                <div class="service-title-group">
                  <h3>{{ $t('home.services.internationalExpress.title') }}</h3>
                  <p v-if="!isEnglish" class="service-subtitle">{{ $t('home.services.internationalExpress.titleEn') }}</p>
                </div>
              </div>
              <p class="service-description">{{ $t('home.services.internationalExpress.description') }}</p>
            </div>
            <div class="service-card">
              <div class="service-header">
                <img src="/images/home/icon-customs.png" alt="Customs Icon" class="service-icon" />
                <div class="service-title-group">
                  <h3>{{ $t('home.services.customsClearance.title') }}</h3>
                  <p v-if="!isEnglish" class="service-subtitle">{{ $t('home.services.customsClearance.titleEn') }}</p>
                </div>
              </div>
              <p class="service-description">{{ $t('home.services.customsClearance.description') }}</p>
            </div>
            <div class="service-card">
              <div class="service-header">
                <img src="/images/home/icon-transport.png" alt="Transport Icon" class="service-icon" />
                <div class="service-title-group">
                  <h3>{{ $t('home.services.transportation.title') }}</h3>
                  <p v-if="!isEnglish" class="service-subtitle">{{ $t('home.services.transportation.titleEn') }}</p>
                </div>
              </div>
              <p class="service-description">{{ $t('home.services.transportation.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Advantages -->
      <section class="advantages-section">
        <div class="container">
          <h2 class="section-title">{{ $t('home.advantages.title') }}</h2>
          <p v-if="!isEnglish" class="section-subtitle">{{ $t('home.advantages.titleEn') }}</p>
          <div class="advantages-content">
            <div class="advantages-image">
              <img src="/images/home/containers-stack.jpg" alt="Containers Stack" />
            </div>
            <div class="advantages-grid">
              <div class="advantage-card">
                <div class="advantage-header">
                  <div class="advantage-title-group">
                    <h3>{{ $t('home.advantages.professional.title') }}</h3>
                    <p class="advantage-subtitle">{{ $t('home.advantages.professional.subtitle') }}</p>
                  </div>
                  <img src="/images/home/icon-professional.png" alt="Professional Icon" class="advantage-icon" />
                </div>
              </div>
              <div class="advantage-card">
                <div class="advantage-header">
                  <div class="advantage-title-group">
                    <h3>{{ $t('home.advantages.globalNetwork.title') }}</h3>
                    <p class="advantage-subtitle">{{ $t('home.advantages.globalNetwork.subtitle') }}</p>
                  </div>
                  <img src="/images/home/icon-network.png" alt="Network Icon" class="advantage-icon" />
                </div>
              </div>
              <div class="advantage-card">
                <div class="advantage-header">
                  <div class="advantage-title-group">
                    <h3>{{ $t('home.advantages.teamwork.title') }}</h3>
                    <p class="advantage-subtitle">{{ $t('home.advantages.teamwork.subtitle') }}</p>
                  </div>
                  <img src="/images/home/icon-teamwork.png" alt="Teamwork Icon" class="advantage-icon" />
                </div>
              </div>
              <div class="advantage-card">
                <div class="advantage-header">
                  <div class="advantage-title-group">
                    <h3>{{ $t('home.advantages.cost.title') }}</h3>
                    <p class="advantage-subtitle">{{ $t('home.advantages.cost.subtitle') }}</p>
                  </div>
                  <img src="/images/home/icon-cost.png" alt="Cost Icon" class="advantage-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'Home'
})

const { locale } = useI18n()
const isEnglish = computed(() => locale.value === 'en-US')
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
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
  object-fit: cover;
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
}

/* Company Introduction */
.company-intro {
  padding: 60px 0;
  background: #fff;
}

.lang-en .company-intro {
  padding: 50px 0;
}

.company-intro .container {
  text-align: center;
}

.company-intro .intro-content {
  text-align: left;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 50px;
  align-items: flex-start;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.lang-en .intro-content {
  gap: 50px;
  margin-top: 40px;
}

.intro-left {
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: left;
}

.lang-en .intro-left {
  gap: 18px;
}

.principles-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.principles-header .icon-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  flex-shrink: 0;
}

.principles-title {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0;
  line-height: 1.4;
}

.intro-text {
  font-size: 16px;
  line-height: 2;
  color: #666;
  margin: 0;
  text-align: left;
}

.lang-en .intro-text {
  line-height: 1.6;
}

.intro-right {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.intro-right img {
  width: 100%;
  height: auto;
  border-radius: 0;
  object-fit: cover;
  transition: transform 0.3s, box-shadow 0.3s;
}

.intro-right img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Services Section */
.services-section {
  padding: 30px 0 60px;
  background: #fff;
}

.lang-en .services-section {
  padding: 25px 0 50px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 30px;
}

.lang-en .services-grid {
  gap: 25px;
  margin-top: 25px;
}

.service-card {
  text-align: left;
  padding: 40px 30px;
  border-radius: 0;
  background: #f0f7ff;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.lang-en .service-card {
  padding: 30px 25px;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.service-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
}

.lang-en .service-header {
  margin-bottom: 10px;
}

.service-card .service-icon {
  width: 3.2em;
  height: 3.2em;
  object-fit: contain;
  flex-shrink: 0;
  margin-top: 0.1em;
}

.service-title-group {
  flex: 1;
}

.service-card h3 {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 5px;
  color: #333;
  line-height: 1.4;
}

.service-card .service-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.4;
  text-align: left;
}

.service-card .service-description {
  font-size: 15px;
  line-height: 1.8;
  color: #666;
  margin: 0;
  text-align: left;
}

.lang-en .service-card .service-description {
  line-height: 1.5;
}

/* Advantages Section */
.advantages-section {
  padding: 0;
  background: #fff;
}

.advantages-section .container {
  text-align: center;
}

.advantages-section .advantages-content {
  text-align: left;
}

.lang-en .advantages-section {
  padding: 0;
}

.advantages-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
  align-items: stretch;
}

.lang-en .advantages-content {
  gap: 35px;
  margin-top: 35px;
}

.advantages-image {
  display: flex;
  align-items: stretch;
  overflow: hidden;
}

.advantages-image img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s, box-shadow 0.3s;
}

.advantages-image img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.advantages-grid {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.advantage-card {
  padding: 20px;
  background: #fff;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  flex: 1;
}

.lang-en .advantage-card {
  padding: 15px 20px;
}

.advantage-card:last-child {
  border-bottom: none;
}

.advantage-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
}

.lang-en .advantage-header {
  gap: 12px;
}

.advantage-title-group {
  flex: 1;
}

.advantage-card .advantage-icon {
  width: 2.8em;
  height: 2.8em;
  object-fit: contain;
  flex-shrink: 0;
  margin-top: 0.1em;
}

.advantage-card h3 {
  font-size: 18px;
  margin: 0 0 5px;
  color: #333;
  line-height: 1.4;
}

.advantage-card .advantage-subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
  text-align: left;
  line-height: 1.4;
}

.lang-en .advantage-card .advantage-subtitle {
  line-height: 1.3;
}

@media (max-width: 768px) {
  .hero-section {
    height: 400px;
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

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .intro-content,
  .advantages-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .principles-header .icon-img {
    width: 60px;
    height: 60px;
  }

  .principles-title {
    font-size: 24px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-header {
    gap: 10px;
  }

  .service-card .service-icon {
    width: 3em;
    height: 3em;
  }

  .advantage-header {
    gap: 8px;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .advantage-card .advantage-icon {
    width: 36px;
    height: 36px;
  }
}

</style>
