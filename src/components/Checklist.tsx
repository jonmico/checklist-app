import { useState } from 'react';

interface Check {
  id: string;
  text: string;
  completed: boolean;
}

export default function Checklist() {
  const [list, setList] = useState<Check[]>([
    { id: 'string1', text: 'walk the dog', completed: true },
    { id: 'check2', text: 'walk the cat', completed: false },
    { id: 'check3', text: 'make dinner', completed: false },
  ]);

  return (
    <div>
      <h1>CheckList App</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
