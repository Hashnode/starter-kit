import React, { useEffect, useState } from 'react';
import { Metric, FCPMetric, LCPMetric, CLSMetric, FIDMetric } from 'web-vitals';

type MetricsState = {
  FCP: number;
  LCP: number;
  CLS: number;
  FID: number;
};

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricsState>({
    FCP: 0,
    LCP: 0,
    CLS: 0,
    FID: 0
  });

  useEffect(() => {
    const { getFCP, getLCP, getCLS, getFID } = require('web-vitals');

    getFCP((metric: FCPMetric) => setMetrics(prev => ({ ...prev, FCP: metric.value })));
    getLCP((metric: LCPMetric) => setMetrics(prev => ({ ...prev, LCP: metric.value })));
    getCLS((metric: CLSMetric) => setMetrics(prev => ({ ...prev, CLS: metric.value })));
    getFID((metric: FIDMetric) => setMetrics(prev => ({ ...prev, FID: metric.value })));
  }, []);

  return (
    <div className="performance-dashboard">
      <h2>Gerçek Performans Metrikleri</h2>
      <ul>
        <li>First Contentful Paint (FCP): {metrics.FCP.toFixed(2)} ms</li>
        <li>Largest Contentful Paint (LCP): {metrics.LCP.toFixed(2)} ms</li>
        <li>Cumulative Layout Shift (CLS): {metrics.CLS.toFixed(3)}</li>
        <li>First Input Delay (FID): {metrics.FID.toFixed(2)} ms</li>
      </ul>
    </div>
  );
};

export default PerformanceDashboard;