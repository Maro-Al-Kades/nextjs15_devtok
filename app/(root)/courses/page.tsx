"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Tabs,
  Tab,
  Badge,
  Input,
  Chip,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

import { courses } from "@/constants";

const categories = [
  "الكل",
  "تطوير الويب",
  "تطوير تطبيقات الموبايل",
  "التصميم",
  "تسويق الكتروني",
  "بيزنس",
];

const CoursesRoute = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("الكل");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "الكل" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="w-full mx-auto">
        <Input
          placeholder="ابحث عن دورات تعليمية ..."
          size="lg"
          startContent={<Icon icon="lucide:search" />}
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
      </div>
      <main className="container mx-auto px-4 py-12">
        {/* Categories */}
        <Tabs
          aria-label="Course categories"
          className="mb-8 "
          color="primary"
          selectedKey={selectedCategory}
          onSelectionChange={(key) => setSelectedCategory(key as string)}
        >
          {categories.map((category) => (
            <Tab key={category} title={category} />
          ))}
        </Tabs>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="border border-default-200 ">
              <CardHeader>
                <Image
                  removeWrapper
                  alt={course.title}
                  className="object-cover w-full h-48"
                  src={course.image}
                />
              </CardHeader>
              <CardBody>
                <div className="flex justify-between items-start mb-4">
                  <Chip color="primary" variant="flat">
                    {course.level}
                  </Chip>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-start">
                  {course.title}
                </h3>
                <p className="text-default-600 mb-2 text-start">
                  بواسطة{" "}
                  <span className="text-primary">{course.instructor}</span>
                </p>
                <p className="text-default-900 mb-4 text-start">
                  {course.description}
                </p>

                <Divider className="my-4" />

                <div className="flex justify-between text-default-500">
                  <div className="flex items-center gap-2 text-default-800">
                    <Icon className="text-primary" icon="lucide:clock" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-default-800">
                    {" "}
                    <Icon className="text-primary" icon="lucide:book-open" />
                    <span>{course.lessons} فيديو</span>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold">{course.price} ج.م</span>
                <Button color="primary">معاينة الدورة التعليمية</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default CoursesRoute;
