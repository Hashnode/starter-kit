import prettier from 'prettier';

if (typeof window === 'undefined') {
  const originalRenderPage = nextApp.renderPage;

  nextApp.renderPage = async (options) => {
    const originalRender = options.enhanceApp ? options.enhanceApp : (App) => App;
    
    options.enhanceApp = (App) => {
      return (props) => {
        const WrappedApp = originalRender(App);
        const html = WrappedApp(props);

        if (typeof html === 'string') {
          return prettier.format(html, {
            parser: 'html',
            printWidth: 120,
            tabWidth: 2,
            useTabs: false,
            singleQuote: true,
          });
        }

        return html;
      };
    };

    return originalRenderPage(options);
  };
}