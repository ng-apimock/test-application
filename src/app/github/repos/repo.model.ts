export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  html_url: string;
  description: string;
  license: License;
  open_issues: number;
  default_branch: string;
}

export interface Owner {
  login: string;
  id: number;
  html_url: string;
  type: RepoType;
}

export enum RepoType {
  Organization
}

export interface License {
  key: string;
  name: string;
  url: string;
}
