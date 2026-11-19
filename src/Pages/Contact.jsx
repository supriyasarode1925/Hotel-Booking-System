import React, { useState } from 'react';
import { Hero } from '../Hooks/Hero';
import { ContactDetails } from '../Components/Contact/ContactDetails';

export const Contact = () => {

  return (
    <>
      <Hero />
      <ContactDetails />
    </>
  );
}
