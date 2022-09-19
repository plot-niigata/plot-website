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

export type Button = {
  name: string;
  href: string;
  style: Style;
};

export type Style = {
  color: string;
  fontSize: string;
  border?: string;
  backgroundColor?: string;
  bordreRadius: string;
};
