const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphHidden: false,
      paragraphBgColor: ''
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        hidden: this.paragraphHidden
      };
    }
  },
  methods: {
    toggleParagraph() {
      this.paragraphHidden = !this.paragraphHidden;
    }
  }
}).mount('#assignment');