"use client";

import { Chip, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { questionFiltersLinks } from "@/constants";
import { QuestionFilter } from "@/types";

const QuestionsFilter = () => {
  return (
    <div className="flex-row w-full gap-5 hidden md:flex">
      {questionFiltersLinks.map((filter: QuestionFilter) => {
        return (
          <Chip
            key={filter.text}
            as={Link}
            className="h-9"
            color={filter.text === "المرشح" ? "primary" : "default"}
            href={filter.href}
            radius="sm"
            size="lg"
            startContent={<Icon height={22} icon={filter.icon} width={22} />}
            variant="flat"
          >
            {filter.text}
          </Chip>
        );
      })}
    </div>
  );
};

export default QuestionsFilter;
