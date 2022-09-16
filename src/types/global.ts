export type Work = {
  fieldId: string;
  title: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  description: string;
  link: string;
  developer: string;
  technologies: Array<{
    fieldId: string;
    technology: string;
  }>;
};
