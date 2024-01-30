<template>
  <div class="diagonal-list">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
  </div>
  <canvas width="360" height="360" style="position: absolute; top: 365.5px; left: 396.5px; width: 180px; height: 180px;"></canvas>
</template>

<script setup>

</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.diagonal-list {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.item {
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  margin: 5px;
  transform-origin: 0 100%;
  transform: skewY(-15deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: skewY(0);
  }

  &:not(:last-child) {
    margin-bottom: 0;
  }
}


</style>
