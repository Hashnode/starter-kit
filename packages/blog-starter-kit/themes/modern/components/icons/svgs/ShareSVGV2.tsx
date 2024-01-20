import React from 'react';

const ShareSVGV2 = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.25 7.91667L11.75 5.08333M6.25 10.0833L11.75 12.9167M6.5 9C6.5 10.3807 5.38071 11.5 4 11.5C2.61929 11.5 1.5 10.3807 1.5 9C1.5 7.61929 2.61929 6.5 4 6.5C5.38071 6.5 6.5 7.61929 6.5 9ZM16.5 4C16.5 5.38071 15.3807 6.5 14 6.5C12.6193 6.5 11.5 5.38071 11.5 4C11.5 2.61929 12.6193 1.5 14 1.5C15.3807 1.5 16.5 2.61929 16.5 4ZM16.5 14C16.5 15.3807 15.3807 16.5 14 16.5C12.6193 16.5 11.5 15.3807 11.5 14C11.5 12.6193 12.6193 11.5 14 11.5C15.3807 11.5 16.5 12.6193 16.5 14Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

ShareSVGV2.displayName = 'ShareSVGV2';

export default ShareSVGV2;
