"use client";

import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const LeftSidebar = () => {
  return (
    <section className="bg-content2 border border-r border-primary/30 dark:bg-content1 sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto p-6 pt-36 max-lg:hidden lg:w-[300px]">
      <div className="flex flex-1 flex-col gap-12">
        <div className="flex flex-col gap-5">
          <h2 className="h2-bold">احدث الاسئلة</h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between hover:bg-primary/20 p-2 rounded-lg cursor-pointer">
              <p className="text-sm max-w-[170px] text-start">
                افضل استخدامات لعمل fetch api باستخدام ال server side by Next.js
              </p>
              <Icon height="30" icon="hugeicons:arrow-left-01" width="30" />
            </div>

            <div className="flex flex-row items-center justify-between hover:bg-primary/20 p-2 rounded-lg cursor-pointer">
              <p className="text-sm max-w-[170px] text-start">
                ازاي استخدم Redux مع Next.js Typescript ?
              </p>
              <Icon height="30" icon="hugeicons:arrow-left-01" width="30" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="h2-bold">اخر المدونات</h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between hover:bg-primary/20 p-2 rounded-lg cursor-pointer">
              <p className="text-sm max-w-[170px] text-start">
                افضل استخدامات لعمل fetch api باستخدام ال server side by Next.js
              </p>
              <Icon height="30" icon="hugeicons:arrow-left-01" width="30" />
            </div>

            <div className="flex flex-row items-center justify-between hover:bg-primary/20 p-2 rounded-lg cursor-pointer">
              <p className="text-sm max-w-[170px] text-start">
                ازاي استخدم Redux مع Next.js Typescript ?
              </p>
              <Icon height="30" icon="hugeicons:arrow-left-01" width="30" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="h2-bold">أشهر الهاشتاجات</h2>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg flex flex-row items-center justify-between">
              <Chip color="primary" radius="sm" size="lg" variant="flat">
                Next.js
              </Chip>
              <p className="font-bold">2</p>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-between">
              <Chip color="primary" radius="sm" size="lg" variant="flat">
                جافاسكربت
              </Chip>
              <p className="font-bold">10</p>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-between">
              <Chip color="primary" radius="sm" size="lg" variant="flat">
                جيت هاب
              </Chip>
              <p className="font-bold">72</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
