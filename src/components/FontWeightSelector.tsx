import React from 'react';

interface FontWeightSelectorProps {
  fontFamily: string;
  fontWeight: string;
  setFontWeight: (weight: string) => void;
}

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({ fontFamily, fontWeight, setFontWeight }) => {
  // Mock data: Replace with actual logic to fetch weights based on fontFamily
  const fontWeights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

  return (
    <select value={fontWeight} onChange={(e) => setFontWeight(e.target.value)}>
      {fontWeights.map(weight => (
        <option key={weight} value={weight}>{weight}</option>
      ))}
    </select>
  );
};

export default FontWeightSelector;