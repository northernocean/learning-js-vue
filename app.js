const app = Vue.createApp({

  data() {
    return {
      checkboxes: {A: false, B: false, C:false}
    };
  },
  methods: {
    boxSelected(box) {
      console.log(`box selected - ${box}`);
      this.checkboxes[box] = !this.checkboxes[box];
      }
    }
}).mount("#styling");