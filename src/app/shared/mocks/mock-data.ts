import { Feedback } from '../models/feedback.model';
import { Product } from '../models/product.model';

export const MOCK_PRODUCTS = [
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'adobe-acrobat-sign-connector',
    name: 'Adobe Acrobat Connector',
    description:
      'Use this connector to send, sign, track, and manage signature processes in Axon Ivy.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/adobe-acrobat-sign-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/adobe-acrobat-sign-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['e-signature'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Adobe Acrobat Sign Connector',
        groupId: 'com.axonivy.connector.adobe.acrobat.sign',
        artifactId: 'adobe-acrobat-sign-connector-product',
        archivedArtifacts: [
          {
            lastVersion: '10.0.15',
            groupId: 'com.axonivy.connector.adobe.esign',
            artifactId: 'adobe-esign-connector-product'
          }
        ],
        type: 'zip'
      },
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Adobe Acrobat Sign Connector',
        groupId: 'com.axonivy.connector.adobe.acrobat.sign',
        artifactId: 'adobe-acrobat-sign-connector',
        archivedArtifacts: [
          {
            lastVersion: '10.0.15',
            groupId: 'com.axonivy.connector.adobe.esign',
            artifactId: 'adobe-esign-connector'
          }
        ]
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'alfrescoecm',
    name: 'Alfresco ECM',
    description:
      'Using Alfresco ECM it is easy to connect, manage and protect important company information.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/alfresco-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/alfresco-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['ECM'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Alfresco ECM Product',
        groupId: 'com.axonivy.connector.alfresco',
        artifactId: 'alfresco-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'amazon-comprehend',
    name: 'Amazon Comprehend API',
    description:
      'Amazon Comprehend is a NLP service that uses machine learning to uncover information in unstructured data.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/amazon-comprehend-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/amazon-comprehend-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['AI'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Amazon Comprehend Product',
        groupId: 'com.axonivy.connector.amazon.comprehend',
        artifactId: 'amazon-comprehend-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'amazon-lex',
    name: 'Amazon Lex Runtime API',
    description:
      'Amazon Lex is a NLP service to build sophisticated, natural language, conversational bots (chatbots).',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/amazon-lex-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/amazon-lex-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['AI'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Amazon Lex Product',
        groupId: 'com.axonivy.connector.amazon.lex',
        artifactId: 'amazon-lex-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'aspose-barcode-demo',
    name: 'Aspose.Barcode Demo',
    description: 'See how to use the Aspose.Barcode library',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/doc-fatcory',
    statusBadgeUrl:
      'https://github.com/axonivy-market/doc-factory/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Aspose.Barcode Demo Product',
        groupId: 'com.axonivy.utils.docfactory',
        artifactId: 'aspose-barcode-demo-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'aspose-email-demo',
    name: 'Aspose.Email Demo',
    description: 'See how to use the Aspose.Email library',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/doc-fatcory',
    statusBadgeUrl:
      'https://github.com/axonivy-market/doc-factory/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Aspose.Email Demo Product',
        groupId: 'com.axonivy.utils.docfactory',
        artifactId: 'aspose-email-demo-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'a-trust',
    name: 'A-Trust',
    description:
      'Clearly authenticate your customers with a mobile phone signature on the web.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/a-trust-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/a-trust-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['e-signature'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'A-Trust Product',
        groupId: 'com.axonivy.connector.atrust',
        artifactId: 'a-trust-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'axonivy-express',
    name: 'Axon Ivy Express',
    description:
      'Simple process app creation for business users - of course, no-code-based.',
    type: 'util',
    platformReview: '5',
    sourceUrl: 'https://github.com/axonivy-market/axonivy-express',
    language: 'EN/DE/FR/ES',
    industry: 'Cross-Industry',
    tags: ['no-code'],
    versionDisplay: 'axonivy-express',
    installMatcher: 'best-match',
    mavenArtifacts: [
      {
        key: 'axonivy-express-product',
        name: 'Axon Ivy Express Product',
        groupId: 'com.axonivy.portal',
        artifactId: 'axonivy-express-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'basic-workflow-ui',
    name: 'Basic Workflow UI',
    description: 'Small and smart workflow ui',
    type: 'util',
    sourceUrl: 'https://github.com/axonivy-market/basic-workflow-ui',
    language: 'EN/DE/FR',
    industry: 'Cross-Industry',
    listed: false,
    tags: ['workflow-ui'],
    mavenArtifacts: [
      {
        name: 'Basic Workflow UI Product',
        groupId: 'ch.ivyteam.ivy.project.wf',
        artifactId: 'basic-workflow-ui-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'connectivity-demo',
    name: 'Connectivity Demos',
    description:
      '3rd party integration based on web service technology such as REST and SOAP is a must.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/demo-projects',
    statusBadgeUrl:
      'https://github.com/axonivy-market/demo-projects/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Connectivity Demos Product',
        groupId: 'com.axonivy.demo',
        artifactId: 'connectivity-demos-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'cronjob',
    name: 'Cron Job',
    description:
      'Cron Job is a job-firing schedule that recurs based on calendar-like notions.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/cronjob',
    statusBadgeUrl:
      'https://github.com/axonivy-market/cronjob/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['utils'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Cron Job Product',
        groupId: 'com.axonivy.utils.cronjob',
        artifactId: 'cronjob-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'currencyConverter',
    name: 'Currency Converter API',
    description:
      'Frankfurter is an open-source, simple, and lightweight API for current and historical foreign exchange (forex) rates.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/currency-converter-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/currency-converter-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['converter'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Currency Converter Connector Product',
        groupId: 'com.axonivy.connector.currency',
        artifactId: 'currency-converter-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'custom-mail-demo',
    name: 'Custom Mail Demo',
    description:
      'Demonstrating how mails can be customized by providing mail processes.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/custom-mail-demo',
    statusBadgeUrl:
      'https://github.com/axonivy-market/custom-mail-demo/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    mavenArtifacts: [
      {
        name: 'Custom Mail Demo Product',
        groupId: 'com.axonivy.demo.custom.mail',
        artifactId: 'custom-mail-demo-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'db-demos',
    name: 'Database Demos',
    description:
      'Learn how to create, read, update and delete data from database tables.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/db-demos',
    statusBadgeUrl:
      'https://github.com/axonivy-market/db-demos/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Database Demos Product',
        groupId: 'com.axonivy.demo',
        artifactId: 'db-demos-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'deepl-connector',
    name: 'DeepL connector',
    description:
      'Experience the power of seamless communication with our translation service powered by DeepL.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/deepl-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/deepl-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['AI'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'DeepL connector',
        groupId: 'com.axonivy.connector.deepl',
        artifactId: 'deepl-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'demos-app',
    name: 'Demos Application',
    description: 'Demos Application',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/demo-projects',
    statusBadgeUrl:
      'https://github.com/axonivy-market/demo-projects/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    listed: false,
    tags: ['demo'],
    mavenArtifacts: [
      {
        name: 'Demo App Product',
        groupId: 'com.axonivy.demo',
        artifactId: 'ivy-demos-app-product',
        type: 'zip'
      },
      {
        key: 'demos',
        name: 'Demo App',
        groupId: 'com.axonivy.demo',
        artifactId: 'ivy-demos-app',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'dmn-decision-table',
    name: 'DMN Decision Table',
    description:
      'Control your business processes with standardised DMN decision tables.',
    type: 'util',
    platformReview: '4',
    sourceUrl: 'https://github.com/axonivy-market/dmn-decision-table',
    statusBadgeUrl:
      'https://github.com/axonivy-market/dmn-decision-table/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['rule-engine'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Decision Table Product',
        groupId: 'com.axonivy.dmn.decisiontable',
        artifactId: 'dmn-decision-table-product',
        type: 'zip'
      },
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Decision Table',
        groupId: 'com.axonivy.dmn.decisiontable',
        artifactId: 'dmn-decision-table',
        type: 'jar'
      },
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Decision Table Demo',
        groupId: 'com.axonivy.dmn.decisiontable',
        artifactId: 'dmn-decision-table-demo'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'doc-factory',
    name: 'DocFactory',
    description:
      'Based on Aspose technology the DocFactory creates any type of document out of your process data.',
    type: 'util',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/doc-factory',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['document'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'DocFactory Product',
        groupId: 'com.axonivy.utils.docfactory',
        artifactId: 'doc-factory-product',
        type: 'zip'
      },
      {
        name: 'DocFactory Documentation',
        groupId: 'com.axonivy.utils.docfactory',
        artifactId: 'doc-factory-doc',
        type: 'zip',
        doc: true
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'docker-connector',
    name: 'Docker Connector',
    description:
      'Use this connector to create, start, stop, and remove Docker containers.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/docker-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/docker-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['container'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Docker Connector',
        groupId: 'com.axonivy.market',
        artifactId: 'docker-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'docusign-connector',
    name: 'DocuSign',
    description:
      'DocuSign allows organizations to sign any document electronically on different systems.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/docusign-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/docusign-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['e-signature'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'DocuSign Connector Product',
        groupId: 'com.axonivy.connector.docusign',
        artifactId: 'docusign-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'docuware-connector',
    name: 'DocuWare',
    description:
      'DocuWare digitizes and secures your information to flow effortlessly.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/docuware-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/docuware-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['office'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'DocuWare Connector Product',
        groupId: 'com.axonivy.connector.docuware',
        artifactId: 'docuware-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'email-encryption',
    name: 'Email encryption',
    description:
      'Send encrypted emails directly from a business process using OpenSSL.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/email-encryption',
    statusBadgeUrl:
      'https://github.com/axonivy-market/email-encryption/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['utils'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Email encryption Product',
        groupId: 'com.axonivy.utils.email.encryption',
        artifactId: 'email-encryption-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'employee-onboarding',
    version: '1.0',
    name: 'Employee Onboarding',
    description:
      'This solution helps HR managers to accelerate time-to-market for employee onboarding.',
    type: 'solution',
    cost: 'paid',
    language: 'EN',
    industry: 'Cross-Industry',
    tags: ['hr'],
    contactUs: true
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'error-handling-demo',
    name: 'Error Handling Demos',
    description:
      'Errors in process automation mean leaving the happy path. Learn more about business and technical errors.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/demo-projects',
    statusBadgeUrl:
      'https://github.com/axonivy-market/demo-projects/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Error Handling Demos Product',
        groupId: 'com.axonivy.demo',
        artifactId: 'error-handling-demos-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'excel-connector',
    name: 'Microsoft Excel',
    description:
      'It has never been easier to read and write Microsoft Excel files within your process automation projects.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/excel-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/excel-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['office'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Excel Connector Product',
        groupId: 'com.axonivy.connector.excel',
        artifactId: 'excel-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'excel-importer',
    name: 'Excel dialog importer',
    description:
      'Turns your Excel sheets into a full featured web application in seconds.',
    type: 'util',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/excel-importer',
    statusBadgeUrl:
      'https://github.com/axonivy-market/excel-importer/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['low-code'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Excel Importer Product',
        groupId: 'com.axonivy.util.excel',
        artifactId: 'excel-importer-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'express-importer',
    name: 'Express importer',
    description:
      'Integrates your No-Code initiatives into your Designer project.',
    type: 'util',
    platformReview: '3.5',
    sourceUrl: 'https://github.com/axonivy-market/express-importer',
    statusBadgeUrl:
      'https://github.com/axonivy-market/express-importer/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['utils', 'no-code'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Express Importer Product',
        groupId: 'com.axonivy.portal.express',
        artifactId: 'express-importer-product',
        type: 'zip'
      },
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Express Importer',
        groupId: 'com.axonivy.portal.express',
        artifactId: 'express-importer',
        type: 'jar'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'genderize-io-connector',
    name: 'Genderize.io API',
    description:
      'A simple API to predict the gender of a person given their name. 1000 names/day are free.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/genderize-io-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/genderize-io-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['helper'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Genderize.io API Product',
        groupId: 'com.axonivy.connector.genderize',
        artifactId: 'genderize-io-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'google-maps-connector',
    name: 'Google Maps API',
    description:
      'Google Maps API lets you customize maps with your own content & imagery for display on web pages & mobile devices.',
    type: 'connector',
    sourceUrl: 'https://github/axonivy-market/google-maps-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/google-maps-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['location'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Google Maps Connector Product',
        groupId: 'com.axonivy.connector.google.maps',
        artifactId: 'google-maps-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'google-translate',
    name: 'Google Translate',
    description:
      'Explore the wonders of smooth communication with our Google Translate AI service.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/google-translate-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/google-translate-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['AI'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Google translate connector',
        groupId: 'com.axonivy.connector.google.translate',
        artifactId: 'google-translate-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'graphql-demo',
    name: 'GraphQL Demo',
    description:
      'Sample GraphQL endpoint that allows clients to query for tasks and users.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/graphql-demo',
    statusBadgeUrl:
      'https://github.com/axonivy-market/graphql-demo/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'GraphQL Demo Product',
        groupId: 'com.axonivy.demo.graphql',
        artifactId: 'graphql-demo-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'html-dialog-demo',
    name: 'Html Dialog Demos',
    description:
      'User-friendly forms for all devices is key in  process automation. Learn more about nice GUIs.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/demo-projects',
    statusBadgeUrl:
      'https://github.com/axonivy-market/demo-projects/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Html Dialog Demos Product',
        groupId: 'com.axonivy.demo',
        artifactId: 'html-dialog-demos-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'html-dialog-utils',
    name: 'HTML Dialog Utils',
    description:
      'Collection of useful utilities to help you by the HTML Dialog implementation process.',
    type: 'util',
    platformReview: '4',
    sourceUrl: 'https://github.com/axonivy-market/html-dialog-utils',
    statusBadgeUrl:
      'https://github.com/axonivy-market/html-dialog-utils/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['utils'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'HTML Dialog Utils',
        groupId: 'com.axonivy.utils.htmldialog',
        artifactId: 'html-dialog-utils-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'intellix-connector',
    name: 'Axon Ivy IDP',
    description:
      'Keying in data is slow, error-prone, and impossible to scale efficiently. Not with Axon Ivy IDP powered by DocuWare.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/intellix-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/intellix-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['office'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Intellix Connector Product',
        groupId: 'com.axonivy.connector.intellix',
        artifactId: 'axonivy-intellix-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'jira-connector',
    name: 'Atlassian Jira Connector',
    description:
      "Atlassian's Jira Connector lets you track issues directly from your digital process automation platform.",
    type: 'connector',
    platformReview: '4.5',

    vendor: 'FROX AG',
    vendorImage: 'frox.png',
    vendorUrl: 'https://www.frox.ch',

    sourceUrl: 'https://github.com/axonivy-market/jira-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/jira-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['helper'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Jira Connector Product',
        groupId: 'com.axonivy.connector.jira',
        artifactId: 'jira-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'kafka-connector',
    name: 'Apache Kafka',
    description: 'Produce and consume Apache Kafka messages.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/kafka-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/kafka-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['messaging'],
    mavenArtifacts: [
      {
        name: 'Kafka Connector Product',
        groupId: 'com.axonivy.connector.kafka',
        artifactId: 'kafka-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'ldap-connector',
    name: 'Active Directory',
    description:
      'Read and write Microsoft Active Directory entries easily using LDAP.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/ldap-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/ldap-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['utils'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Active Directory Connector Product',
        groupId: 'com.axonivy.connector.ldap',
        artifactId: 'ldap-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'mailstore-connector',
    name: 'Mailstore',
    description: 'Work with emails stored in IMAP or POP3 mailboxes.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/mailstore-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/mailstore-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['office', 'email'],
    mavenArtifacts: [
      {
        name: 'Mailstore Connector Product',
        groupId: 'com.axonivy.connector.mailstore',
        artifactId: 'mailstore-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'master-detail-demo',
    name: 'Master-Detail interface',
    description:
      'Exemplary UI possibilities in Axon Ivy: Utilizing the Master-Detail pattern as a best practice.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/master-detail',
    statusBadgeUrl:
      'https://github.com/axonivy-market/master-detail/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    mavenArtifacts: [
      {
        name: 'Master Detail',
        groupId: 'com.axonivy.demo.masterdetail',
        artifactId: 'master-detail-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'metaproc-connector',
    name: 'Axon Ivy RPA',
    description:
      'Robotic Process Automation: Eliminate manual errors. Accelerate processes. Scale effortlessly.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/metaproc-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/metaproc-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['RPA'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'meta:proc Connector Product',
        groupId: 'com.axonivy.connector.metaproc',
        artifactId: 'metaproc-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'msgraph',
    name: 'Microsoft 365',
    description:
      'The Microsoft Graph API is the gateway to data and intelligence in Microsoft 365.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/msgraph-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/msgraph-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    compatibility: '9.4+',
    tags: ['office'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Microsoft Graph Product',
        groupId: 'com.axonivy.connector.office365',
        artifactId: 'msgraph-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'msgraph-calendar',
    version: '1.0',
    name: 'Microsoft Calendar',
    description:
      'Microsoft Calendar is part of the Microsoft 365 API that lets you manage emails and contacts.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/msgraph-connector',
    language: 'English',
    industry: 'Cross-Industry',
    compatibility: '9.4+',
    tags: ['office'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Microsoft Calendar Product',
        groupId: 'com.axonivy.connector.office365',
        artifactId: 'msgraph-calendar-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'msgraph-chat',
    version: '1.0',
    name: 'Microsoft Teams',
    description:
      'Microsoft Teams notification on new Tasks and custom Chat integration features.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/msgraph-connector',
    language: 'English',
    industry: 'Cross-Industry',
    compatibility: '10.0+',
    tags: ['office'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Microsoft Chat Product',
        groupId: 'com.axonivy.connector.office365',
        artifactId: 'msgraph-teams-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'msgraph-mail',
    version: '1.0',
    name: 'Microsoft Mail',
    description:
      'Microsoft Mail  is part of the Microsoft 365 API that lets you manage emails, schedule meetings and much more.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/msgraph-connector',
    language: 'English',
    industry: 'Cross-Industry',
    compatibility: '9.4+',
    tags: ['office'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Microsoft Mail Product',
        groupId: 'com.axonivy.connector.office365',
        artifactId: 'msgraph-mail-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'msgraph-todo',
    name: 'Microsoft To Do',
    description:
      'Microsoft To Do provides a simple way for people to manage their tasks and plan their day.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/msgraph-connector',
    language: 'English',
    industry: 'Cross-Industry',
    compatibility: '9.4+',
    tags: ['office'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Microsoft ToDo Product',
        groupId: 'com.axonivy.connector.office365',
        artifactId: 'msgraph-todo-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'openai-assistant',
    name: 'ChatGPT Assistant',
    description:
      'The ChatGPT assistant explains, maintains and extends code for you',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/openai-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/openai-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['AI'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'OpenAI Assistant',
        groupId: 'com.axonivy.connector.openai',
        artifactId: 'openai-assistant-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'openai-connector',
    name: "OpenAI's ChatGPT API",
    description:
      'OpenAI’s ChatGPT is a text-based, general-purpose productivity application that perfectly fits to process automation.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/openai-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/openai-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['AI'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'OpenAI connector',
        groupId: 'com.axonivy.connector.openai',
        artifactId: 'openai-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'persistence-utils',
    name: 'Persistence Utils',
    description:
      'Set up Axon Ivy projects even faster with the Standard Persistency Library.',
    type: 'util',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/persistence-utils',
    statusBadgeUrl:
      'https://github.com/axonivy-market/persistence-utils/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['utils'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Persistence Utils Product',
        groupId: 'com.axonivy.utils.persistence',
        artifactId: 'persistence-utils-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'portal',
    name: 'Axon Ivy Portal',
    description:
      'The Axon Ivy Portal is the single point of contact for any end-user using the Axon Ivy platform.',
    type: 'util',
    platformReview: '5',
    sourceUrl: 'https://github.com/axonivy-market/portal',
    language: 'EN/DE/FR/ES',
    industry: 'Cross-Industry',
    tags: ['workflow-ui'],
    versionDisplay: 'portal',
    installMatcher: 'best-match',
    mavenArtifacts: [
      {
        key: 'portal-10',
        name: 'Portal App (10.0)',
        groupId: 'ch.ivyteam.ivy.project.portal',
        artifactId: 'portal-app',
        type: 'zip'
      },
      {
        name: 'Portal Guide (10.0)',
        groupId: 'ch.ivyteam.ivy.project.portal',
        artifactId: 'portal-guide',
        type: 'zip',
        doc: true
      },
      {
        key: 'portal',
        name: 'Portal App',
        groupId: 'com.axonivy.portal',
        artifactId: 'portal-app',
        type: 'zip'
      },
      {
        name: 'Portal Guide',
        groupId: 'com.axonivy.portal',
        artifactId: 'portal-guide',
        type: 'zip',
        doc: true
      },
      {
        name: 'Portal Product',
        groupId: 'com.axonivy.portal',
        artifactId: 'portal-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'processing-valve-demo',
    name: 'Processing Valve Demo',
    description: 'Processing Valve Demo',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy/extension-demos/',
    language: 'English',
    industry: 'Cross-Industry',
    listed: false,
    tags: ['demo'],
    mavenArtifacts: [
      {
        key: 'processing-valve',
        name: 'Processing Valve Demo',
        groupId: 'com.axonivy.demo.extensions',
        artifactId: 'processing-valve',
        type: 'jar'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'quick-start-tutorial',
    name: 'Quick Start Tutorial',
    description: 'Quick Start Tutorial',
    type: 'solution',
    platformReview: '4',
    sourceUrl: 'https://github.com/axonivy-market/demo-projects',
    statusBadgeUrl:
      'https://github.com/axonivy-market/demo-projects/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    listed: false,
    tags: ['demo'],
    mavenArtifacts: [
      {
        name: 'Quick Start Tutorial Product',
        groupId: 'com.axonivy.demo',
        artifactId: 'quick-start-tutorial-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'rule-engine-demo',
    name: 'Rule Engine Demos',
    description:
      'The separation of process logic and business logic accelerates time-to-market significantly.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/demo-projects',
    statusBadgeUrl:
      'https://github.com/axonivy-market/demo-projects/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Rule Engine Demos Product',
        groupId: 'com.axonivy.demo',
        artifactId: 'rule-engine-demos-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'salesforce-connector',
    name: 'Salesforce Connector',
    description:
      'This connector builds the REST API and provides a way to access Salesforce resources. A client can use the REST API to manipulate Salesforce objects.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/salesforce-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/salesforce-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['cloud-platform', 'helper'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Salesforce Connector',
        groupId: 'com.axonivy.connector.salesforce',
        artifactId: 'salesforce-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'sbb-connector',
    name: 'SBB Connector',
    description:
      'Use the Swiss Mobility API to integrate timetables, fare details and bookings of Swiss public transport into your business processes.',
    type: 'connector',
    platformReview: '5',
    sourceUrl: 'https://github.com/axonivy-market/sbb-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/sbb-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['transport'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'SBB Connector',
        groupId: 'com.axonivy.connector.sbb',
        artifactId: 'sbb-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'sftp-connector',
    name: 'SFTP',
    description:
      'SFTP client which uses the SFTP protocol to transfer files securely to and from a remote computer.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/sftp-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/sftp-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['sftp'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'SFTP Connector',
        groupId: 'com.axonivy.connector.sftp',
        artifactId: 'sftp-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    id: 'srf-weather-connector',
    name: 'SRF Weatherforecast API',
    description:
      "The SRF Weather REST API allows you to get weather forecastst for over 100'000 locations within Switzerland.",
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/srf-weather-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/srf-weather-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['Weather'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'SRF Weather connector',
        groupId: 'com.axonivy.connector.srf.weather',
        artifactId: 'srf-weather-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'stateful-datatable-demo',
    name: 'Stateful Datatable Demo',
    description:
      'A utility Dialog to implement a stateful-datatable with Ivy and Primefaces.',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/stateful-datatable',
    statusBadgeUrl:
      'https://github.com/axonivy-market/stateful-datatable/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Stateful Datatable Demo Product',
        groupId: 'com.axonivy.demo.statefuldatatable',
        artifactId: 'stateful-datatable-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'tel-search-ch-connector',
    name: 'Swiss phone directory',
    description:
      'Retrieve phone directory entries from Switzerland within your process work using the tel.search.ch API.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/tel-search-ch-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/tel-search-ch-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['utils'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'tel.search.ch Connector Product',
        groupId: 'com.axonivy.connector.telsearch',
        artifactId: 'tel-search-ch-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'threema-connector',
    name: 'Threema Connector',
    description: 'Use the Threema API to send secure messages.',
    type: 'connector',
    platformReview: '5',
    sourceUrl: 'https://github.com/axonivy-market/threema-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/threema-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['communication'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Threema Connector',
        groupId: 'com.axonivy.connector.threema',
        artifactId: 'threema-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'ui-path-connector',
    name: 'UiPath',
    description:
      'RPA and DPA together are the best and fastest way to start any digital transformation journey.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/ui-path-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/ui-path-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['RPA'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'UiPath Connector Product',
        groupId: 'com.axonivy.connector.uipath',
        artifactId: 'ui-path-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'ups-connector',
    name: 'UPS Connector',
    description:
      'Integrates UPS services (tracking, rates, address validation) into workflows via a REST API.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/ups-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/ups-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['helper'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'UPS Connector',
        groupId: 'com.axonivy.connector.ups',
        artifactId: 'ups-connector-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'visualvm-plugin',
    name: 'VisualVM Plugin',
    description:
      'VisualVM is a plugin that provides a visual interface for viewing information about the Axon Ivy Engine.',
    type: 'util',
    sourceUrl: 'https://github.com/axonivy-market/visualvm-plugin',
    statusBadgeUrl:
      'https://github.com/axonivy-market/visualvm-plugin/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['monitoring'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Visual VM Plugin Plugin',
        groupId: 'ch.ivyteam.visualvm',
        artifactId: 'visualvm-plugin-product',
        type: 'zip'
      },
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Visual VM Plugin',
        groupId: 'ch.ivyteam.visualvm',
        artifactId: 'visualvm-plugin',
        type: 'nbm'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'web-tester',
    name: 'Web Tester',
    description:
      'Easy Web-Integration tests for your process automation projects (PrimeFaces widgets + Selenium)',
    type: 'util',
    sourceUrl: 'https://github.com/axonivy/web-tester',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['testing'],
    mavenArtifacts: [
      {
        name: 'Web Tester Product',
        groupId: 'com.axonivy.ivy.webtest',
        artifactId: 'web-tester-product',
        type: 'zip',
        repoUrl: 'https://oss.sonatype.org/content/repositories/releases'
      },
      {
        name: 'Web Tester',
        groupId: 'com.axonivy.ivy.webtest',
        artifactId: 'web-tester',
        type: 'jar',
        repoUrl: 'https://oss.sonatype.org/content/repositories/releases'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'workflow-demo',
    name: 'Workflow Demos',
    description:
      'Learn more about human workflows, Adaptive Case Management (ACM) and Business Data usage',
    type: 'solution',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/demo-projects',
    statusBadgeUrl:
      'https://github.com/axonivy-market/demo-projects/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    tags: ['demo'],
    validate: true,
    mavenArtifacts: [
      {
        name: 'Workflow Demos Product',
        groupId: 'com.axonivy.demo',
        artifactId: 'workflow-demos-product',
        type: 'zip'
      }
    ]
  },
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'x-connector',
    version: '1.0',
    name: 'X (formerly Twitter) API',
    description:
      'With the X (formerly Twitter) API, Axon Ivy users can seamlessly post messages and engage with the X (formerly Twitter) network.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/x-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/x-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    compatibility: '9.2+',
    tags: ['social'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'X Connector Product',
        groupId: 'com.axonivy.connector.x',
        artifactId: 'x-connector-product',
        type: 'zip'
      }
    ]
  }
] as unknown as Product[];

export const MOCK_FEEDBACKS = [
  {
    userName: "Jimmie1234",
    userAvartarUrl: "https://s3-alpha-sig.figma.com/img/4174/7a61/fcb322f8151e064ee1ab693f42b1a665?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWHonOhYAwtNr-Wpe66P6f5VTdU6-HRAS-zQorSGWvN~bG3d3c6YbEH9V9GS7TYpDAsxvMRdMBi~gXfaTYUKKGU8xNsXDJaq0lN3AhiP44fXkj46khPja3GM3eQRQvsH-H-N99woO57dc9wdHTY7jzl~e3LG11hiBI-q7PrP16Pv~DRy5gufOMviJLpBSxkZeJs0bdG-0W0toC0jx2xcqHaTOk3WZP6nuh31M2uD3eus3C1XZVIieeQB~U3csUlG5JxqzfLZxZa52W7jYq9PaowDFAolPAeRn1q0uojfJK4Loo1hdvGLFaZU0pI32xwLob8YvRNCkb7Yaf96fb9jQA__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id esLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id esLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id esLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id es"
  },
  {
    userName: "JoTheDeveloper",
    userAvartarUrl: "https://s3-alpha-sig.figma.com/img/9a4f/db1d/055576a3d9c734a92e307b6b0b59a48a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Edf7EvV5XN7pFjWpdixb8W3-la~fV89OUZVoflPFG4Nkqbu-4el0IFyQTj9bjeCxGbeUeOmEy9t8SXlGS~5ca0F-XlEGWOwcAGhq5nIiIB99~FVzLjOlsrfJZmOxML1RLE2RhQdP4xmcOLj5mL-~pIz5jsTFBG9t33g~ZSrw9Scnj3~fgVnBWlQdDlMpeGpTZx3fXQwXdADQ2Nw~8GhEspyk6WI10bMZKzQLasHAYuXkueClAz7Lt5b6D2PuXUSXso2D359x~Fw8u8c0Q7QsZsUkemA2rbt7TBMStlChDnqYERecFQdU~TiCUDOpgkzdjXmAUToZsfk~NqTE2YOXYg__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    userName: "MatyK87",
    userAvartarUrl: "https://s3-alpha-sig.figma.com/img/ffa4/64f1/e45a915edbaaf61106d81f68dd3a627c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LxxtTbfKYK55LA~c83YaR4ew-CqRC6BYeruo6DvVrLNOOfUa9eOf7eato78ndfsMQk3IiLsUfKF5XpVYI8z1wZ2THR0YfVQKyyEi5P4WvRYXevm~iG6kp5PNquXHJV-2~tR~ilnCIpZTxV-ubTL9Yx2ot0~1WKW5kLZj7C1Bj2D9ypyq-1RFZf4rId2j0eo9ebaDG6rCamBog9cyGxcfcNlc8WiEzMSMuTkY5xgDwAfgQEFiUTAOSEj5qwaluOp3KNzzeNA~iEWrNjucWT-H4hA5m6EXzDM2Us7PzXktiiypvVG9R3brjum2queta-3I8uJUTsrrS9R2q9TXvacwww__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    userName: "Liligalan32",
    userAvartarUrl: "https://s3-alpha-sig.figma.com/img/704a/9f21/3761e955d881e610f0027ad5b0d5594e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EnfYqoFCGcpco~9hm-Pb0WOlZc3~2ZizKoNbpgxcDLBHiADbS21EL6MmEFuxNs8ITmleVqH3dacTcJewulS~pjkRwQNmiHCXGjd-dJTmFQueKuSisGOKzG9AE4Iu9sqNoaihnYHSFV3BjrcIacVWnGQsS3P5ALngbEBTiuOXQnRogNrrg7YLwr6VtU06WxctdRCjSF3A9kJcX8YcpgBxsHOBCMZFyYC3X1WR14jpQBt9tg8LnWmOmgYIZEy-vhQ9gjtVKVVLa8UNxGCR0illoic67s2HzQsI3KcoIMFRIXYwCOOU2hGA3hJJ6IB3Et6U6vgkg5K-mU33hXd1VBmcLA__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    userName: "IamJames456",
    userAvartarUrl: "https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ti995zFAkdDw2dcguRUyTpYv7kNp7Nj~VYIcVObg7Z3k0tLNNELiQ2fmqO~oAPHaRdeLIm5qRZM5j25tmBSAe0iyMtYjxWueuN~37nw4qNvilc8sLaY9qb5F~N5wBYonPUhy-pJwx6AUQdl4DUVTE9sBPtBfG4d0q-wKZg7pv1bi~S8DsjspVmMnkI1ks~1jx33E2CQfXyI4MDL5R~ngQi1gMGgTFbe59DuOAITP0hDfSpy0OJ2jGD6ysnA2LNANDVeaF0fdJ3iUApt1Bs4gENzu5oTJybBJnifhtK4ATovmbSRapB2NtsMySpsSX2Juaeax~o6A7kG0IwG-xG~v7A__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  },
  {
    userName: "StefCH47",
    userAvartarUrl: "https://s3-alpha-sig.figma.com/img/206c/4897/28b7b0c60958131808a8471ce60ce66c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ti995zFAkdDw2dcguRUyTpYv7kNp7Nj~VYIcVObg7Z3k0tLNNELiQ2fmqO~oAPHaRdeLIm5qRZM5j25tmBSAe0iyMtYjxWueuN~37nw4qNvilc8sLaY9qb5F~N5wBYonPUhy-pJwx6AUQdl4DUVTE9sBPtBfG4d0q-wKZg7pv1bi~S8DsjspVmMnkI1ks~1jx33E2CQfXyI4MDL5R~ngQi1gMGgTFbe59DuOAITP0hDfSpy0OJ2jGD6ysnA2LNANDVeaF0fdJ3iUApt1Bs4gENzu5oTJybBJnifhtK4ATovmbSRapB2NtsMySpsSX2Juaeax~o6A7kG0IwG-xG~v7A__",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat."
  }
] as unknown as Feedback[];