import Check from '../models/Check';

interface ChecklistItemProps {
  checkItem: Check;
}

export default function ChecklistItem({ checkItem }: ChecklistItemProps) {
  const { text, completed } = checkItem;

  return (
    <div>
      <li>{text}</li>
    </div>
  );
}
