import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

interface FontSelectorProps {
  fontFamily: string;
  setFontFamily: (font: string) => void;
}

interface FontOption {
  label: string;
  value: string;
}

const FontSelector: React.FC<FontSelectorProps> = ({ fontFamily, setFontFamily }) => {
  const [fonts, setFonts] = useState<FontOption[]>([]);

  useEffect(() => {
    const fetchFonts = async () => {
      const response = await axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR_API_KEY');
      const fontOptions = response.data.items.map((font: any) => ({
        label: font.family,
        value: font.family
      }));
      setFonts(fontOptions);
    };
    fetchFonts();
  }, []);

  return (
    <Select
      options={fonts}
      value={{ label: fontFamily, value: fontFamily }}
      onChange={(option) => option && setFontFamily(option.value)}
    />
  );
};

export default FontSelector;