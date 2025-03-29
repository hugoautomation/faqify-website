import Navbar1 from "@/components/header/navbar-1";
import Footer from "@/components/footer";
import Custom404 from "@/components/404";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <>
      <Navbar1 />
      <Custom404 />
      <Footer />
    </>
  );
}
