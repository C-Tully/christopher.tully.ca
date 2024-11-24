import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home/Home.vue";

describe.skip("Home Page :: unit tests", () => {
  const wrapper = shallowMount(Home, {
    props: {},
  });

  it.skip("Component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
