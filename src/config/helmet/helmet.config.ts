import { HelmetOptions } from 'helmet';

export const helmetConfig: HelmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", "'unsafe-inline'"],
      baseUri: ["'self'"],
      fontSrc: ["'self'", 'https:', 'data:'],
      formAction: ["'self'", 'https:', 'data:'],
      frameAncestors: ["'self'"],
      imgSrc: ["'self'", 'https:', 'data:'],
      objectSrc: ["'none'"],
      scriptSrc: ["'self'"],
      scriptSrcAttr: ["'none'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https:"],
      upgradeInsecureRequests: ["'self'"],
      mediaSrc: ["'none'"],
      frameSrc: ["'none'"],
      childSrc: ["'none'"],
      connectSrc: ["'self'"],
    },
    reportOnly: true,
  },
  crossOriginEmbedderPolicy: {
    policy: "credentialless",
  },
  crossOriginOpenerPolicy: {
    policy: "same-origin-allow-popups"
  },
  crossOriginResourcePolicy: {
    policy: "cross-origin",
  },
  referrerPolicy: {
    policy: ["origin", "unsafe-url"],
  },
  strictTransportSecurity: {
    maxAge: 63072000,
    includeSubDomains: true,
    preload: true,
  },
  xContentTypeOptions: true,
  xDnsPrefetchControl: { allow: false },
  xDownloadOptions: false,
  xFrameOptions: { action: "sameorigin" },
  xPermittedCrossDomainPolicies: {
    permittedPolicies: "by-content-type",
  },
  xPoweredBy: false,
  xXssProtection: false,
};
