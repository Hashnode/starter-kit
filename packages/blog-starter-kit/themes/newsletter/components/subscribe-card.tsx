import request from 'graphql-request';
import { useRef, useState } from 'react';
import {
  SubscribeToNewsletterDocument,
  SubscribeToNewsletterMutation,
  SubscribeToNewsletterMutationVariables,
  SubscribeToNewsletterPayload,
} from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const SubscribeCard = () => {
  const [status, setStatus] = useState<SubscribeToNewsletterPayload['status']>();
  const [requestInProgress, setRequestInProgress] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { publication } = useAppContext();

  const subscribe = async () => {
    const email = inputRef.current?.value;
    if (!email) return;

    setRequestInProgress(true);

    try {
      const data = await request<
        SubscribeToNewsletterMutation,
        SubscribeToNewsletterMutationVariables
      >(GQL_ENDPOINT, SubscribeToNewsletterDocument, {
        input: { publicationId: publication.id, email },
      });
      setRequestInProgress(false);
      setStatus(data.subscribeToNewsletter.status);
    } catch (error) {
      const message = (error as any).response?.errors?.[0]?.message;
      if (message) {
        window.alert(message);
      }
      setRequestInProgress(false);
    }
  };

  return (
    <div className="w-full h-auto bg-dark-900 p-4 rounded-lg">
      {!status && (
        <div className="relative w-full rounded-full bg-white p-4 dark:bg-neutral-950">
          <h2 className="text-xl font-semibold text-black dark:text-neutral-50">
            Get all the latest posts delivered straight to your inbox.
          </h2>
          <input
            ref={inputRef}
            type="email"
            placeholder="your email address"
            className="focus:outline-primary-600 dark:focus:outline-primary-500 mt-3 w-full rounded-full p-3 text-base text-black outline-none dark:bg-neutral-950 dark:text-neutral-50"
          />
          <button
            disabled={requestInProgress}
            onClick={subscribe}
            className="bg-primary-600 dark:bg-primary-600 mt-3 rounded-full px-4 py-3 text-white disabled:cursor-not-allowed disabled:opacity-80"
          >
            Subscribe
          </button>
        </div>
      )}
      {status === 'PENDING' && (
        <div className="relative w-full p-4 text-center mt-4">
          <p className="font-bold text-green-600 dark:text-green-500">Almost there!</p>
          <p className="font-medium text-slate-600 dark:text-neutral-300">
            Check your inbox for a confirmation email and click{' '}
            <strong>&quot;Confirm and Subscribe&quot;</strong> to complete your subscription. Thanks for joining us!
          </p>
        </div>
      )}
    </div>
  );
};
