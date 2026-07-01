export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
};
