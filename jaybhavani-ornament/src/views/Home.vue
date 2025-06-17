<template>
  <main class="home-container">
    <section class="hero">
      <h1>Welcome to <span>Jay Bhavani Ornament</span></h1>
      <p>Wholesalers of Silver Ornaments located in Surat.</p>
      <router-link to="/products" class="btn">Explore Products</router-link>
    </section>

    <section class="features">
      <div
        class="feature-card"
        v-for="feature in features"
        :key="feature.title"
      >
        <img :src="feature.img" :alt="feature.title" />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.text }}</p>
      </div>
    </section>
  </main>
</template>

<script setup>
const features = [
  {
    title: "Premium Quality",
    text: "Only the finest silver ornaments, crafted with care.",
    img: "/img/quality.png",
  },
  {
    title: "Wholesale Rates",
    text: "Best price guarantee for bulk buyers.",
    img: "/img/wholesale.png",
  },
  {
    title: "Trusted by Many",
    text: "Serving clients across Gujarat with trust & satisfaction.",
    img: "/img/trust.png",
  },
];
</script>

<style scoped>
.home-container {
  padding: 2rem;
  text-align: center;
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero {
  background: linear-gradient(to right, #eee, #fff);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.hero:hover {
  transform: translateY(-5px);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.hero h1 span {
  color: #8a4fff;
  font-weight: bold;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
.hero .btn {
  background-color: #8a4fff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
}
.hero .btn:hover {
  background-color: #6a35d5;
  transform: scale(1.05);
}

.features {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  width: 250px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.feature-card img {
  width: 60px;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1.1rem;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
}
</style>
