const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphHidden: false,
      paragraphBgColor: 'inherit'
    }
  },
  computed: {

  },
  methods: {
    toggleParagraph() {
      this.paragraphHidden = !this.paragraphHidden;
    },
    setParagraphColor(e) {
      this.paragraphBgColor = e.target.value;
    }
  }
}).mount('#assignment');