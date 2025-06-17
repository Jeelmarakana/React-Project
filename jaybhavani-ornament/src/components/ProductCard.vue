<template>
  <div class="card" @click="handleClick">
    <img :src="image" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
});

function handleClick() {
  // Simple animation or effect on click
  alert(`${props.title} clicked!`);
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 12px;
  width: 220px;
  text-align: center;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.4s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.card h3 {
  margin: 0.5rem 0 0.2rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.card p {
  font-size: 0.9rem;
  color: #666;
}
</style>
