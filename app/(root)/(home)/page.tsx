import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import QuestionsFilter from "@/components/shared/question-filter/QuestionsFilter";
import MobileQuestionFilter from "@/components/shared/question-filter/MobileQuestionFilter";

const HomeRoute = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold">كل الاسئلة</h1>
        <Button
          as={Link}
          className="flex justify-end max-sm:w-full max-sm:justify-center min-w-10"
          color="primary"
          endContent={
            <Icon height="22" icon="hugeicons:user-question-02" width="22" />
          }
          href="/ask-question"
          size="lg"
          variant="shadow"
        >
          اطرح سؤالا
        </Button>
      </div>

      <div className="mt-11 flex flex-col justify-center gap-5 ">
        <LocalSearchBar
          icon="hugeicons:message-question"
          placeholder="ابحث عن أسئلة ...."
          route="/"
        />
        <QuestionsFilter />
        <MobileQuestionFilter />
      </div>
    </>
  );
};

export default HomeRoute;
