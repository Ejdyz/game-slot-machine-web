"use client";
import { PrimeReactProvider } from 'primereact/api';
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const Providers = ({children}) => {
  return (
    <PrimeReactProvider>
      {children}
    </PrimeReactProvider>
  );
}
export default Providers;