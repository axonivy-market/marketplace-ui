import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Injectable()
export class ProductService {
  httpClient = inject(HttpClient);

  getAllProducts(): Observable<Product[]> {
    return of(mockData);
  }

  getProductById(productId: string): Observable<Product> {
    const product = mockData.find((product) => product.id === productId);
    if (product) {
      return of(product);
    }
    return of({} as Product);
  }
}

const mockData = [
  {
    $schema: 'https://json-schema.axonivy.com/market/10.0.0/meta.json',
    id: 'adobe-acrobat-connector',
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
            artifactId: 'adobe-esign-connector-product',
          },
        ],
        type: 'zip',
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
            artifactId: 'adobe-esign-connector',
          },
        ],
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
      {
        key: 'demos',
        name: 'Demo App',
        groupId: 'com.axonivy.demo',
        artifactId: 'ivy-demos-app',
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Decision Table',
        groupId: 'com.axonivy.dmn.decisiontable',
        artifactId: 'dmn-decision-table',
        type: 'jar',
      },
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Decision Table Demo',
        groupId: 'com.axonivy.dmn.decisiontable',
        artifactId: 'dmn-decision-table-demo',
      },
    ],
  },
  {
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
        type: 'zip',
      },
      {
        name: 'DocFactory Documentation',
        groupId: 'com.axonivy.utils.docfactory',
        artifactId: 'doc-factory-doc',
        type: 'zip',
        doc: true,
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
    contactUs: true,
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        key: 'portal',
        name: 'Portal App',
        groupId: 'com.axonivy.portal',
        archivedArtifacts: [
          {
            groupId: 'ch.ivyteam.ivy.project.portal',
            lastVersion: '10.0.19',
            artifactId: 'portal-app',
          },
        ],
        artifactId: 'portal-app',
        type: 'zip',
      },
      {
        name: 'Portal Guide',
        groupId: 'com.axonivy.portal',
        archivedArtifacts: [
          {
            groupId: 'ch.ivyteam.ivy.project.portal',
            lastVersion: '10.0.19',
            artifactId: 'portal-guide',
          },
        ],
        artifactId: 'portal-guide',
        type: 'zip',
        doc: true,
      },
      {
        name: 'Portal Product',
        groupId: 'com.axonivy.portal',
        artifactId: 'portal-product',
        type: 'zip',
      },
    ],
  },
  {
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
        name: 'Processing Valve Demo',
        groupId: 'com.axonivy.demo.extensions',
        artifactId: 'processing-valve',
        type: 'jar',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
    id: 'twitter',
    version: '1.0',
    name: 'Twitter API',
    description:
      'Using the Twitter API users in Axon Ivy can post and interact with messages from the Twitter network.',
    type: 'connector',
    platformReview: '4.5',
    sourceUrl: 'https://github.com/axonivy-market/twitter-connector',
    statusBadgeUrl:
      'https://github.com/axonivy-market/twitter-connector/actions/workflows/ci.yml/badge.svg',
    language: 'English',
    industry: 'Cross-Industry',
    compatibility: '9.2+',
    tags: ['social'],
    mavenArtifacts: [
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Twitter Connector Product',
        groupId: 'com.axonivy.connector.twitter',
        artifactId: 'twitter-connector-product',
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
  {
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
        type: 'zip',
      },
      {
        repoUrl: 'https://maven.axonivy.com',
        name: 'Visual VM Plugin',
        groupId: 'ch.ivyteam.visualvm',
        artifactId: 'visualvm-plugin',
        type: 'nbm',
      },
    ],
  },
  {
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
        repoUrl: 'https://oss.sonatype.org/content/repositories/releases',
      },
      {
        name: 'Web Tester',
        groupId: 'com.axonivy.ivy.webtest',
        artifactId: 'web-tester',
        type: 'jar',
        repoUrl: 'https://oss.sonatype.org/content/repositories/releases',
      },
    ],
  },
  {
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
        type: 'zip',
      },
    ],
  },
] as unknown as Product[];
