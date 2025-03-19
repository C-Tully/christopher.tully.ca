import { onMounted, onUnmounted } from "vue";

// CodePend:: https://prismic.io/blog/css-background-effects -> https://codepen.io/armantaherian/pen/ZyZWVZ

export function useScrollCurve(curveId = "curve") {
  let lastKnownScrollPosition = 0;
  const defaultCurveValue = 350;
  const curveRate = 3;
  let ticking = false;
  let curveElement = null;

  function scrollEvent(scrollPos) {
    if (!curveElement) return;

    if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
      const curveValue = defaultCurveValue - scrollPos / curveRate;
      curveElement.setAttribute(
        "d",
        `M 800 300 Q 400 ${curveValue} 0 300 L 0 0 L 800 0 L 800 300 Z`
      );
    }
  }

  function onScroll() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        scrollEvent(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  }

  onMounted(() => {
    curveElement = document.getElementById(curveId);
    if (curveElement) {
      window.addEventListener("scroll", onScroll);
    }
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
