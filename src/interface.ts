export interface Job {
    id: string;
    type: string;
    title: string;
    description: string;
    salary: string;
    location: string;
    company: {
      name: string;
      contactEmail: string;
      description: string;
      contactPhone: string;
    };
  }