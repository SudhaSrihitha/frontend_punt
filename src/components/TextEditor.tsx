import React, { useState, useEffect } from 'react';
import FontSelector from './FontSelector';
import FontWeightSelector from './FontWeightSelector';
import ItalicToggle from './ItalicToggle';
import './TextEditor.css';

const TextEditor: React.FC = () => {
  const [text, setText] = useState<string>(() => localStorage.getItem('text') || '');
  const [fontFamily, setFontFamily] = useState<string>(() => localStorage.getItem('fontFamily') || 'Arial');
  const [fontWeight, setFontWeight] = useState<string>(() => localStorage.getItem('fontWeight') || '400');
  const [isItalic, setIsItalic] = useState<boolean>(() => localStorage.getItem('isItalic') === 'true');

  useEffect(() => {
    localStorage.setItem('text', text);
    localStorage.setItem('fontFamily', fontFamily);
    localStorage.setItem('fontWeight', fontWeight);
    localStorage.setItem('isItalic', isItalic.toString());
  }, [text, fontFamily, fontWeight, isItalic]);

  return (
    <div className="text-editor">
      <div className="controls">
        <FontSelector fontFamily={fontFamily} setFontFamily={setFontFamily} />
        <FontWeightSelector fontFamily={fontFamily} fontWeight={fontWeight} setFontWeight={setFontWeight} />
        <ItalicToggle isItalic={isItalic} setIsItalic={setIsItalic} fontFamily={fontFamily} fontWeight={fontWeight} />
      </div>
      <textarea
        className="editor"
        style={{
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          fontStyle: isItalic ? 'italic' : 'normal'
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TextEditor;
