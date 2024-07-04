import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { onCLS, onFID, onFCP, onLCP } from 'web-vitals';

const PerformanceDashboard: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clear the console before logging
      console.clear();

      const logMetric = (metricName: string, value: number) => {
        console.log(`${metricName}: ${value.toFixed(2)} ms`);
      };

      onCLS((metric) => logMetric('CLS', metric.value));
      onFID((metric) => logMetric('FID', metric.value));
      onFCP((metric) => logMetric('FCP', metric.value));
      onLCP((metric) => logMetric('LCP', metric.value));
    }
  }, []);

  // No need to return any JSX since we're only logging to the console
  return null; 
};

export default dynamic(() => Promise.resolve(PerformanceDashboard), {
  ssr: false, // This component is client-side only
});
