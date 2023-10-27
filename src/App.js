import React from 'react';
import ChipList from './ChipList';

const sampleChips = [
  { label: "123456" },
  { label: "1234567" },
  { label: "12345678" },
  { label: "12345" },
  { label: "123456789" }
];

function App(){
  return (
    <div>
      <ChipList
      chips = {sampleChips}
      maxChips = {2}
      maxTextLength = {6}
      />
    </div>
  )
}
export default App;