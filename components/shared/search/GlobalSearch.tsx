import { Input } from "@heroui/input";
import { Icon } from "@iconify/react";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="">
        <Input
          placeholder="ابحث في المنصة..."
          startContent={
            <Icon
              className="text-primary/60"
              height="22"
              icon="hugeicons:search-visual"
              width="22"
            />
          }
          type="text"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
