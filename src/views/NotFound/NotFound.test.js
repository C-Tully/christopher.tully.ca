import { shallowMount } from "@vue/test-utils";
import NotFound from "@/views/NotFound/NotFound.vue";

describe.skip("NotFound Page :: unit tests", () => {
  const wrapper = shallowMount(NotFound, {
    props: {},
  });

  it.skip("Component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
