import React, { createContext, useState } from 'react';

export const BannerStatusContext = createContext();

export const BannerStatusContextProvider = ({ children }) => {
  const [bannerStatus, setBannerStatus] = useState('');

  return (
    <BannerStatusContext.Provider value={{ bannerStatus, setBannerStatus }}>
      {children}
    </BannerStatusContext.Provider>
  );
};
