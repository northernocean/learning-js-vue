const app = Vue.createApp({
  data() {
    return {
      user1: false,
      user2: false,
      paragraphHidden: false,
      paragraphBgColor: 'inherit'
    }
  },
  computed: {

  },
  methods: {
    updateUserClass(e) {
      if(e.target.value === 'user1'){
        this.user1 = true;
        this.user2 = false;
      } else if (e.target.value === 'user2') {
        this.user1 = false;
        this.user2 = true;
      }
      else {
        this.user1 = false;
        this.user2 = false;
      }
    },
    toggleParagraph() {
      this.paragraphHidden = !this.paragraphHidden;
    },
    setParagraphColor(e) {
      this.paragraphBgColor = e.target.value;
    }
  }
}).mount('#assignment');