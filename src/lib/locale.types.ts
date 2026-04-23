import type { StackEnum } from "./types";

export interface Profile {
  name: string;
  email: string;
  github: string;
  location: string;
  uni: University;
  courses: string[];
  jobs: Job[];
  projects: Project[];
  page: Page;
}

export interface Page {
  intro: string;
  work: string;
  education: string;
  projects: string;
  courses: string;
  contacts: string;
  pdf: string;
  telegram: string;
  gitAd: string;
  achievements: string;
}

export interface University {
  name: string;
  year: string;
  program: string;
  specialization: string;
}

export interface Job {
  company: string;
  position: string;
  url: string;
  year: string;
  months: string;
  responsible: string;
  achievements: string[];
  stack: StackEnum[];
  icon: string;
}

export interface Project {
  name: string;
  github: string;
  description: string;
  features: string[];
  stack: StackEnum[];
  demo?: string;
}

export enum Language {
  EN = "en",
  RU = "ru",
  CZ = "cz",
}
