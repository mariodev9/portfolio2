import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@chakra-ui/react";

const variants = {
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "ease",
      duration: 1,
      delay: i * 0.25,
    },
  }),
  hidden: { opacity: 0, y: 0, scale: 0 },
};

export const HeaderImage = (props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width={{ base: "100%", tablet: "385" }}
        height={{ base: "274", tablet: "474" }}
        viewBox="0 0 385 474"
        fill="none"
      >
        <mask
          id="mask0_53_78"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="385"
          height="474"
        >
          <motion.rect
            x="55"
            y="19"
            width="86"
            height="77"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={variants}
          />
          <motion.rect
            x="146"
            width="98.7936"
            height="208.752"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={variants}
          />
          <motion.rect
            x="250"
            y="62"
            width="62"
            height="97"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={variants}
          />
          <motion.rect
            y="101"
            width="141"
            height="134"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={variants}
          />
          <motion.rect
            x="250"
            y="165"
            width="112.907"
            height="136.559"
            rx="16"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={variants}
          />
          <motion.rect
            x="146.19"
            y="210.841"
            width="98.7936"
            height="107.855"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={variants}
          />
          <motion.rect
            x="55"
            y="240"
            width="86"
            height="108"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={variants}
          />
          <motion.rect
            x="252"
            y="409"
            width="60"
            height="52"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={variants}
          />
          <motion.rect
            x="250"
            y="306"
            width="134.959"
            height="97.4177"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={variants}
          />
          <motion.rect
            x="146"
            y="321"
            width="98.7936"
            height="152.215"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={variants}
          />
          <motion.rect
            x="55"
            y="355"
            width="86"
            height="88"
            rx="12"
            fill="white"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={variants}
          />
        </mask>
        <g mask="url(#mask0_53_78)">
          <motion.rect
            x="-18"
            y="-197"
            width="600"
            height="697.797"
            fill="url(#pattern0)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_53_78"
              transform="translate(0 -0.0732323) scale(0.000330688 0.000284341)"
            />
          </pattern>
          <image
            id="image0_53_78"
            width="3024"
            height="4032"
            xlinkHref="https://firebasestorage.googleapis.com/v0/b/codepartyv2.appspot.com/o/IMG_168.png?alt=media&token=7c326048-8d9f-4666-80bc-381dc5f5c5c9"
          ></image>
        </defs>
      </Icon>
    </motion.div>
  );
};
