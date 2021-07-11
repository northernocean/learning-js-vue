const app = Vue.createApp({
  data() {
    return {
      result1: 'OUTPUT',
      result2: 'OUTPUT'
    }
  },
  methods: {
    showAlert() {
      window.alert("Clicked!");
    },
    outputResult1(e) {
      this.result1 = e.target.value;
    },
    outputResult2(e) {
      this.result2 = e.target.value;
    },
  }
}).mount('#assignment');