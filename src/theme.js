// Centralized theme configuration for consistent styling across all components
// All values are actual Tailwind class strings that can be used directly

// Helper function to combine class names
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Background Colors - Portfolio uses white background throughout
export const backgrounds = {
  primary: "bg-white",
  card: "bg-white/80 backdrop-blur-lg",
  cardHover: "bg-white/90",
  cardAlt: "bg-white/70 backdrop-blur-sm",
  subtle: "bg-black-100/2",
  navbar: "bg-white/95 backdrop-blur-md",
  button: "bg-black-100",
  buttonHover: "bg-black-200",
};

// Text Colors - Consistent text hierarchy
export const textColors = {
  primary: "text-black-100",
  secondary: "text-black-100/80",
  tertiary: "text-black-100/70",
  muted: "text-black-100/60",
  light: "text-black-100/50",
  white: "text-white",
};

// Border Colors
export const borders = {
  default: "border-black-100/10",
  medium: "border-black-100/15",
  strong: "border-black-100/20",
  decorative: "border-black-100/5",
  top: "border-t border-black-100/20",
  all: "border border-black-100/10",
};

// Font Families
export const fontFamilies = {
  sans: "", // Default sans-serif (Tailwind default)
  serif: "font-serif",
  mono: "font-mono",
};

// Font Sizes - Responsive font sizes
export const fontSizes = {
  // Hero Headings
  heroHeading: "text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px]",
  
  // Section Headings
  sectionHeading: "text-3xl sm:text-4xl lg:text-[2.5rem]",
  
  // Titles
  title: "text-xl sm:text-2xl",
  titleMd: "text-lg sm:text-xl",
  
  // Body Text
  body: "text-base",
  bodySm: "text-sm",
  bodyLg: "text-base sm:text-lg",
  bodyXl: "text-base sm:text-lg lg:text-xl",
  
  // Small Text
  small: "text-xs",
  smallSm: "text-xs sm:text-sm",
  smallLg: "text-xs lg:text-sm",
  
  // Labels/Tags
  label: "text-xs sm:text-sm",
  tag: "text-xs",
  
  // Navigation
  nav: "text-base lg:text-lg",
  navLogo: "text-lg sm:text-xl",
};

// Font Weights
export const fontWeights = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

// Spacing - Consistent gaps between elements (responsive)
export const gaps = {
  xs: "gap-4",
  sm: "gap-4 sm:gap-6",
  md: "gap-6 sm:gap-8 lg:gap-10",
  lg: "gap-8 lg:gap-10",
  xl: "gap-10 lg:gap-12",
};

// Spacing - Consistent margins top (responsive)
export const margins = {
  xs: "mt-4",
  sm: "mt-4 sm:mt-6",
  md: "mt-6 sm:mt-8",
  lg: "mt-8 sm:mt-12",
  xl: "mt-12 sm:mt-20",
  sectionDescription: "mt-4 sm:mt-6",
  sectionContent: "mt-8 sm:mt-12",
  sectionLarge: "mt-12 sm:mt-20",
};

// Padding - Consistent card and container padding (responsive)
export const padding = {
  card: "p-4 sm:p-5",
  cardMd: "p-4 sm:p-5 lg:p-6",
  cardLg: "p-5 sm:p-6 lg:p-8",
  section: "px-4 sm:px-6 lg:px-8",
  sectionY: "py-8 sm:py-12 lg:py-16",
  button: "px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5",
  buttonSm: "px-4 sm:px-6 py-2 sm:py-2.5",
};

// Shadows - Consistent elevation
export const shadows = {
  card: "shadow-lg",
  cardHover: "shadow-xl",
  cardStrong: "shadow-2xl",
  sm: "shadow-sm",
};

// Section Underline - Consistent accent line
export const underline = "h-1 w-20 sm:w-24 mt-2 mb-0.5 rounded bg-red-500/80";

// Description Text - Consistent section description style (responsive)
export const descriptionText = cn(
  textColors.secondary,
  fontSizes.bodyLg,
  fontWeights.normal,
  "max-w-4xl leading-relaxed text-center"
);

// Section Header Container
export const sectionHeader = "w-full flex flex-col items-center";

// Hero Text Styles
export const heroStyles = {
  heading: cn(
    fontWeights.bold,
    textColors.primary,
    fontSizes.heroHeading,
    "lg:leading-[1.05]",
    fontFamilies.serif,
    "tracking-tight"
  ),
  subheading: cn(
    textColors.primary,
    fontWeights.light,
    "text-base sm:text-lg lg:text-xl",
    "leading-relaxed"
  ),
  tagline: cn(
    textColors.tertiary,
    fontSizes.smallSm,
    "tracking-[0.2em] uppercase",
    fontWeights.light
  ),
};

// Section Heading Styles
export const sectionHeading = cn(
  textColors.primary,
  fontWeights.bold,
  fontSizes.sectionHeading,
  "tracking-wide leading-relaxed"
);

// Common card styles
export const cardStyles = {
  base: "rounded-2xl transition-all duration-300",
  card: cn(
    backgrounds.card,
    borders.default,
    shadows.card,
    "rounded-2xl",
    padding.cardLg,
    "transition-all duration-300"
  ),
  cardHover: cn("hover:shadow-xl hover:-translate-y-1", backgrounds.cardHover),
  cardAlt: cn(
    backgrounds.cardAlt,
    borders.default,
    shadows.card,
    "rounded-xl",
    padding.card,
    "transition-all duration-300"
  ),
};

// Button styles (responsive)
export const buttonStyles = {
  primary: cn(
    padding.button,
    backgrounds.button,
    textColors.white,
    "hover:bg-black-200 rounded-sm transition-all duration-300",
    fontSizes.bodySm,
    fontWeights.medium,
    "tracking-wide",
    shadows.card,
    "hover:shadow-xl transform hover:-translate-y-0.5"
  ),
  secondary: cn(
    padding.button,
    "border-2 border-black-100 text-black-100 rounded-sm",
    "hover:bg-black-100 hover:text-white transition-all duration-300",
    fontSizes.bodySm,
    fontWeights.medium,
    "tracking-wide",
    "hover:shadow-lg transform hover:-translate-y-0.5"
  ),
};

// Responsive Container Widths
export const containerWidths = {
  full: "w-full",
  maxContent: "max-w-7xl",
  section: "max-w-6xl",
  card: "sm:w-[380px] w-full",
};

// Complete theme object for easy access
export const theme = {
  backgrounds,
  textColors,
  borders,
  fontFamilies,
  fontSizes,
  fontWeights,
  gaps,
  margins,
  padding,
  shadows,
  underline,
  descriptionText,
  sectionHeader,
  sectionHeading,
  heroStyles,
  cardStyles,
  buttonStyles,
  containerWidths,
  cn,
};

export default theme;
