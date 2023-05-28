import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import ChecklistForm from './ChecklistForm';
import ChecklistItem from './ChecklistItem';
import Check from '../models/Check';

export default function Checklist() {
  const [list, setList] = useState<Check[]>([
    { id: uuid(), text: 'walk the dog', completed: true },
    { id: uuid(), text: 'walk the cat', completed: false },
    { id: uuid(), text: 'make dinner', completed: false },
  ]);

  return (
    <div>
      <h1>CheckList App</h1>
      <ul>
        {list.map((item) => (
          <ChecklistItem key={item.id} checkItem={item} />
        ))}
      </ul>
      <ChecklistForm />
    </div>
  );
}
