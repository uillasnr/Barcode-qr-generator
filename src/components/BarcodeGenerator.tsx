
import React, { useRef } from 'react';
import JsBarcode from 'jsbarcode';

interface BarcodeGeneratorProps {
  value: string;
}

const BarcodeGenerator: React.FC<BarcodeGeneratorProps> = ({ value }) => {
  const barcodeRef = useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        format: 'CODE39',
        width: 2,
        height: 100,
      });
    }
  }, [value]);

  return <svg ref={barcodeRef}></svg>;
};

export default BarcodeGenerator;
