import { Feedback } from '../models/feedback.model';
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


export const MOCK_PRODUCTS_NEXT_PAGE = {
  _embedded: {
    products: []
  },
  _links: {
    first: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=0&size=20"
    },
    self: {
      href: "http://localhost:8080/marketplace-service/api/product?type=all&page=1&size=20"
    }
  },
  page: {
    size: 20,
    totalElements: 1,
    totalPages: 1,
    number: 1
  }
} as ProductApiResponse;
export const MOCK_FEEDBACKS = [
  {
    username: "Jimmie1234",
    userAvatarUrl: "https://s3-alpha-sig.figma.com/img/4174/7a61/fcb322f8151e064ee1ab693f42b1a665?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWHonOhYAwtNr-Wpe66P6f5VTdU6-HRAS-zQorSGWvN~bG3d3c6YbEH9V9GS7TYpDAsxvMRdMBi~gXfaTYUKKGU8xNsXDJaq0lN3AhiP44fXkj46khPja3GM3eQRQvsH-H-N99woO57dc9wdHTY7jzl~e3LG11hiBI-q7PrP16Pv~DRy5gufOMviJLpBSxkZeJs0bdG-0W0toC0jx2xcqHaTOk3WZP6nuh31M2uD3eus3C1XZVIieeQB~U3csUlG5JxqzfLZxZa52W7jYq9PaowDFAolPAeRn1q0uojfJK4Loo1hdvGLFaZU0pI32xwLob8YvRNCkb7Yaf96fb9jQA__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id esLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id esLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id esLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id es",
    rating: 2
  },
  {
    username: "JoTheDeveloper",
    userAvatarUrl: "https://s3-alpha-sig.figma.com/img/9a4f/db1d/055576a3d9c734a92e307b6b0b59a48a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Edf7EvV5XN7pFjWpdixb8W3-la~fV89OUZVoflPFG4Nkqbu-4el0IFyQTj9bjeCxGbeUeOmEy9t8SXlGS~5ca0F-XlEGWOwcAGhq5nIiIB99~FVzLjOlsrfJZmOxML1RLE2RhQdP4xmcOLj5mL-~pIz5jsTFBG9t33g~ZSrw9Scnj3~fgVnBWlQdDlMpeGpTZx3fXQwXdADQ2Nw~8GhEspyk6WI10bMZKzQLasHAYuXkueClAz7Lt5b6D2PuXUSXso2D359x~Fw8u8c0Q7QsZsUkemA2rbt7TBMStlChDnqYERecFQdU~TiCUDOpgkzdjXmAUToZsfk~NqTE2YOXYg__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4
  },
  {
    username: "MatyK87",
    userAvatarUrl: "https://s3-alpha-sig.figma.com/img/ffa4/64f1/e45a915edbaaf61106d81f68dd3a627c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LxxtTbfKYK55LA~c83YaR4ew-CqRC6BYeruo6DvVrLNOOfUa9eOf7eato78ndfsMQk3IiLsUfKF5XpVYI8z1wZ2THR0YfVQKyyEi5P4WvRYXevm~iG6kp5PNquXHJV-2~tR~ilnCIpZTxV-ubTL9Yx2ot0~1WKW5kLZj7C1Bj2D9ypyq-1RFZf4rId2j0eo9ebaDG6rCamBog9cyGxcfcNlc8WiEzMSMuTkY5xgDwAfgQEFiUTAOSEj5qwaluOp3KNzzeNA~iEWrNjucWT-H4hA5m6EXzDM2Us7PzXktiiypvVG9R3brjum2queta-3I8uJUTsrrS9R2q9TXvacwww__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5
  },
  {
    username: "Liligalan32",
    userAvatarUrl: "https://s3-alpha-sig.figma.com/img/704a/9f21/3761e955d881e610f0027ad5b0d5594e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EnfYqoFCGcpco~9hm-Pb0WOlZc3~2ZizKoNbpgxcDLBHiADbS21EL6MmEFuxNs8ITmleVqH3dacTcJewulS~pjkRwQNmiHCXGjd-dJTmFQueKuSisGOKzG9AE4Iu9sqNoaihnYHSFV3BjrcIacVWnGQsS3P5ALngbEBTiuOXQnRogNrrg7YLwr6VtU06WxctdRCjSF3A9kJcX8YcpgBxsHOBCMZFyYC3X1WR14jpQBt9tg8LnWmOmgYIZEy-vhQ9gjtVKVVLa8UNxGCR0illoic67s2HzQsI3KcoIMFRIXYwCOOU2hGA3hJJ6IB3Et6U6vgkg5K-mU33hXd1VBmcLA__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 1
  },
  {
    username: "IamJames456",
    userAvatarUrl: "https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ti995zFAkdDw2dcguRUyTpYv7kNp7Nj~VYIcVObg7Z3k0tLNNELiQ2fmqO~oAPHaRdeLIm5qRZM5j25tmBSAe0iyMtYjxWueuN~37nw4qNvilc8sLaY9qb5F~N5wBYonPUhy-pJwx6AUQdl4DUVTE9sBPtBfG4d0q-wKZg7pv1bi~S8DsjspVmMnkI1ks~1jx33E2CQfXyI4MDL5R~ngQi1gMGgTFbe59DuOAITP0hDfSpy0OJ2jGD6ysnA2LNANDVeaF0fdJ3iUApt1Bs4gENzu5oTJybBJnifhtK4ATovmbSRapB2NtsMySpsSX2Juaeax~o6A7kG0IwG-xG~v7A__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    rating: 3
  },
  {
    username: "StefCH47",
    userAvatarUrl: "https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ti995zFAkdDw2dcguRUyTpYv7kNp7Nj~VYIcVObg7Z3k0tLNNELiQ2fmqO~oAPHaRdeLIm5qRZM5j25tmBSAe0iyMtYjxWueuN~37nw4qNvilc8sLaY9qb5F~N5wBYonPUhy-pJwx6AUQdl4DUVTE9sBPtBfG4d0q-wKZg7pv1bi~S8DsjspVmMnkI1ks~1jx33E2CQfXyI4MDL5R~ngQi1gMGgTFbe59DuOAITP0hDfSpy0OJ2jGD6ysnA2LNANDVeaF0fdJ3iUApt1Bs4gENzu5oTJybBJnifhtK4ATovmbSRapB2NtsMySpsSX2Juaeax~o6A7kG0IwG-xG~v7A__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat.",
    rating: 3
  }
] as unknown as Feedback[];