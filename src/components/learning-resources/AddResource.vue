<template>
  <base-dialog v-if="formInputIsInvalid" title="Invalid Input" @close="closeValidationDialog">
    <template #default>
      <p>All fields are be required</p>
    </template>
    <template #actions>
      <base-button @click="closeValidationDialog">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="formSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Title</label>
        <textarea
          type="text"
          id="description"
          name="description"
          rows="3"
          ref="descriptionInput"
        ></textarea>
        <div class="form-control">
          <label for="link">Link</label>
          <input type="url" id="link" name="link" ref="linkInput" />
        </div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import BaseDialog from '../ui/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  inject: ['addResource'],
  data() {
    return {
      formInputIsInvalid: false,
    };
  },
  methods: {
    formSubmit() {
      const newTitle = this.$refs.titleInput.value;
      const newDescription = this.$refs.descriptionInput.value;
      const newLink = this.$refs.linkInput.value;

      if (
        newTitle.trim() == '' ||
        newDescription.trim() == '' ||
        newLink.trim() == ''
      ) {
        this.formInputIsInvalid = true;
      } else {
        this.addResource(newTitle, newDescription, newLink);
      }
    },
    closeValidationDialog() {
      this.formInputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
@import url('./css/AddResource.css');
</style>