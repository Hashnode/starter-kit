type PublicationType = {
    id: string;
    title?: string;
    preferences: {
      logo: string;
      darkMode: {
        logo: string;
      }
      navbarItems: [{
        label: string;
        url: string;
      }]
    }
    links: {
      twitter?: string;
      github?: string;
      linkedin?: string;
      hashnode?: string;
    }
  };
  
  export default PublicationType;
  