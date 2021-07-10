const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      username: "",
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
    inputChanged(e) {
      console.log(e);
      this.username = e.target.value;
    },
    inputUpdated(e) {
      console.log(e);
      this.username = '|' + e.target.value + '|';
    },
    submitForm(e) {
      console.log(e);
      alert("submitted");
    },
  },
});

app.mount('#events');
