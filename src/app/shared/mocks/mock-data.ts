import { ProductApiResponse } from "../models/apis/product-response.model";

export const MOCK_PRODUCTS = {
  _embedded: {
    products: [
      {
        id: "amazon-comprehend",
        name: "Amazon Comprehend",
        shortDescription: "Amazon Comprehend is a AI service that uses machine learning to uncover information in unstructured data.",
        logoUrl: "https://raw.githubusercontent.com/axonivy-market/market/master/market/connector/amazon-comprehend/logo.png",
        type: "connector",
        tags: [
          "AI"
        ],
        _links: {
          self: {
            href: "http://localhost:8080/marketplace-service/api/product-details/amazon-comprehend?type=connector"
          }
        }
      }
    ]
  },
  _links: {
    first: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=0&size=20"
    },
    self: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=0&size=20"
    },
    next: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=1&size=20"
    },
    last: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=3&size=20"
    }
  },
  page: {
    size: 20,
    totalElements: 70,
    totalPages: 4,
    number: 0
  }
} as ProductApiResponse;

export const MOCK_PRODUCTS_FILTER_CONNECTOR = {
  _embedded: {
    products: [
      {
        id: "amazon-comprehend",
        name: "Amazon Comprehend",
        shortDescription: "Amazon Comprehend is a AI service that uses machine learning to uncover information in unstructured data.",
        logoUrl: "https://raw.githubusercontent.com/axonivy-market/market/master/market/connector/amazon-comprehend/logo.png",
        type: "connector",
        tags: [
          "AI"
        ],
        _links: {
          self: {
            href: "http://localhost:8080/marketplace-service/api/product-details/amazon-comprehend?type=connector"
          }
        }
      },
      {
        id: "a-trust",
        name: "A-Trust",
        shortDescription: "Clearly authenticate your Austrian customers with a mobile phone signature.",
        logoUrl: "https://raw.githubusercontent.com/axonivy-market/market/master/market/connector/a-trust/logo.png",
        type: "connector",
        tags: [
          "e-signature"
        ],
        _links: {
          self: {
            href: "http://localhost:8080/marketplace-service/api/product-details/a-trust?type=connector"
          }
        }
      },
      {
        id: "mailstore-connector",
        name: "Mailstore",
        shortDescription: "Enhance business processes by streamlining email management, supporting both IMAP and POP3 with robust SSL encryption.",
        logoUrl: "https://raw.githubusercontent.com/axonivy-market/market/master/market/connector/mailstore-connector/logo.png",
        type: "connector",
        tags: [
          "office",
          "email"
        ],
        _links: {
          self: {
            href: "http://localhost:8080/marketplace-service/api/product-details/mailstore-connector?type=connector"
          }
        }
      }
    ]
  },
  _links: {
    first: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=0&size=20"
    },
    self: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=0&size=20"
    },
    next: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=1&size=20"
    },
    last: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=3&size=20"
    }
  },
  page: {
    size: 20,
    totalElements: 70,
    totalPages: 4,
    number: 0
  }
} as ProductApiResponse;

