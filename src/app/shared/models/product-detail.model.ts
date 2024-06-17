import { Product } from './product.model';

export interface ProductDetail extends Product {
  vendor?: string;
  vendorUrl?: string;
  newestReleaseVersion?: string;
  cost?: string;
  sourceUrl?: string;
  statusBadgeUrl?: string;
  language?: string;
  industry?: string;
  compatibility?: string;
  contactUs?: string;
}
