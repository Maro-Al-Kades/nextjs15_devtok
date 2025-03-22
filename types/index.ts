import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface SidebarLink {
  icon: string;
  route: string;
  label: string;
}

export interface Job {
  id?: string;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
}

export interface Country {
  name: {
    common: string;
  };
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

// export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;

export interface QuestionFilter {
  icon: string;
  text: string;
  href: string;
}

export interface Template {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
  price: number;
  image: string;
  duration: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  category: string;
  rating: number;
  studentsCount: number;
  lessons: number;
}
