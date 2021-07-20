<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="enteredName">Name</label>
      <input
        @change="updateForm"
        name="enteredName"
        v-model="enteredName"
        type="text"
      />
    </div>
    <div>
      <label for="enteredPhone">Phone</label>
      <input
        @change="updateForm"
        name="enteredPhone"
        v-model="enteredPhone"
        type="tel"
      />
    </div>
    <div>
      <label for="enteredEmail">Email</label>
      <input
        @change="updateForm"
        name="enteredEmail"
        v-model="enteredEmail"
        type="email"
      />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
// methods: {
//   updateForm() {}
// }
</script>
