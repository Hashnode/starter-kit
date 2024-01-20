import { createRoot, Root } from 'react-dom/client';
import { Toast } from '../components/toast';

const TOAST_ELEMENT_ID = 'hn-toast';
let root: Root | null = null;
let timeout: NodeJS.Timeout | null = null;

const _closeToast = () => {
  root?.unmount();
  root = null;
};

// this should be a hook
// TODO: The toast doens't close when Radix modal is used since Radix adds pointer-events: none to the body.
const showToast = (type: 'success' | 'warning' | 'error', title: string, message?: string) => {
  timeout && clearTimeout(timeout);
  root ||= createRoot(document.getElementById(TOAST_ELEMENT_ID)!);
  root.render(<Toast type={type} title={title} message={message} closeToast={_closeToast} />);
  timeout = setTimeout(_closeToast, 5000);
};

export default showToast;

export { showToast };
