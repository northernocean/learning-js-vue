<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="errorMessageFromFetchAPI">Error retrieving survey results.</p>
      <p v-if="results.length == 0">No Survey results to show.</p>
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
      errorMessageFromFetchAPI: '',
    };
  },
  methods: {
    loadExperiences() {
      this.errorMessageFromFetchAPI = '';
      fetch(
        'https://friendly-moss-feathers-default-rtdb.firebaseio.com/survey_data.json'
      )
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              this.results.length = 0;
              Object.values(data).forEach((item) => this.results.push(item));
            });
          } else {
            this.errorMessageFromFetchAPI = `Error fetching survey results (status code: ${response.status})`;
          }
        })
        .catch((error) => {
          console.log(error);
          this.errorMessageFromFetchAPI = 'Error fetching survey results (connection failure)';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
