import { shallowMount } from "@vue/test-utils";
import TopHeader from "@/components/TopHeader.vue";

describe("TopHeader", () => {
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
  const wrapper = shallowMount(TopHeader, {
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
