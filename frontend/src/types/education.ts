export interface Education {
  title: string;
  school: string;
  location: string;
  startDate: Date;
  endDate?: Date | undefined;
  description: string[];
}
