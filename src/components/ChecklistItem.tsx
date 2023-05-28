import Check from '../models/Check';
import './ChecklistItem.css';
interface ChecklistItemProps {
  checkItem: Check;
  removeFromChecklist?: (id: string) => void;
  removeFromCompletedChecklist?: (id: string) => void;
}

export default function ChecklistItem({
  checkItem,
  removeFromChecklist,
  removeFromCompletedChecklist,
}: ChecklistItemProps) {
  function handleOnClick() {
    if (removeFromChecklist) {
      removeFromChecklist(checkItem.id);
    }

    if (removeFromCompletedChecklist) {
      removeFromCompletedChecklist(checkItem.id);
    }
  }

  return (
    <div className='ChecklistItem'>
      <li onClick={handleOnClick}>{checkItem.text}</li>
    </div>
  );
}
