<template>
  <base-card>
    <div class="foo">
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      <p>{{ infoText }}</p>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>