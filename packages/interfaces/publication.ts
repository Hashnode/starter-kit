type PublicationType = {
    id: string;
    title?: string;
    url: string;
    metaTags?: string;
    favicon?: string;
    preferences?: {
      logo?: string;
      darkMode?: {
        logo?: string;
      }
      navbarItems?: {
        label?: string;
        url?: string;
      }[]
    }
    author?: {
      username: string;
      name: string;
    }
    about?: {
      markdown: string;
      html: string;
    }
    links?: {
      twitter?: string;
      github?: string;
      linkedin?: string;
      hashnode?: string;
    }
    series?: {
      name: string;
      slug: string;
      coverImage: string;
      description?: {
        markdown?: string;
        html?: string;
      }
    }
    integrations?: {
      gaTrackingID?: string;
      umamiWebsiteUUID?: string;
      fbPixelID?: string;
      hotjarSiteID?: string;
      matomoURL?: string;
      matomoSiteID?: string;
      fathomSiteID?: string;
      fathomCustomDomain?: string;
      fathomCustomDomainEnabled?: boolean;
      plausibleAnalyticsEnabled?: boolean;
    }
  };
  
  export default PublicationType;
  