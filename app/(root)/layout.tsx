import React from "react";

import Navbar from "@/components/shared/navbar/navbar";
import RightSidebar from "@/components/shared/RightSidebar";
import LeftSidebar from "@/components/shared/LeftSidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <RightSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </section>
        <LeftSidebar />
      </div>
      {/* Toaster */}
    </main>
  );
};

export default RootLayout;
