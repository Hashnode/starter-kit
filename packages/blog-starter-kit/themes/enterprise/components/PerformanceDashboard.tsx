import { useEffect, useState } from 'react';
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
      onCLS((metric) => setMetrics((prev) => ({ ...prev, CLS: metric.value })));
      onFID((metric) => setMetrics((prev) => ({ ...prev, FID: metric.value })));
      onFCP((metric) => setMetrics((prev) => ({ ...prev, FCP: metric.value })));
      onLCP((metric) => setMetrics((prev) => ({ ...prev, LCP: metric.value })));
    }
  }, []);

  return (
    <div className="performance-dashboard">
      <h2>Gerçek Performans Metrikleri</h2>
      <ul>
        <li>First Contentful Paint (FCP): {(metrics.FCP || 0).toFixed(2)} ms</li>
        <li>Largest Contentful Paint (LCP): {(metrics.LCP || 0).toFixed(2)} ms</li>
        <li>Cumulative Layout Shift (CLS): {(metrics.CLS || 0).toFixed(3)}</li>
        <li>First Input Delay (FID): {(metrics.FID || 0).toFixed(2)} ms</li>
      </ul>
    </div>
  );
};

export default dynamic(() => Promise.resolve(PerformanceDashboard), {
  ssr: false, // This component is client-side only
});
