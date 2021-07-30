<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="loadingSurveyData">Loading Survey Results...</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  //props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      loadingSurveyData: false,
    };
  },
  methods: {
    loadExperiences() {
      fetch(
        'https://friendly-moss-feathers-default-rtdb.firebaseio.com/survey_data.json'
      ).then(response => {
        response.json().then((data) => {
          this.loadingSurveyData = true;
          this.results.length = 0;
          Object.values(data).forEach((item) => this.results.push(item));
          this.loadingSurveyData = false;
        });
      });
    },
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
