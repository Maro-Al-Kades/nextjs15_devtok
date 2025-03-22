"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import TemplateCard from "./_components/TemplateCard";

import { templates } from "@/constants";
import { Template } from "@/types";

const TemplatesRoute = () => {
  return (
    <div className="flex w-full flex-col justify-between gap-16">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="h1-bold text-primary">شراء وبيع القوالب الجاهزة</h1>
          <Button
            color="primary"
            endContent={
              <Icon
                height="22"
                icon="hugeicons:money-send-flow-02"
                width="22"
              />
            }
            variant="light"
          >
            تقديم طلب بيع
          </Button>
        </div>
        <p className="text-sm font-light">
          عن طريق القوالب الجاهزة في منصة{" "}
          <span className="text-primary font-bold">ديف توك</span> يمكنك ايجاد
          القوالب التي تساعدك في عملك بمعظم التقنيات الحديثة ويمكنك ايضا تحقيق
          ارباح من بيع القوالب...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template: Template) => (
          <TemplateCard
            key={template.id}
            description={template.description}
            features={template.features}
            id={0}
            image={template.image}
            name={template.name}
            price={template.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatesRoute;
