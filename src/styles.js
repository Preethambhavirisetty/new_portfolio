import { theme } from "./theme";

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-1 px-1 sm:py-1 py-1",

  // Legacy styles - using theme.js for new implementations
  heroHeadText: "", // Use theme.heroStyles.heading instead
  heroSubText: "", // Use theme.heroStyles.subheading instead
  sectionHeadText: "", // Use theme.sectionHeading instead
  sectionSubText:
    "sm:text-[18px] text-[14px] text-black-100 uppercase tracking-wider",
};

export { styles, theme };