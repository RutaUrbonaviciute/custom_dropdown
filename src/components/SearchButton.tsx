import React from 'react';

export const SearchButton: React.FC = () => {
  return (
    <button className="search-button">
      <div className="search-button__icon">
        <svg viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.8 39.27c0-11.016 8.808-19.976 19.637-19.976 10.827 0 19.635 8.96 19.635 19.972 0 11.014-8.808 19.976-19.635 19.976-10.83 0-19.64-8.96-19.64-19.976zm55.472 32.037l-15.976-16.25a25.809 25.809 0 005.376-15.788c0-14.16-11.32-25.67-25.232-25.67-13.923 0-25.24 11.51-25.24 25.67s11.32 25.67 25.237 25.67c4.776 0 9.227-1.388 13.04-3.74L69.84 77.85a4.506 4.506 0 006.432 0c1.77-1.8 1.77-4.744 0-6.544z" fill="currentColor" />
        </svg>
      </div>
    </button>
  );
}
