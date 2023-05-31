export interface TypeLink {
  icon: React.ReactNode;
  href: string;
}

export interface TypeVolunteer {
  image: string;
  name: string;
  office: string;
  links: TypeLink[];
}
