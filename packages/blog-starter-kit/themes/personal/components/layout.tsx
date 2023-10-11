import Meta from "./meta";
import Analytics from "./analytics";
import Scripts from "./scripts";
import Integrations from "./integrations";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Scripts />
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <main>{children}</main>
      </div>
      <Analytics />
      <Integrations />
    </>
  );
};

export default Layout;
