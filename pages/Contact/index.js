import { Box } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return <div></div>;
}
