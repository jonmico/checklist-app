import Check from '../models/Check';

interface ChecklistItemProps {
  checkItem: Check;
  removeFromChecklist: (id: string) => void;
}

export default function ChecklistItem({
  checkItem,
  removeFromChecklist,
}: ChecklistItemProps) {
  function handleOnClick() {
    removeFromChecklist(checkItem.id);
  }

  return (
    <div>
      <li onClick={handleOnClick}>{checkItem.text}</li>
    </div>
  );
}
