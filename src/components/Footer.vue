<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ $t('footer.aboutUs') }}</h3>
          <p>admin@anjet-sender.com</p>
          <p>{{ $t('footer.contactPerson') }}</p>
          <p>{{ $t('footer.phone') }}</p>
        </div>
        <div class="footer-section">
          <h3>{{ $t('footer.customerServices') }}</h3>
          <p>{{ $t('footer.aog') }}</p>
          <p>{{ $t('footer.phone') }}</p>
        </div>
      </div>
      <div class="footer-copyright">
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
  padding: 40px 0 20px;
  margin-top: 60px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #fff;
}

.footer-section p {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 8px;
  line-height: 1.6;
}

.footer-copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
}

.footer-copyright p {
  font-size: 12px;
  color: #999;
}

@media (max-width: 768px) {
  .footer {
    padding: 30px 0 15px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-section h3 {
    font-size: 16px;
  }

  .footer-section p {
    font-size: 13px;
  }
}
</style>
