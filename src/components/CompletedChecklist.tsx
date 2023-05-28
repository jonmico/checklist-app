import Check from '../models/Check';
import ChecklistItem from './ChecklistItem';

interface CompletedChecklistProps {
  completedList: Check[];
  removeFromCompletedChecklist: (id: string) => void;
}

export default function CompletedChecklist({
  completedList,
  removeFromCompletedChecklist,
}: CompletedChecklistProps) {
  return (
    <ul>
      {completedList.map((item) => (
        <ChecklistItem
          checkItem={item}
          removeFromCompletedChecklist={removeFromCompletedChecklist}
        />
      ))}
    </ul>
  );
}
