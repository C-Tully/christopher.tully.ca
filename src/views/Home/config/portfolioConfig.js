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
      "Software Developer with experience in client-impacting financial projects, analytics, and best practices. Led initiatives, agile ceremonies, improved processes, and supported new hire onboarding.",
  },
  {
    company: "Greenius",
    title: "Senior Software Developer",
    industry: "EdTech",
    alt: "Computer with a its screen showing various graphs",
    href: "/portfolio/experience/green",
    imgSrc: computerShowingGraphs,
    description:
      "As the Senior Full-Stack Developer, I managed day-to-day development needs and led best practice initiatives.",
  },
  {
    company: "Info-Tech Research group",
    title: "Intermediate Full-Stack Software developer",
    industry: "Data Tech",
    alt: "Woman taking a survey which asks for the user to rate their day based on a scale of happy to sad smiley faces",
    href: "/portfolio/experience/info",
    imgSrc: surveyImage,
    description:
      "While modernizing a native php project into a more modern day laravel framework, I also helped lead company wide Agile initives.",
  },
];
