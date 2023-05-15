<script setup>
    const props = defineProps(['result'])
</script>
<template>
    <p>
      O resultado é
      <span> {{ props.result }} </span>
    </p>
</template>

<style scoped>
    p {
        font-size: 26px;
    }
</style>