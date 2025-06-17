<template>
  <main class="contact-container">
    <transition name="fade-slide">
      <h1>Contact Us</h1>
    </transition>

    <transition name="fade">
      <p>
        For inquiries, bulk orders, or any assistance, feel free to reach out.
      </p>
    </transition>

    <transition name="fade-slide">
      <ul>
        <li>
          <strong>Address:</strong> Shop No. 103, Vastu Palace-B, Pasodara
          Patiya, Kamrej, Surat, Gujarat 395006
        </li>
        <li>
          <strong>Email:</strong>
          <a href="mailto:jaybhavani@gmail.com">jaybhavani@gmail.com</a>
        </li>
        <li class="contact-row">
          <strong>Contact:</strong>
          <span class="contact-pair">
            Sunil Vaghasiya —
            <a href="tel:+919898426635">+91 9898426635</a> &nbsp;|&nbsp; Avi
            Marakana — <a href="tel:+919898426634">+91 9898426634</a>
          </span>
        </li>
      </ul>
    </transition>

    <transition name="zoom-in">
      <div class="map-wrapper" @click="zoomMap" :class="{ zoomed: mapZoomed }">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2940297155143!2d72.94440707595266!3d21.261537780426853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051a9838ee989%3A0x37e949a0b92e1ac3!2sShop%20No.%20103%2C%20Vastu%20Palace-B%2C%20Pasodara%20Patiya%2C%20Kamrej%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1718612345678!5m2!1sen!2sin"
          width="100%"
          height="300"
          style="border: 0; border-radius: 12px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </transition>
  </main>
</template>

<script setup>
import { ref } from "vue";

const mapZoomed = ref(false);

const zoomMap = () => {
  mapZoomed.value = !mapZoomed.value;
};
</script>

<style scoped>
.contact-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-size: 1.1rem;
  color: #333;
  animation: fadeIn 1s ease-in-out;
}

.contact-container h1 {
  text-align: center;
  color: #8a4fff;
  margin-bottom: 1rem;
}

.contact-container ul {
  list-style: none;
  padding: 0;
}

.contact-container li {
  margin: 0.5rem 0;
}

.contact-row {
  display: flex;
  flex-direction: column;
}

.contact-pair {
  margin-top: 0.2rem;
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.contact-container a {
  color: #8a4fff;
  text-decoration: none;
}

.contact-container a:hover {
  text-decoration: underline;
}

.map-wrapper {
  margin-top: 2rem;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.5s ease;
  cursor: pointer;
}
.map-wrapper:hover {
  transform: scale(1.01);
}
.map-wrapper.zoomed {
  transform: scale(1.03);
}

/* Animation Transitions */
.fade-slide-enter-active {
  animation: fadeSlideIn 0.8s ease-out;
}
.fade-slide-leave-active {
  animation: fadeSlideOut 0.4s ease-in;
}
.fade-enter-active {
  animation: fadeIn 1s ease;
}
.fade-leave-active {
  animation: fadeOut 0.5s ease;
}
.zoom-in-enter-active {
  animation: zoomIn 0.6s ease-in-out;
}

/* Keyframes */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeSlideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
