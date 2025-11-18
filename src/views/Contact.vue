<template>
  <div class="contact-page">
    <main>
      <div class="container">
        <h1>{{ $t('nav.contactUs') }}</h1>
        <p>This page is under construction.</p>
      </div>
    </main>
  </div>
</template>

<script setup>

defineOptions({
  name: 'Contact'
})
</script>

<style scoped>
.contact-page {
  min-height: 60vh;
  padding: 60px 0;
  padding-top: 100px;
}

.contact-page h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.contact-page p {
  font-size: 16px;
  color: #666;
}
</style>

