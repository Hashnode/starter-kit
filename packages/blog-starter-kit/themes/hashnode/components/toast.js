import React from 'react';
import { twJoin } from 'tailwind-merge';

import { CheckSVG, CloseSVG, AlertSVG } from './icons/svgs';

export default class Toast extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.classNameMap = {
      success: `bg-green-600`,
      error: `bg-red-600`,
      warning: `bg-yellow-500`,
    };
  }

  render() {
    const { type, title, message, closeToast } = this.props;
    return (
      <div
        onClick={closeToast}
        className={twJoin(
          `fixed bottom-0 right-0 z-[55] mb-10 mr-8 flex w-84 cursor-pointer flex-row items-center rounded-lg p-4 text-white shadow-xl`,
          this.classNameMap[type],
        )}
      >
        <div className={`mr-5`}>
          {type === 'success' && <CheckSVG className={`h-10 w-10 fill-current`} />}
          {type === 'error' && <CloseSVG className={`h-10 w-10 fill-current`} />}
          {type === 'warning' && <AlertSVG className={`h-10 w-10 fill-current`} />}
        </div>
        <div className={`flex-1`}>
          <h3 className={`font-bold leading-snug`}>{title}</h3>
          {message && <p className={`mt-1 text-sm`} dangerouslySetInnerHTML={{ __html: message }} />}
        </div>
      </div>
    );
  }
}

export { Toast };
