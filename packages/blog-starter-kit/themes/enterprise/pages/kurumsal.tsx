import React from 'react';
import Link from 'next/link';

const kurumsal: React.FC = () => {
  return (
    <div className="kurumsal">
      <header className="kurumsal-header">
        <Link
                    href={'./'}
                    aria-label={`Ana Sayfa`}
                    className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  >
                    <h1>In development!</h1>
                  </Link>
      </header>
    </div>
  );
}

export default kurumsal;