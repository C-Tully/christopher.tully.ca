<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-2"
        v-model="form.name"
        placeholder="Enter name"
        required
      ></b-form-input>
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        required
      ></b-form-input>
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="comments"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-form-input
        id="input-1"
        class="honeyPotDisplay"
        v-model="form.honeyPot"
        type="email"
        required
      ></b-form-input>
    </b-form-group>
  </b-form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ContactForm",
  components: {},
  props: {},
  emits: ["update:modalVisibility"],
  setup(props, { emit }) {
    // Form state
    const form = ref({
      name: "",
      email: "",
      comments: "",
      honeyPot: "", // Hidden honeyPot field
    });

    const handleSubmit = () => {
      if (form.value.honeypot) {
        console.warn("Bot detected!");
        return;
      }

      console.log("Form submitted:", {
        name: form.value.name,
        email: form.value.email,
        comments: form.value.comments,
      });
      //todo:: Process form submission before clearing values;
      //Make sure to emit event to parent modal and close modal.

      // Clear form
      form.value.name = "";
      form.value.email = "";
      form.value.comments = "";

      emit("ContactForm:handleSubmit:end", false);
    };

    return {
      form,
      handleSubmit,
    };
  },
};
</script>
<style lang="scss" scoped>
.honeyPotDisplay {
  display: none;
}
</style>
