import { shallowMount } from "@vue/test-utils";
import SocialLinks from "@/components/SocialLinks.vue";

describe.skip("SocialLinks :: unit tests", () => {
  const mockLinkCollection = [
    {
      ariaLabel: "",
      href: "",
      imgSrc: "",
    },
    {
      ariaLabel: "",
      href: "",
      imgSrc: "",
    },
    {
      ariaLabel: "",
      href: "",
      imgSrc: "",
    },
  ];
  const wrapper = shallowMount(SocialLinks, {
    props: {
      linkCollection: mockLinkCollection,
    },
  });

  it.skip("Component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it.skip("confirms prop data", () => {
    expect(wrapper.vm.linkCollection.length).toBe(3);

    // expect(wrapper.vm.linkCollection).toStrictEqual(mockLinkCollection);
    // const linkContainer = wrapper.find("nav");
    // const anchorTags = linkContainer.findAll("a");
    // expect(anchorTags.length).toBe(mockLinkCollection.length);
  });
});
