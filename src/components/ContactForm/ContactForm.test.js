import { mount } from "@vue/test-utils";
import ContactForm from "../ContactForm.vue"; // Adjust the path as needed

describe("ContactForm", () => {
  const wrapper = mount(ContactForm, {
    props: {
      modalVisibility: true,
      modalTitle: "lorem",
      ariaLabel: "dollar",
      modalId: "ipsum",
    },
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.vm.modalVisibility = true;
      wrapper.vm.modalTitle = "lorem";
      wrapper.vm.ariaLabel = "dollar";
      wrapper.vm.modalId = "ipsum";
    }
  });

  test("It Renders and ensures default values", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.modalVisibility).toBeTruthy();
    expect(wrapper.vm.modalTitle).toBe("lorem");
    expect(wrapper.vm.ariaLabel).toBe("dollar");
    expect(wrapper.vm.modalId).toBe("ipsum");
  });

  test("modalVisibility state changes", async () => {
    expect(wrapper.vm.internalVisible).toBe(true);

    await wrapper.setProps({ modelValue: false });
    expect(wrapper.vm.internalVisible).toBe(false);
  });

  test("emits `update:modalVisibility` when local state changes", async () => {
    await wrapper.setData({ internalVisible: true });

    // Assert the correct event is emitted
    expect(wrapper.emitted("update:modalVisibility")).toBeTruthy();
    expect(wrapper.emitted("update:modalVisibility")[0]).toEqual([true]);
  });

  test("closes modal and triggers `onClose` event", async () => {
    // Simulate modal closing
    await wrapper.vm.onClose();

    // Assert the modal closed and emitted the event
    expect(wrapper.emitted("update:modalVisibility")).toBeTruthy();
    expect(wrapper.emitted("update:modalVisibility")[0]).toEqual([false]);
  });
});
