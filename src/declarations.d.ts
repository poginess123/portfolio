declare module "@/constants/experience" {
  export interface Experience {
    start_year: string;
    end_year: string;
    company_name: string;
    details: string;
    tools: string[];
    samples?: {
      title?: string;
      link?: string;
      img?: string;
      description?: string;
    }[]
  }

  export const experiences: Experience[];
}