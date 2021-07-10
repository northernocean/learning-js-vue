const app = Vue.createApp({
  data() {
    return {
      username: 'David',
      age: 53,
      img_url: 'https://images.unsplash.com/photo-1625842225647-b992f27faf01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      placeholder: 'Enter text here...'
    }
  },
  methods: {
    getRandomInt(min, max) {
      //The maximum is exclusive and the minimum is inclusive
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    myName() {
      // example of using the Vue "this" to access app data
      return this.username;
    }
  }
});
app.mount('#assignment');