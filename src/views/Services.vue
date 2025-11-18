<template>
  <div class="services-page">
    <main>
      <div class="container">
        <h1>{{ $t('nav.services') }}</h1>
        <p>This page is under construction.</p>
      </div>
    </main>
  </div>
</template>

<script setup>

defineOptions({
  name: 'Services'
})
</script>

<style scoped>
.services-page {
  min-height: 60vh;
  padding: 60px 0;
  padding-top: 100px;
}

.services-page h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.services-page p {
  font-size: 16px;
  color: #666;
}
</style>

