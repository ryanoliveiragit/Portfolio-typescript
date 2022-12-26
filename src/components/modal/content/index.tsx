export interface Items {
  label: string;
  subLabel?: string;
  href?: string;
  title?: string;
}

export interface ItemsProps {
  label?: string;
  href?: string;
  children?: Items[];
}

export const itemsCmdc: ItemsProps[] = [
  {
    label: "SHOP",
    href: "#",
  },
  {
    label: "SOBRE",
    href: "#",
  },
  {
    label: "PROJETOS",
    href: "#",
  },
  {
    label: "SETUP",
    href: "#",
  },
  {
    label: "SHOP",
    href: "#",
  },
];
