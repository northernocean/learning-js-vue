<template>
  <ul>
    <li :class="{ active: activeRatingOption === 'poor' }">
      <button type="button" @click="setActiveRatingOption('poor')">Poor</button>
    </li>
    <li :class="{ active: activeRatingOption === 'average' }">
      <button type="button" @click="setActiveRatingOption('average')">
        Average
      </button>
    </li>
    <li :class="{ active: activeRatingOption === 'great' }">
      <button type="button" @click="setActiveRatingOption('great')">
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      activeRatingOption: this.modelValue,
    };
  },
  methods: {
    setActiveRatingOption(option) {
      this.activeRatingOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.active {
  border-color: #a00078;
}

.active button {
  border-color: #a00078;
}
</style>