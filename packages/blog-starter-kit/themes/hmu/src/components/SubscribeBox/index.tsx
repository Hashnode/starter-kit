"use client";

import { CircleBackslashIcon, Component1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/datafetch/addemail";

// TODO: Create a Subcribe box that will send the request to hashnode and lemon squeezy

// https://[STORE].lemonsqueezy.com/email-subscribe/external

// req post , payload => name, email

type Response = "success" | "failure" | "none";

const responseMsg = {
  failure: "Something went wrong! Try again",
  success: "✨ Your email is successfully added",
};

function SubscribeBox({ publicationId }: { publicationId: string }) {
  const [response, setReponse] = useState<Response>("none");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      {response !== "none" && <p>{responseMsg[response]}</p>}
      {response === "none" && (
        <form
          className="flex flex-col gap-3 justify-start items-start"
          onSubmit={async (e: any) => {
            e.preventDefault();
            setLoading(true);
            const data = await fetch(
              `https://${process.env.NEXT_PUBLIC_LEMONSQUEEZY_STORE}/email-subscribe/external`,
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: e?.target[0].value,
                }),
              }
            );
            const response = await subscribeToNewsletter(
              e.target[0].value || "",
              publicationId
            );

            if (data.status === 200) {
              setReponse("success");
            } else {
              setReponse("failure");
            }

            setLoading(false);
          }}
        >
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="UserEmail"
              className="block text-xs font-medium text-neutral-600 dark:text-neutral-400"
            >
              {" "}
              Subscribe to Newsletter{" "}
            </label>

            <input
              required
              type="email"
              id="UserEmail"
              placeholder="john@gmail.com"
              className="mt-1 w-full rounded-md border-gray-200 border dark:bg-neutral-900 dark:placeholder:text-neutral-400 dark:border-neutral-400  sm:text-md py-2 px-2"
            />
          </div>
          <button
            className="
          inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background  hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            type="submit"
          >
            {loading ? (
              <span>
                <Component1Icon className="animate-spin repeat-infinite w-4 h-4 " />{" "}
              </span>
            ) : (
              "+ Subscribe"
            )}
          </button>
        </form>
      )}
    </>
  );
}

export default SubscribeBox;
