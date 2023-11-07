import { useRef, useState } from 'react';

import isEmail from 'validator/lib/isEmail';
import { useAppContext } from './contexts/appContext';
import Button from './hn-button';
import { PaperPlaneSVG } from './icons/svgs';
import { useMutation } from 'urql';
import { SubscribeToNewsletterDocument } from '../generated/graphql';


function PublicationSubscribeStandOut() {
  const { publication } = useAppContext();
  const [, subscribeToNewsletter] = useMutation(SubscribeToNewsletterDocument);

  const [state, setState] = useState({
    submitDisabled: false,
    err: '',
    subscribed: false,
  });
  const email = useRef<HTMLInputElement>(null);

  const subscribe = async () => {
    if (!publication || !email.current) {
      return;
    }

    const emailVal = email.current.value;
    const publicationId = publication.id?.toString();

    if (!emailVal.trim()) {
      return;
    }
    if (!isEmail(emailVal)) {
      setState({ ...state, err: 'Please enter a valid email' });
      return;
    }
    setState({ ...state, submitDisabled: true });
    const { data, error } = await subscribeToNewsletter({
      input: {
        publicationId,
        email: emailVal,
      },
    });
    const _state = { submitDisabled: false, err: '', subscribed: false };

    if (!data?.subscribeToNewsletter.status || error) {
      _state.err = error?.graphQLErrors[0].message || 'Something went wrong. Please try again.';
    } else {
      _state.subscribed = true;
      _state.err = '';
    }
    setState({ ...state, ..._state });
  };

  const handleEmailChange = (e: { keyCode: number }) => {
    if (state.err) {
      setState({ ...state, err: '' });
    }
    if (e.keyCode === 13) {
      subscribe();
    }
  };

  return (
    <div className="my-10 mt-20 flex w-full flex-col items-center pb-10 md:px-5">
      <h3 className="mb-5 text-center font-heading text-2xl font-bold text-slate-900 dark:text-slate-50 md:text-3xl">
        Subscribe to {publication!.isTeam ? 'our' : 'my'} newsletter
      </h3>
      <p className="mb-5 text-center text-lg text-slate-700 dark:text-slate-300 md:w-2/3 md:text-xl">
        Read articles from {<strong>{publication!.title}</strong> || 'this blog'} directly inside your inbox. Subscribe
        to the newsletter, and don&apos;t miss out.
      </p>
      {!state.subscribed && (
        <div className="flex flex-row overflow-hidden rounded-lg border border-slate-800 dark:border-slate-200 md:w-2/3">
          <input
            type="email"
            ref={email}
            onKeyUp={handleEmailChange}
            placeholder="Enter your email address"
            className="w-full bg-transparent p-3 text-black outline-none dark:text-white md:p-5 md:text-lg"
          />
          <Button
            type="button"
            onClick={subscribe}
            variant="transparent"
            disabled={state.submitDisabled}
            className="shrink-0 rounded-none bg-slate-800 px-3 font-bold uppercase tracking-wide text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-black dark:hover:bg-slate-300 md:px-5"
          >
            Subscribe
          </Button>
        </div>
      )}
      {state.subscribed && (
        <div className="flex flex-col items-center overflow-hidden rounded-lg border border-green-600 bg-green-50 p-5 text-center text-slate-900 dark:border-green-400 dark:bg-green-900 dark:text-white md:w-2/3">
          <span className="text-green-600 dark:text-green-400">
            <PaperPlaneSVG className="[animation-iteration-count: 3] mb-5 h-10 w-10 animate-bounce fill-current" />
          </span>
          <p className="font-semibold ">
            We&apos;ve sent a confirmation email;
            <br />
            click on the link to complete your subscription to this newsletter.
          </p>
        </div>
      )}
      {state.err && <div className="mt-2 text-red-600">{state.err}</div>}
    </div>
  );
}

export default PublicationSubscribeStandOut;
