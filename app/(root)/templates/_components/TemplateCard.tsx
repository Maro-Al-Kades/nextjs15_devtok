import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { Template } from "@/types";

const TemplateCard = ({
  price,
  image,
  name,
  description,
  features,
}: Template) => {
  return (
    <Card className="border border-default-200">
      <CardHeader className="relative">
        <Chip
          className="absolute top-4 right-6 z-50 "
          color="primary"
          variant="solid"
        >
          {price} ج.م
        </Chip>

        <Image
          removeWrapper
          alt={name}
          className="object-cover w-full h-48"
          src={image}
        />
      </CardHeader>
      <CardBody>
        <h3 className="text-xl font-semibold mb-2 text-start">{name}</h3>
        <p className="text-default-800 mb-4 text-start">{description}</p>
        <Divider className="my-4" />
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Icon className="text-primary" icon="lucide:check" />
              <span className="text-default-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="flex w-full items-center gap-3">
        <Button fullWidth color="primary" variant="flat">
          معاينة
        </Button>
        <Button fullWidth color="primary" variant="flat">
          شراء القالب
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
