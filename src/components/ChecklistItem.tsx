import Check from '../models/Check';

interface ChecklistItemProps {
  checkItem: Check;
}

export default function ChecklistItem({ checkItem }: ChecklistItemProps) {
  return (
    <div>
      <li>{checkItem.text}</li>
    </div>
  );
}
