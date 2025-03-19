//https://github.com/C-Tully/Resturantur_app

import restaurantImage from "@/assets/images/projects/restaurant.png";
import vueImage from "@/assets/images/logos/vueLogo.png";
import christophertullycaFavicon from "@/assets/images/projects/christophertullycaFavicon.png";
// import laravelLogo from "@/assets/images/projects/laravelLogo.png";
import questionMarkImg from "@/assets/images/projects/question-mark-pixel-art.png";
import laravelLogo from "@/assets/images/projects/laravelLogoTest.jpg";
// laravelLogoTest;

// import computerShowingGraphs from "@/assets/images/logos/computerShowingGraphs.jpg";
// import surveyImage from "@/assets/images/logos/survey.jpg";

export const projectCollectionConfig = [
  {
    name: "Vue3 Portfolio site",
    thumbnail: christophertullycaFavicon,
    tags: "Vue3, JavaScript, HTML, CSS",
    description: "This site!",
    githubLink: "https://github.com/C-Tully/christopher.tully.ca",
  },
  {
    name: "Vue2 Component",
    thumbnail: vueImage,
    tags: "Vue2, JavaScript, HTML, CSS, Vuex",
    description: "Standalone Vue2 Component",
    githubLink: "https://github.com/C-Tully/vue2-class-components",
  },
  {
    name: "Restaurat_app",
    thumbnail: restaurantImage,
    tags: "PHP, jQuery, DevOps, HTML, CSS, Project Management, ",
    description: "PHP Project",
    notes:
      "A practical application of a native php based project. The application shows a MVC pattern and a basic CRSF security system.",
    githubLink: "https://github.com/C-Tully/Resturantur_app",
  },

  {
    name: "Laravel Portfolio site",
    thumbnail: laravelLogo,
    tags: "Laravel, PHP, Webpack, Composer, Node",
    description: "An older portfolio",
    githubLink: "https://github.com/C-Tully/portfolio-2020-Laravel",
  },
  {
    name: "Upcoming project - Uptime reports (name TBD)",
    thumbnail: questionMarkImg,
    tags: "React, Nextjs, Laravel, API, Node, TypeScript, NEW",
    description: "",
    githubLink: "https://github.com/C-Tully/uptime_reports_frontend",
  },
];
