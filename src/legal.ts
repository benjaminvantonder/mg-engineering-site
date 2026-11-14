export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "strong"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "defs"; items: { term: string; text: string }[] }
  | { type: "address"; lines: string[] };

export interface LegalSection {
  number: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  slug: string;
  eyebrow: string;
  title: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
}

const updated = "Last updated: 10 March 2026";

export const legalDocs: Record<string, LegalDoc> = {
  "privacy-policy": {
    slug: "/privacy-policy",
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated,
    intro: [
      "MG Engineering (“we,” “our,” “us”) values your privacy and is committed to protecting your personal information.",
      "This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website www.matlag.co.za.",
    ],
    sections: [
      {
        number: "01",
        title: "Information we collect",
        blocks: [
          { type: "p", text: "We may collect the following information when you interact with our website:" },
          {
            type: "defs",
            items: [
              {
                term: "Personal information",
                text: "Name, email address, phone number, and other details you provide via contact forms or newsletter sign-ups.",
              },
              {
                term: "Technical data",
                text: "IP address, browser type, device information, operating system, and pages visited on our website.",
              },
              {
                term: "Cookies and tracking data",
                text: "We use cookies to improve your browsing experience and gather analytical data about website usage.",
              },
            ],
          },
        ],
      },
      {
        number: "02",
        title: "How we use your information",
        blocks: [
          { type: "p", text: "We use the data we collect for the following purposes:" },
          {
            type: "ul",
            items: [
              "To respond to inquiries and provide requested services.",
              "To send updates, newsletters, or marketing communications (where consent is given).",
              "To improve website functionality and user experience.",
              "To comply with legal obligations.",
            ],
          },
        ],
      },
      {
        number: "03",
        title: "Sharing your information",
        blocks: [
          {
            type: "p",
            text: "MG Engineering does not sell, trade, or rent your personal information to third parties. We may share your data with:",
          },
          {
            type: "defs",
            items: [
              {
                term: "Service providers",
                text: "Third-party companies that assist with website hosting, email communication, or analytics.",
              },
              {
                term: "Legal authorities",
                text: "When required by law or to protect our legal rights.",
              },
            ],
          },
        ],
      },
      {
        number: "04",
        title: "Cookies and tracking",
        blocks: [
          {
            type: "p",
            text: "Our website may use cookies to enhance user experience. You can control cookies through your browser settings. Disabling cookies may affect some website functionality.",
          },
        ],
      },
      {
        number: "05",
        title: "Data security",
        blocks: [
          {
            type: "p",
            text: "We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
          },
        ],
      },
      {
        number: "06",
        title: "Your rights",
        blocks: [
          { type: "p", text: "You have the right to:" },
          {
            type: "ul",
            items: [
              "Request access to the personal data we hold about you.",
              "Correct or update your personal information.",
              "Request deletion of your personal data, subject to legal requirements.",
              "Withdraw consent for marketing communications at any time.",
            ],
          },
          { type: "p", text: "To exercise your rights, please contact us at hello@matlag.co.za." },
        ],
      },
      {
        number: "07",
        title: "Third-party links",
        blocks: [
          {
            type: "p",
            text: "Our website may contain links to external sites. We are not responsible for the privacy practices or content of those websites.",
          },
        ],
      },
      {
        number: "08",
        title: "Changes to this privacy policy",
        blocks: [
          {
            type: "p",
            text: "We may update this Privacy Policy from time to time. The updated version will be posted on this page with the effective date revised.",
          },
        ],
      },
    ],
  },

  "terms-of-use": {
    slug: "/terms-of-use",
    eyebrow: "Legal",
    title: "Terms of Use",
    updated,
    intro: [
      "Welcome to MG Engineering’s website (www.matlag.co.za).",
      "By accessing or using our website, you agree to comply with these Terms of Use. If you do not agree, please do not use this site.",
    ],
    sections: [
      {
        number: "01",
        title: "Use of website",
        blocks: [
          { type: "strong", text: "You may use this website for lawful purposes only." },
          { type: "p", text: "You agree not to misuse the website, including but not limited to:" },
          {
            type: "ul",
            items: [
              "Interfering with website operation.",
              "Uploading harmful software or viruses.",
              "Attempting unauthorized access to our systems.",
            ],
          },
        ],
      },
      {
        number: "02",
        title: "Intellectual property",
        blocks: [
          {
            type: "p",
            text: "All content on this website, including text, images, graphics, logos, and software, is owned by MG Engineering or our licensors.",
          },
          {
            type: "p",
            text: "You may not reproduce, distribute, modify, or use any content for commercial purposes without our express written permission.",
          },
        ],
      },
      {
        number: "03",
        title: "User-generated content",
        blocks: [
          {
            type: "p",
            text: "Any content you submit (e.g., messages, inquiries, or feedback) remains your responsibility.",
          },
          {
            type: "p",
            text: "By submitting content, you grant MG Engineering a non-exclusive, royalty-free license to use, display, and share the content for business purposes.",
          },
          {
            type: "p",
            text: "You must not submit content that is illegal, offensive, or infringes on the rights of others.",
          },
        ],
      },
      {
        number: "04",
        title: "Third-party links",
        blocks: [
          { type: "p", text: "Our website may contain links to third-party websites." },
          {
            type: "p",
            text: "We do not control these sites and are not responsible for their content, privacy practices, or policies. Linking does not imply endorsement.",
          },
        ],
      },
      {
        number: "05",
        title: "Disclaimers",
        blocks: [
          {
            type: "p",
            text: "The website and its content are provided “as is” without warranties of any kind.",
          },
          {
            type: "p",
            text: "MG Engineering does not guarantee the accuracy, completeness, or reliability of information on the website. Your use of the website is at your own risk.",
          },
        ],
      },
      {
        number: "06",
        title: "Limitation of liability",
        blocks: [
          {
            type: "p",
            text: "To the maximum extent permitted by law, MG Engineering will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
          },
        ],
      },
      {
        number: "07",
        title: "Privacy",
        blocks: [
          {
            type: "p",
            text: "Your use of this website is also governed by our Privacy Policy. Please review it to understand how we collect and use your personal information.",
          },
        ],
      },
      {
        number: "08",
        title: "Changes to terms",
        blocks: [
          {
            type: "p",
            text: "We may update these Terms of Use from time to time. The revised terms will be posted on this page with the effective date updated.",
          },
          {
            type: "p",
            text: "Continued use of the website after changes constitutes acceptance of the updated Terms.",
          },
        ],
      },
      {
        number: "09",
        title: "Governing law",
        blocks: [
          {
            type: "p",
            text: "These Terms are governed by the laws of the Republic of South Africa. Any disputes arising from these Terms or the use of the website will be subject to the exclusive jurisdiction of South African courts.",
          },
        ],
      },
    ],
  },

  popia: {
    slug: "/popia",
    eyebrow: "Legal",
    title: "POPIA Privacy Notice",
    updated,
    intro: [
      "MG Engineering (“we,” “our,” “us”) is committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA), 2013.",
      "This notice explains how we collect, process, and safeguard your personal data.",
    ],
    sections: [
      {
        number: "01",
        title: "Responsible party",
        blocks: [
          { type: "strong", text: "The responsible party for your personal information is:" },
          {
            type: "address",
            lines: ["Matla Gene Engineering (Pty) Ltd", "7 Charles De Gaulle Cres, Highveld, Centurion, 0157"],
          },
        ],
      },
      {
        number: "02",
        title: "Personal information we collect",
        blocks: [
          { type: "p", text: "We may collect the following personal information:" },
          {
            type: "ul",
            items: [
              "Name, email address, and phone number.",
              "Information submitted through contact forms or service requests.",
              "Technical data, including IP address, browser type, and device information.",
            ],
          },
        ],
      },
      {
        number: "03",
        title: "Purpose of processing",
        blocks: [
          { type: "p", text: "Your personal information is processed for:" },
          {
            type: "ul",
            items: [
              "Responding to inquiries and providing requested services.",
              "Sending updates, newsletters, or marketing communications (with your consent).",
              "Improving website functionality and user experience.",
              "Complying with legal obligations.",
            ],
          },
        ],
      },
      {
        number: "04",
        title: "Legal basis",
        blocks: [
          { type: "p", text: "We process personal information in accordance with POPIA, including:" },
          {
            type: "ul",
            items: [
              "Consent provided by you.",
              "The necessity of processing to perform services or fulfill contractual obligations.",
              "Compliance with legal obligations.",
            ],
          },
        ],
      },
      {
        number: "05",
        title: "Sharing personal information",
        blocks: [
          { type: "p", text: "We do not sell your personal information. We may share data with:" },
          {
            type: "defs",
            items: [
              {
                term: "Service providers",
                text: "Assisting with website hosting, email communication, or analytics.",
              },
              {
                term: "Legal authorities",
                text: "When required by law or to protect our legal rights.",
              },
            ],
          },
        ],
      },
      {
        number: "06",
        title: "Security",
        blocks: [
          {
            type: "p",
            text: "We implement reasonable administrative, technical, and physical safeguards to protect personal information against unauthorized access, loss, or disclosure.",
          },
        ],
      },
      {
        number: "07",
        title: "Your rights",
        blocks: [
          { type: "p", text: "You have the right to:" },
          {
            type: "ul",
            items: [
              "Request access to personal information we hold about you.",
              "Request correction or deletion of personal information.",
              "Withdraw consent for marketing communications at any time.",
              "Lodge a complaint with the Information Regulator of South Africa if you believe your personal information has been misused.",
            ],
          },
        ],
      },
      {
        number: "08",
        title: "Retention",
        blocks: [
          {
            type: "p",
            text: "We will retain your personal information only as long as necessary for the purposes stated, or as required by law.",
          },
        ],
      },
    ],
  },
};
