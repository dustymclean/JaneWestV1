
import React from 'react';
import { JANE_WEST_CONTACT } from '../constants';

const VCFButton: React.FC<{ light?: boolean }> = ({ light = false }) => {
  const downloadVCF = () => {
    const blob = new Blob([JANE_WEST_CONTACT.vcf], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Jane_West.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadVCF}
      className={`px-6 py-3 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-lg active:scale-95 ${
        light 
          ? 'bg-rose-950 text-white border-none hover:bg-rose-900 shadow-rose-950/20' 
          : 'bg-white text-rose-950 border border-rose-100 hover:bg-rose-50 shadow-white/20'
      }`}
    >
      Save Contact
    </button>
  );
};

export default VCFButton;
