const app = Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  computed: {
    displayResult() {
      if (this.counter < 37) {
        return "Not there yet!"
      }
      else if (this.counter === 37) {
        return "Result: 37"
      }
      else {
        return "too much!"
      }
    }
  },
  watch: {
    counter() {
      that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    }
  },
  methods: {
    add(value) {
      this.counter += value;
    }
  },
}).mount("#assignment");