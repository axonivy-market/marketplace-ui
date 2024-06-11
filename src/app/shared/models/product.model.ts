import { MavenArtifact } from './maven-artifact.model';

export interface Product {
  $schema: string;
  id: string;
  version: string;
  name: string;
  shortDescription: string;
  type: string;
  platformReview: string;
  // vendorImage: string;
  listed: boolean;
  tags: string[];
  versionDisplay: string;
  installMatcher: string;
  logoUrl: string;
  key: string;
}
