import { shallowMount } from "@vue/test-utils";
import SiteHeader from "@/components/SiteHeader.vue";

describe.skip("SiteHeader :: unit tests", () => {
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
  const wrapper = shallowMount(SiteHeader, {
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
