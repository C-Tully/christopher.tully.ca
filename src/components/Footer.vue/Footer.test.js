import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe.skip("Footer :: unit tests", () => {
  const wrapper = shallowMount(Footer, {
    props: {},
  });

  it.skip("Component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
