import type { StackEnum } from "./types";

export interface Profile {
  name: string;
  contacts: Contacts;
  about: About;
  uni: University;
  courses: string[];
  jobs: Job[];
  projects: Project[];
  page: Page;
}

export interface About {
  about: string;
  profession: string;
  description: string;
  available: string;
  contact: string;
  projects: string;
  accents: Accent[];
}

export interface Accent {
  title: string;
  describtion: string;
  icon: string;
}

export interface Contacts {
  callMe: string;
  github: string[];
  email: string[];
  location: string[];
  telegram: string[];
}

export interface Page {
  about: string;
  intro: string;
  work: string;
  education: string;
  projects: string;
  courses: string;
  contacts: string;
  pdf: string;
  gitAd: string;
  achievements: string;
  skills: string;
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
  image: string;
  gif?: string;
}

export enum Language {
  EN = "en",
  RU = "ru",
  CZ = "cz",
}
