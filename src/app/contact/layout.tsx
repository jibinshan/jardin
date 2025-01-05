import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Bruncho",
  description:
    "Get in touch with Bruncho for reservations, private events, or inquiries, Green Lanes, Harringay, Bruncho offers an extraordinary dining experience for every occasion.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "contact Bruncho, reservations Green Lanes, Harringay, London",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
