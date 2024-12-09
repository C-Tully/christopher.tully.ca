import { shallowMount } from "@vue/test-utils";
import BackgroundBubbles from "@/components/BackgroundBubbles.vue";

describe.skip("BackgroundBubbles :: unit tests", () => {
  const wrapper = shallowMount(BackgroundBubbles, {
    props: {},
  });

  it.skip("Component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
