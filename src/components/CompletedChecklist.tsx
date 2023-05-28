import Check from '../models/Check';
import ChecklistItem from './ChecklistItem';
import './CompletedChecklist.css';
interface CompletedChecklistProps {
  completedList: Check[];
  removeFromCompletedChecklist: (id: string) => void;
}

export default function CompletedChecklist({
  completedList,
  removeFromCompletedChecklist,
}: CompletedChecklistProps) {
  return (
    <div className='CompletedChecklist'>
      <ul>
        {completedList.map((item) => (
          <ChecklistItem
            key={item.id}
            checkItem={item}
            removeFromCompletedChecklist={removeFromCompletedChecklist}
          />
        ))}
      </ul>
    </div>
  );
}
