import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant, fadeIn } from "../utils/motion";
import { theme, cn } from "../theme";


const ContactInfoCard = ({ icon, label, value, href, onClick, isButton = false }) => {
  const content = (
    <div className={cn("flex items-center gap-3", theme.padding.card, theme.backgrounds.cardAlt, theme.borders.medium, "rounded-xl hover:bg-white/90 hover:shadow-lg transition-all duration-300 group", isButton ? 'cursor-pointer' : '')} onClick={onClick}>
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-black-100/5 rounded-lg group-hover:bg-black-100/10 transition-colors">
        <i className={cn(icon, theme.textColors.primary, theme.fontSizes.body)}></i>
      </div>
      <div className="flex-1 text-left min-w-0">
        <p className={cn(theme.textColors.muted, theme.fontSizes.small, theme.fontWeights.light, "mb-1")}>{label}</p>
        <p className={cn(theme.textColors.primary, theme.fontSizes.bodySm, theme.fontWeights.medium, "truncate")}>{value}</p>
      </div>
      {isButton && (
        <i className={cn("fa fa-copy", theme.textColors.light, "group-hover:text-black-100 transition-colors flex-shrink-0")}></i>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

const SocialLink = ({ icon, label, href, color = "text-black-100" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn("flex items-center gap-4", theme.padding.cardMd, theme.backgrounds.cardAlt, theme.borders.medium, "rounded-xl hover:bg-white/90 hover:border-black-100/30 hover:shadow-lg transition-all duration-300 group")}
  >
    <div className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg bg-black-100/5 group-hover:bg-black-100/10 transition-colors`}>
      <i className={`${icon} ${color} text-lg lg:text-xl`}></i>
    </div>
    <span className={cn(theme.textColors.primary, theme.fontSizes.bodyLg, theme.fontWeights.medium)}>{label}</span>
    <i className={cn("fa fa-external-link", theme.textColors.light, theme.fontSizes.small, "ml-auto")}></i>
  </a>
);

const Contact = () => {
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here if needed
  };

  return (
    <div className="">
      <div className={cn(theme.sectionHeader)} variants={textVariant()}>
        <h2 className={cn(theme.sectionHeading, "text-center")}>
          Contact
        </h2>
        {/* Underline */}
        <div className={theme.underline} />
      </div>

      <div 
        className="w-full flex justify-center"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <p className={cn(theme.margins.sectionDescription, theme.descriptionText)}>
          Let's connect and discuss how we can work together.
        </p>
      </div>

      <div className={cn("mt-5", theme.containerWidths.section, "mx-auto relative", theme.padding.section)}>
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-black-100/2 rounded-3xl blur-3xl"></div>
        <div className="relative w-full bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border-t border-black-100/20 border-x border-b border-black-100/10 shadow-lg">
          <motion.div
            // variants={slideIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={cn("grid grid-cols-1 md:grid-cols-3", theme.gaps.sm, "mb-2")}>
              <ContactInfoCard
                icon="fa fa-envelope"
                label="Email"
                value="tejaswir2468@gmail.com"
                onClick={() => copyToClipboard("tejaswir2468@gmail.com", "email")}
                isButton={true}
              />
              
              <ContactInfoCard
                icon="fa fa-phone"
                label="Phone"
                value="+1 (832) 469-7808"
                onClick={() => copyToClipboard("+18324697808", "phone")}
                isButton={true}
              />
              
              <ContactInfoCard
                icon="fa fa-map-marker"
                label="Location"
                value="Naperville, IL"
              />
            </div>

            <div className={cn("pt-6", theme.borders.strong, "border-t")}>
              <p className={cn(theme.textColors.tertiary, theme.fontSizes.bodySm, theme.fontWeights.medium, "mb-5 text-center tracking-wide")}>Connect with me</p>
              <div className={cn("flex flex-col sm:flex-row justify-center", theme.gaps.xs)}>
                <SocialLink
                  icon="fa fa-linkedin"
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/tejaswiraavi"
                  color="text-blue-600"
                />
                <SocialLink
                  icon="fa fa-github"
                  label="GitHub"
                  href="https://github.com"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className={cn("text-center", theme.margins.sectionContent, "pt-8", theme.borders.default, "border-t pb-2")}
      >
        <p className={cn(theme.textColors.light, theme.fontSizes.smallLg, theme.fontWeights.light, "tracking-wide")}>
          © 2024 Tejaswi Raavi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");