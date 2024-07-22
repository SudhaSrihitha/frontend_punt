import React from 'react';

interface ItalicToggleProps {
  isItalic: boolean;
  setIsItalic: (italic: boolean) => void;
  fontFamily: string;
  fontWeight: string;
}

const ItalicToggle: React.FC<ItalicToggleProps> = ({ isItalic, setIsItalic, fontFamily, fontWeight }) => {
  // Mock logic: Replace with actual logic to determine if italic is supported
  const supportsItalic = true;

  return (
    <label>
      <input
        type="checkbox"
        checked={isItalic}
        onChange={(e) => setIsItalic(e.target.checked)}
        disabled={!supportsItalic}
      />
      Italic
    </label>
  );
};

export default ItalicToggle;