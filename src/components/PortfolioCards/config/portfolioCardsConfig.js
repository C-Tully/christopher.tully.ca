import stockTicker from "@/assets/images/logos/stockTickerSmall.jpg";
import computerShowingGraphs from "@/assets/images/logos/computerShowingGraphs.jpg";
import surveyImage from "@/assets/images/logos/survey.jpg";

export const portfolioCollectionConfig = [
  {
    company: "S&P Global - Communify Fincentric",
    title: "Software Developer II",
    industry: "FinTech",
    alt: "Image of a candle stick stocker rising",
    href: "/portfolio/experience/snp",
    imgSrc: stockTicker,
    description:
      "As a Software developer I worked on projects that directly influence clients and their finalcial decisions. Helped onboarding new hires, lead analytics and various best practice initiatives and more!",
  },
  {
    company: "Greenius",
    title: "Senior Software Developer",
    industry: "EdTech",
    alt: "Computer with a its screen showing various graphs",
    href: "/portfolio/experience/green",
    imgSrc: computerShowingGraphs,
    description:
      "As the Senior Full-Stack developer at Greenius I handled day to day development and helped lead best practice initives.",
  },
  {
    company: "Info-Tech Research group",
    title: "Intermediate Full-Stack Software developer",
    industry: "Data Tech",
    alt: "Women taking a survey which asks for the user to rate their day based on a scale of happy to sad smiley faces",
    href: "/portfolio/experience/info",
    imgSrc: surveyImage,
    description:
      "In this role, I was the sole developer working on transforming a legacy php native application into a Laravel supported one.",
  },
];
