import type { Education } from "./education";
import type { Experience } from "./experience";
import type { PersonalInfo } from "./personal";

export interface Project {
  title: string;
  description: string[];
}

export interface Resume {
  personal: PersonalInfo;
  experience: Experience;
  education: Education;
  skills: string[];
  projects: Project[];
}
