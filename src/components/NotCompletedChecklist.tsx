import ChecklistItem from './ChecklistItem';
import Check from '../models/Check';

interface NotCompletedChecklistProps {
  list: Check[];
  removeFromChecklist: (id: string) => void;
}

export default function NotCompletedChecklist({
  list,
  removeFromChecklist,
}: NotCompletedChecklistProps) {
  return (
    <ul>
      {list.map((item) => (
        <ChecklistItem
          key={item.id}
          checkItem={item}
          removeFromChecklist={removeFromChecklist}
        />
      ))}
    </ul>
  );
}
