import { shallowMount } from "@vue/test-utils";
import SiteNav from "@/components/SiteNav.vue";

describe.skip("Site Nav :: unit tests", () => {
  // const mockLinkCollection = [
  //   {
  //     route: "home",
  //     label: "lorem",
  //   },
  //   {
  //     route: "about",
  //     label: "ipsum",
  //   },
  //   {
  //     route: "skills",
  //     label: "dollar",
  //   },
  // ];
  const wrapper = shallowMount(SiteNav, {
    props: {
      // linkCollection: mockLinkCollection,
    },
  });

  it.skip("Component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it.skip("confirms prop data", () => {
    // expect(wrapper.vm.linkCollection).toStrictEqual(mockLinkCollection);
    // const linkContainer = wrapper.find("nav");
    // const anchorTags = linkContainer.findAll("a");
    // expect(anchorTags.length).toBe(mockLinkCollection.length);
  });
});
