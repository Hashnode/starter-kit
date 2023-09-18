import Container from "./container";
import cn from "classnames";
// import { EXAMPLE_PATH } from "../lib/constants";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-sm text-center">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline transition-colors duration-200 hover:text-teal-300"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples`}
                className="underline transition-colors duration-200 hover:text-blue-600"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
