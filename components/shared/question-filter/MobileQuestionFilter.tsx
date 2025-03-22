"use client";

import { questionFiltersLinks } from "@/constants";
import { QuestionFilter } from "@/types";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";

const MobileQuestionFilter = () => {
  return (
    <div className="md:hidden">
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button
            fullWidth
            className="text-primary"
            endContent={
              <Icon
                height="22"
                icon="hugeicons:filter-mail-square"
                width="22"
              />
            }
            size="lg"
            variant="flat"
          >
            فلاتر البحث
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" variant="faded">
          {questionFiltersLinks.map((filter: QuestionFilter) => {
            return (
              <DropdownItem
                key={filter.text}
                startContent={
                  <Icon
                    className="text-primary"
                    height="22"
                    icon={filter.icon}
                    width="22"
                  />
                }
              >
                {filter.text}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default MobileQuestionFilter;
