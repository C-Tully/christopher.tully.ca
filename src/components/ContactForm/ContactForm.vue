<template>
  <b-modal
    :id="modalId"
    v-model="internalVisibilityFlag"
    :title="modalTitle"
    :aria-label="ariaLabel"
    @hide="onClose"
  >
    <template #modal-header> Default Modal Header </template>
    <slot />
    <template #modal-footer>
      <slot name="footerOverride" />
      Default Contactform Footer
    </template>
  </b-modal>
</template>

<script>
import { ref, watch } from "vue";
import { BModal } from "bootstrap-vue-next";

export default {
  name: "ContactForm",
  components: { BModal },
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
  emits: ["update:modalVisibility", "update:modalClose"],
  setup(props, { emit }) {
    // Local state for modal visibility
    const internalVisibilityFlag = ref(props.modalVisibility);

    // Watch for changes in the prop and update local state
    watch(
      () => props.modalVisibility,
      (newVal) => {
        internalVisibilityFlag.value = newVal;
      }
    );

    watch(internalVisibilityFlag, (newVal) => {
      emit("update:modalVisibility", newVal);
    });

    const onClose = () => {
      emit("update:modalClose");
    };

    return {
      internalVisibilityFlag,
      onClose,
    };
  },
};
</script>
