"use client";

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { Link } from "@heroui/link";
import { SignedOut } from "@clerk/nextjs";

import { SidebarLink } from "@/types";
import { sidebarLinks } from "@/constants";

const RightSidebar = () => {
  const pathname = usePathname();

  return (
    <section className="no-scrollbar border border-l border-primary/30 bg-content2 dark:bg-content1 sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-lg max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-5">
        {sidebarLinks.map((item: SidebarLink) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Button
              key={item.route}
              as={Link}
              className="flex items-center justify-start max-lg:justify-center gap-4"
              color={isActive ? "primary" : "default"}
              href={item.route}
              size="lg"
              variant={isActive ? "shadow" : "light"}
            >
              <Icon
                className={isActive ? "" : "text-primary"}
                height={24}
                icon={item.icon}
                width={24}
              />
              <p className="max-lg:hidden">{item.label}</p>
            </Button>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-3">
          <Button
            fullWidth
            as={Link}
            color="primary"
            endContent={
              <Icon height="22" icon="hugeicons:finger-access" width="22" />
            }
            href="/sign-in"
            size="md"
            variant="solid"
          >
            <span className="max-lg:hidden"> تسجيل الدخول</span>
          </Button>
          <Button
            fullWidth
            as={Link}
            color="primary"
            endContent={
              <Icon height="22" icon="hugeicons:user-add-02" width="22" />
            }
            href="/sign-in"
            size="md"
            variant="flat"
          >
            <span className="max-lg:hidden"> تسجيل حساب جديد</span>
          </Button>
        </div>
      </SignedOut>
    </section>
  );
};

export default RightSidebar;
