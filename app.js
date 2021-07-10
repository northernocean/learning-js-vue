const app = Vue.createApp({
  data() {
    return {
      courseGoal0: 'Be a great programmer!',
      courseGoal1: 'Finish the course and know Vue!',
      courseGoal2: 'Master Vue and build amazing apps',
      courseGoal3: '<b>Vue Vue Vue</b>',
      vueLink: 'https://vuejs.org'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < .5){
        return this.courseGoal1;
      } else {
        return this.courseGoal2;
      }
    }
  }
});
app.mount('#user-goal');