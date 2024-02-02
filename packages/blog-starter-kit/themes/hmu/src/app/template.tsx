import { ReactNode } from "react";

function Template({ children }: { children: ReactNode }) {
  return (
    <main className="  relative flex justify-center max-h-screen container mx-auto ">
      {children}
    </main>
  );
}

export default Template;
