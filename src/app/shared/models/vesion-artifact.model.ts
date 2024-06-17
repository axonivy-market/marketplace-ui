export interface Artifact {
  name: string;
  downloadUrl: string;
}

export interface VersionData {
  [version: string]: Artifact[];
}
