import { ref, onMounted, onUnmounted } from "vue";
//Special note: This can generally be done using media queries but,
//by having the logic being done in a js method, can aid in some reactive
//component control and allows for a bit better testing.

//todo:: on intergration of a store (Vuex or Pinia?) move this into a global
//state variable that can be called from there. For now.. composable it is.

export function useScreenSize() {
  const isMobile = ref(false);

  const mediaQuery = window.matchMedia("(max-width: 600px)");

  function updateSize() {
    isMobile.value = window.innerWidth <= 600 || mediaQuery.matches;
  }

  onMounted(() => {
    console.log("onMounted::");
    updateSize();

    mediaQuery.addEventListener("change", updateSize);
    window.addEventListener("resize", updateSize);
  });

  onUnmounted(() => {
    mediaQuery.removeEventListener("change", updateSize);
    window.removeEventListener("resize", updateSize);
  });

  return {
    isMobile,
  };
}
