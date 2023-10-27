import React from 'react';

function ChipList({ chips, maxChips, maxTextLength }) {
  if (!chips || chips.length === 0 || maxChips <= 0) {
    return <></>;
  }

  const displayedChips = chips.slice(0, maxChips);
  const excessChips = chips.length - maxChips;

  return (
    <div>
      <div>
        {displayedChips.map((chip, index) => (
          <div key={index} data-testid={`chip-${index}`}>
            {chip.label.length > maxTextLength ? (
              chip.label.substring(0, maxTextLength) + '_'
            ) : (
              chip.label
            )}
          </div>
        ))}
      </div>
      {excessChips > 0 && (
        <aside data-testid="exceeding-text">
          {excessChips === 1
            ? `1 more item`
            : `${excessChips} more items`}
        </aside>
      )}
    </div>
  );
}

export default ChipList;
