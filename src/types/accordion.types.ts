export type AccordionItemProps = {
  title: string;
  content: any;
  length: number;
  iconLeft: React.ReactNode;
  iconOpen: React.ReactNode;
  iconClose: React.ReactNode;
};

export interface IData {
  title: string;
  content: any;
}

export type AccordionProps = {
  data: IData[];
  iconLeft: React.ReactNode;
  iconOpen: React.ReactNode;
  iconClose: React.ReactNode;
};
