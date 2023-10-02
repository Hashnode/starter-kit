type PublicationType = {
    id: string;
    title?: string;
    displayTitle?: string;
    url: string;
    isTeam?: boolean;
    metaTags?: string;
    favicon?: string;
    posts?: {
      totalDocuments?: number;
      edges?: {}[];
    }
    followersCount?: number;
    descriptionSEO?: string;
    ogMetaData?: {
      image?: string;
    }
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
      profilePicture?: string;
      followersCount?: number;
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
  