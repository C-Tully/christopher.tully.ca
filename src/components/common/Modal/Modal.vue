<template>
  <b-modal
    :id="modalId"
    :visible="modalVisibility"
    :title="modalTitle"
    :aria-labelledby="ariaLabel"
    @hide="handleHide"
  >
    <template #modal-title>
      <h5 class="modal-title">{{ modalTitle }}</h5>
    </template>
    <slot />
    <template #modal-footer>
      <b-button variant="secondary" @click="handleClose">Close</b-button>
    </template>
  </b-modal>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  components: {},
  props: {
    modalVisibility: {
      type: Boolean,
      default: false, // Default to false if the prop is not supplied
    },
    modalTitle: {
      type: String,
      default: "Modal",
    },
    ariaLabel: {
      type: String,
      default: "Modal",
    },
    modalId: {
      type: String,
      default: "modal-wrap",
    },
  },
  emits: ["update:modalVisibility", "formSubmitted"],
  methods: {
    handleClose() {
      this.$emit("update:modalVisibility", false);
    },
    handleHide() {
      this.$emit("update:modalVisibility", false);
    },
    handleFormSubmit(data) {
      this.$emit("formSubmitted", data);
      this.handleClose();
    },
  },
});
</script>
<style scoped></style>
