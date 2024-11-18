import { shallowMount } from "@vue/test-utils";
import SiteFooter from "@/components/SiteFooter.vue";

describe("SiteFooter", () => {
  const mockLinkCollection = [
    {
      route: "home",
      label: "lorem",
    },
    {
      route: "about",
      label: "ipsum",
    },
    {
      route: "skills",
      label: "dollar",
    },
  ];
  const wrapper = shallowMount(SiteFooter, {
    props: {
      linkCollection: mockLinkCollection,
    },
  });

  it("Component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("confirms prop data", () => {
    expect(wrapper.vm.linkCollection).toStrictEqual(mockLinkCollection);

    const linkContainer = wrapper.find("nav");
    const anchorTags = linkContainer.findAll("a");
    expect(anchorTags.length).toBe(mockLinkCollection.length);
  });
});
