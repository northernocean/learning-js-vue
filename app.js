const app = Vue.createApp({

  data() {
    return {
      newTask: '',
      tasks: [],
      taskListIsHidden: false,
    }
  },
  computed: {
    buttonCaption() {
      return (this.taskListIsHidden
        ? 'Show List'
        : 'Hide List');
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
      this.newTask = '';
    },
    toggleTaskListVisibility() {
      this.taskListIsHidden = !this.taskListIsHidden;
    }
  }

}).mount('#assignment');