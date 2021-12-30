<script setup lang="ts">
  defineProps({
    dice: {
      type: Number,
      required: false,
      default: 100,
    },
  });
</script>

<template>
  <span>
    <slot>Roll: {{ Math.floor(Math.random() * dice + 1) }}</slot>
  </span>
</template>
