export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate?: Date | undefined;
    description: string[];
}
