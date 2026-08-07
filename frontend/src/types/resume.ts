import type { Education } from "./education";
import type { Experience } from "./experience";
import type { PersonalInfo } from "./personal";

export interface Resume {
  personal: PersonalInfo;
  experience: Experience;
  education: Education;
}
