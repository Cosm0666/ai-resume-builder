export interface Education {
  title: string;
  school: string;
  location: string;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  description: string[];
}
