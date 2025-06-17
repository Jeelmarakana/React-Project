<template>
  <section>
    <h2>Our Products</h2>
    <div class="grid">
      <ProductCard
        title="Silver Chain"
        description="Pure silver chain design"
        image="https://aadyaa.com/cdn/shop/products/silver_necklace_green_onyx_small_2.jpg?v=1707131546&width=600"
      />
      <ProductCard
        title="Silver Anklet"
        description="Premium anklets"
        image="https://images.cltstatic.com/media/product/350/AI00107-SS0000-stars-aligned-anklets-in--silver-prd-1-model.jpg"
      />
      <ProductCard
        title="Silver Ring"
        description="Designer rings for everyone"
        image="https://erisilvers.com/cdn/shop/files/159_1066x.jpg?v=1734756342"
      />
      <ProductCard
        title="Silver Bangles"
        description="Elegant bangles for women"
        image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSy-gUvxmC1qGqVapgySe9FoG8Jd20nXozZf6vLJrxd_4vdzt682gXaxHgLmMSDEZ1VfdVV1LGMt9lo523DFcGnPWO9HR-EOyfDtmPs9-qk"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
</script>

<style scoped>
section {
  padding: 2rem;
  text-align: center;
}
h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.grid {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
