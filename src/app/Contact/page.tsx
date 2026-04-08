"use client";
import ContactComponent from "@/components/ContactComponent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/ui/PageTransition";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <NavBar />
      <PageTransition>
        <ContactComponent />
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Page;
