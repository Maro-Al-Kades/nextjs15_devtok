"use client";

import { SignedOut, SignedIn } from "@clerk/nextjs";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Image,
  Link,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

import { SidebarLink } from "@/types";
import { sidebarLinks } from "@/constants";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item: SidebarLink) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <Button
            key={item.route}
            className="flex items-center justify-start gap-4"
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
            {item.label}
          </Button>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="sm:hidden">
      <Button isIconOnly color="primary" variant="flat" onPress={onOpen}>
        <Icon height="22" icon="hugeicons:menu-circle" width="22" />
      </Button>
      <Drawer backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <Link className="flex items-center gap-2" href="/">
                  <Image
                    alt="MaroFlow"
                    height={30}
                    src="/logo.svg"
                    width={30}
                  />

                  <p className="h2-bold max-sm:hidden">
                    Maro <span className="text-primary">Flow</span>
                  </p>
                </Link>
              </DrawerHeader>
              <DrawerBody>
                <NavContent />
              </DrawerBody>
              <DrawerFooter className="flex flex-col w-full">
                <SignedIn>
                  <Button
                    fullWidth
                    as={Link}
                    color="primary"
                    endContent={
                      <Icon height="22" icon="hugeicons:logout-04" width="22" />
                    }
                    href="/logout"
                    size="lg"
                    variant="solid"
                  >
                    تسجيل الخروج
                  </Button>
                </SignedIn>
                <SignedOut>
                  <div className="flex flex-col gap-3">
                    <Button
                      fullWidth
                      as={Link}
                      color="primary"
                      endContent={
                        <Icon
                          height="22"
                          icon="hugeicons:finger-access"
                          width="22"
                        />
                      }
                      href="/sign-in"
                      size="lg"
                      variant="solid"
                    >
                      تسجيل الدخول
                    </Button>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      fullWidth
                      as={Link}
                      color="primary"
                      endContent={
                        <Icon
                          height="22"
                          icon="hugeicons:user-add-02"
                          width="22"
                        />
                      }
                      href="/sign-in"
                      size="lg"
                      variant="flat"
                    >
                      تسجيل حساب جديد
                    </Button>
                  </div>
                </SignedOut>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
