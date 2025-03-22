import React from "react";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { ThemeSwitch } from "../theme-switch";
import GlobalSearch from "../search/GlobalSearch";

import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="bg-content2 border border-b border-primary/30 dark:bg-content1 flex items-center justify-between fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link className="flex items-center gap-2" href="/">
        <Image alt="MaroFlow" height={30} src="/logo.svg" width={30} />

        <p className="h2-bold max-sm:hidden text-foreground">
          ديڤ <span className="text-primary">تُوك</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex items-center justify-between gap-5">
        <ThemeSwitch />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-9 w-9",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
