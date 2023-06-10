export class Project {
  name!: string;
  description?: string;
  image?: string;
  links?: Link[];
  images?: string[];

}

export class Link {
  link!: string;
  name!: string;
  gitHub?: boolean;
}
