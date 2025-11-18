<template>
  <div class="about-page">
    <main>
      <div class="container">
        <h1>{{ $t('nav.aboutUs') }}</h1>
        <p>This page is under construction.</p>
      </div>
    </main>
  </div>
</template>

<script setup>

defineOptions({
  name: 'About'
})
</script>

<style scoped>
.about-page {
  min-height: 60vh;
  padding: 60px 0;
  padding-top: 100px;
}

.about-page h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.about-page p {
  font-size: 16px;
  color: #666;
}
</style>

