import Check from '../models/Check';
import ChecklistItem from './ChecklistItem';

interface CompletedChecklistProps {
  completedList: Check[];
  removeFromChecklist: (id: string) => void;
}

export default function CompletedChecklist({
  completedList,
  removeFromChecklist,
}: CompletedChecklistProps) {
  return (
    <ul>
      {completedList.map((item) => (
        <ChecklistItem
          checkItem={item}
          removeFromChecklist={removeFromChecklist}
        />
      ))}
    </ul>
  );
}
