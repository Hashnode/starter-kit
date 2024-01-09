import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import { ThemeContext, ThemeProvider } from './contexts/themeContext';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: any) => {
	return (
		<ThemeProvider>
			<ThemeContext.Consumer>
				{()=>
				 <div>
				 <Meta />
				 <Scripts />
			 <div> 
				 <main>{children}</main>
			 </div>
			 <Analytics />
			 <Integrations />
				 </div>}
				
			</ThemeContext.Consumer>
		</ThemeProvider>
	);
};
