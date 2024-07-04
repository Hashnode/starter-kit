import { useEffect, useState } from 'react'; // Import useState
import dynamic from 'next/dynamic';
import { onCLS, onFID, onFCP, onLCP } from 'web-vitals';

type MetricsState = {
  FCP?: number;
  LCP?: number;
  CLS?: number;
  FID?: number;
};

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricsState>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.clear();

      onCLS((metric) => {  
        setMetrics((prevMetrics: MetricsState) => ({ ...prevMetrics, CLS: metric.value }));
        console.log(`CLS: ${metric.value.toFixed(2)} ${metric.delta.toFixed(2)}`);
      });
      onFID((metric) => {  
        setMetrics((prevMetrics: MetricsState) => ({ ...prevMetrics, FID: metric.value }));
        console.log(`FID: ${metric.value.toFixed(2)} ${metric.delta.toFixed(2)}`);
      });
      onFCP((metric) => { 
        setMetrics((prevMetrics: MetricsState) => ({ ...prevMetrics, FCP: metric.value }));
        console.log(`FCP: ${metric.value.toFixed(2)} ${metric.delta.toFixed(2)}`);
      });
      onLCP((metric) => {  
        setMetrics((prevMetrics: MetricsState) => ({ ...prevMetrics, LCP: metric.value }));
        console.log(`LCP: ${metric.value.toFixed(2)} ${metric.delta.toFixed(2)}`);
      });
    }
  }, []); 

  return null; 
};

export default dynamic(() => Promise.resolve(PerformanceDashboard), {
  ssr: false, 
});
