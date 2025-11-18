<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-contact">
        <div class="contact-left">
          <div class="contact-item">
            <span class="contact-label">Contact:</span>
            <span class="contact-value">Tony</span>
          </div>
        </div>
        <div class="contact-right">
          <div class="contact-item">
            <span class="contact-label">Phone:</span>
            <a href="tel:+8613141314088" class="contact-value link">+86 13141314088</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">Email:</span>
            <a href="mailto:admin@anjet-sender.com" class="contact-value link">admin@anjet-sender.com</a>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>Copyright © 2024 Beijing Anjet-Sender International Logistics Co., Ltd. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background: #2c3e50;
  color: #fff;
  padding: 25px 0 15px;
  margin-top: 60px;
}

.footer-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 80px;
}

.contact-left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 40px;
}

.contact-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  margin-bottom: 8px;
  white-space: nowrap;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-label {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  min-width: 60px;
  text-align: left;
}

.contact-value {
  color: rgba(255, 255, 255, 0.9);
}

.contact-value.link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s;
}

.contact-value.link:hover {
  color: #fff;
  text-decoration: underline;
}

.footer-copyright {
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-copyright p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .footer {
    padding: 6px;
  }

  .footer-contact {
    grid-template-columns: 1fr;
    gap: 0;
    margin-bottom: 15px;
    padding-right: 0;
  }

  .contact-left {
    align-items: flex-start;
    padding-right: 0;
  }

  .contact-item {
    font-size: 13px;
    margin-bottom: 0;
  }

  .footer-copyright {
    padding-top: 12px;
  }
}
</style>
