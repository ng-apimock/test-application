export interface Repo {
  id: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  full_name: string;
  owner: Owner;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  html_url: string;
  description: string;
  license: License;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  open_issues: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  default_branch: string;
}

export interface Owner {
  login: string;
  id: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  html_url: string;
  type: RepoType;
}

export enum RepoType {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Organization
}

export interface License {
  key: string;
  name: string;
  url: string;
}
