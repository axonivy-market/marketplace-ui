import { MavenArtifact } from './maven-artifact.model';

export interface Product {
  id: string;
  version: string;
  name: string;
  shortDescription: string;
  type: string;
  logoUrl: string;
  listed: boolean;
  platformReview: string;
  tags: string[];
  validate: boolean;
  versionDisplay: string;
  installMatcher: string;
  mavenArtifacts: MavenArtifact[];
  _links?: {
    self: {
      href: string;
    };
  };
}
