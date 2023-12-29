import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
  keywords: ["About Page", "Digital Navas", "Web Developer"],
};

const AboutPage = () => {
  return <span className="text-7xl">About Page</span>;
};

export default AboutPage;
