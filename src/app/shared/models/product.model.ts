import { MavenArtifact } from './maven-artifact.model';

export interface Product {
  id: string;
  version: string;
  name: string;
  shortDescription: string;
  type: string;
  logoUrl: string;
  cost: string;
  platformReview: string;
  vendor: string;
  vendorImage: string;
  vendorUrl: string;
  sourceUrl: string;
  statusBadgeUrl: string;
  language: string;
  industry: string;
  listed: boolean;
  compatibility: string;
  tags: string[];
  validate: boolean;
  versionDisplay: string;
  installMatcher: string;
  mavenArtifacts: MavenArtifact[];
  contactUs: boolean;
}
