import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

const HelpRoute = () => {
  const helpData = {
    title: "قسم طلب المساعدة المدفوعة – Dev Help Paid",
    description:
      "هذا القسم مخصص للمستخدمين الذين يحتاجون إلى مساعدة تقنية مدفوعة من قبل فريق الموقع الرسمي. إذا كنت تواجه مشكلة برمجية أو تحتاج إلى تنفيذ ميزة معينة، يمكنك طلب المساعدة هنا وفقًا للقواعد التالية:",
    howItWorks: [
      "يقوم فريق الموقع بمراجعة طلبك وتحديد مدى إمكانية تنفيذه.",
      "يتم تقديم عرض سعر بناءً على تعقيد المهمة ومدة التنفيذ.",
      "بعد الموافقة على العرض، يبدأ الفريق في العمل على تنفيذ الطلب.",
      "يتم تسليم الحل وفقًا للاتفاق، مع إمكانية تقديم توضيحات عند الحاجة.",
    ],
    allowedRequests: [
      "إصلاح أخطاء برمجية (Debugging).",
      "تطوير ميزات جديدة لمشروعك.",
      "تحسين أداء الكود أو إعادة هيكلته.",
      "تقديم استشارات تقنية حول اختيار الأدوات والتقنيات المناسبة.",
      "تنفيذ مشاريع صغيرة أو أجزاء محددة من مشاريع كبيرة.",
    ],
    notAllowedRequests: [
      "تنفيذ مشاريع كاملة بدون تفاصيل واضحة مسبقة.",
      "طلبات غير قانونية أو تنتهك حقوق الملكية الفكرية.",
      "دعم مجاني – هذا القسم مخصص للخدمات المدفوعة فقط.",
      "تنفيذ المهام خارج نطاق تخصص الفريق.",
    ],
    howToRequest: [
      "وضّح مشكلتك أو المطلوب بالتفصيل.",
      "حدد الإطار الزمني المطلوب للتنفيذ.",
      "انتظر رد الفريق بمقترح السعر وخطة العمل.",
      "تأكد من متابعة الطلب بانتظام لضمان إنجازه في الوقت المحدد.",
    ],
    importantNotes: [
      "جميع التعاملات المالية تتم داخل المنصة لضمان الأمان للطرفين.",
      "لا يتم بدء العمل إلا بعد الاتفاق على التفاصيل والدفع المسبق.",
      "في حالة وجود أي استفسارات، يمكنك التواصل مع دعم العملاء.",
    ],
    footer:
      "هذا القسم يضمن لك حلولًا احترافية وسريعة من قبل فريق الموقع، فاستخدمه بحكمة للحصول على أفضل النتائج! 🚀🔥",
  };

  return (
    <div className="flex w-full flex-col justify-between gap-4">
      <h1 className="h1-bold text-primary">{helpData.title}</h1>
      {/* <p className="text-sm font-light">{helpData.description}</p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-content2 dark:bg-content2 rounded-xl p-5">
          <h2 className="h2-bold mb-4">شرح قسم طلب المساعدة المدفوع</h2>
          <ul>
            {helpData.howItWorks.map((item, index) => (
              <p key={index} className="flex gap-2 text-foreground-300">
                <Icon
                  className="text-primary"
                  height="22"
                  icon="hugeicons:hand-pointing-left-03"
                  width="22"
                />
                {item}
              </p>
            ))}
          </ul>
        </div>

        <div className="bg-content2 dark:bg-content2 rounded-xl p-5">
          <h2 className="h2-bold mb-4">ما يمكنك طلبه؟</h2>
          <ul>
            {helpData.allowedRequests.map((item, index) => (
              <p key={index} className="flex gap-2 text-foreground-300">
                <Icon
                  className="text-primary"
                  height="22"
                  icon="hugeicons:hand-pointing-left-03"
                  width="22"
                />
                {item}
              </p>
            ))}
          </ul>
        </div>

        <div className="bg-content2 dark:bg-content2 rounded-xl p-5">
          <h2 className="h2-bold mb-4">ما لا يمكننا تنفيذه؟</h2>
          <ul>
            {helpData.notAllowedRequests.map((item, index) => (
              <p key={index} className="flex gap-2 text-foreground-300">
                <Icon
                  className="text-primary"
                  height="22"
                  icon="hugeicons:hand-pointing-left-03"
                  width="22"
                />
                {item}
              </p>
            ))}
          </ul>
        </div>

        <div className="bg-content2 dark:bg-content2 rounded-xl p-5">
          <h2 className="h2-bold mb-4">كيفية تقديم طلب ناجح؟</h2>
          <ul>
            {helpData.howToRequest.map((item, index) => (
              <p key={index} className="flex gap-2 text-foreground-300">
                <Icon
                  className="text-primary"
                  height="22"
                  icon="hugeicons:hand-pointing-left-03"
                  width="22"
                />
                {item}
              </p>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-content2 dark:bg-content2 rounded-xl p-5 mt-4">
        <h2 className="h2-bold mb-4">ملاحظات هامة</h2>
        <ul>
          {helpData.importantNotes.map((item, index) => (
            <p key={index} className="flex gap-2 text-foreground-300">
              <Icon
                className="text-primary"
                height="22"
                icon="hugeicons:hand-pointing-left-03"
                width="22"
              />
              {item}
            </p>
          ))}
        </ul>
      </div>

      <p className="text-xs font-light italic">{helpData.footer}</p>
      <Button
        color="primary"
        endContent={
          <Icon height="22" icon="hugeicons:pound-circle" width="22" />
        }
        variant="solid"
      >
        طلب خدمة مدفوعة
      </Button>
    </div>
  );
};

export default HelpRoute;
