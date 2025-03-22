import { Input } from "@heroui/input";
import { cn } from "@heroui/theme";
import { Icon } from "@iconify/react";

interface CustomInputProps {
  route?: string;
  icon: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchBar = ({
  route,
  icon,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div className="relative w-full ">
      <Input
        placeholder={placeholder}
        size="lg"
        startContent={
          <Icon
            className={cn("text-primary/50", otherClasses, route)}
            height="22"
            icon={icon}
            width="22"
          />
        }
        type="text"
        // onChange={() => {}}
      />
    </div>
  );
};

export default LocalSearchBar;
