"use client";
import React from "react";
import TechComponent from "@/components/TechComponent";
import Footer from "@/components/Footer";
import PageTransition from "@/components/ui/PageTransition";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageTransition>
        <TechComponent />
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Page;
