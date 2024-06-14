import { MavenArtifact } from './maven-artifact.model';

export interface Product {
  id: string;
  version: string;
  name: string;
  shortDescription: string;
  type: string;
<<<<<<< HEAD
=======
  logoUrl: string;
  cost: string;
>>>>>>> origin/feature/MARP-394-MP-API-to-fetch-all-artifacts-and-search
  platformReview: string;
  // vendorImage: string;
  listed: boolean;
  tags: string[];
  versionDisplay: string;
  installMatcher: string;
<<<<<<< HEAD
  logoUrl: string;
  key: string;
=======
  mavenArtifacts: MavenArtifact[];
  contactUs: boolean;
  _links?: {
    self: {
      href: string;
    };
  };
>>>>>>> origin/feature/MARP-394-MP-API-to-fetch-all-artifacts-and-search
}
