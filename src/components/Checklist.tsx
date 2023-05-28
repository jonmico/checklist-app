import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import ChecklistForm from './ChecklistForm';
import CompletedChecklist from './CompletedChecklist';
import Check from '../models/Check';
import NotCompletedChecklist from './NotCompletedChecklist';

export default function Checklist() {
  const [list, setList] = useState<Check[]>([]);
  const [completedList, setCompletedList] = useState<Check[]>([]);

  function addToChecklist(text: string) {
    setList((currList) => [...currList, { id: uuid(), text }]);
  }

  function removeFromChecklist(id: string) {
    setCompletedList((currCompletedList) => [
      ...currCompletedList,
      ...list.filter((item) => item.id === id),
    ]);
    setList((currList) => currList.filter((item) => item.id !== id));
  }

  function removeFromCompletedChecklist(id: string) {
    setList((currList) => [
      ...currList,
      ...completedList.filter((item) => item.id === id),
    ]);
    setCompletedList((currCompletedList) =>
      currCompletedList.filter((item) => item.id !== id)
    );
  }

  return (
    <div>
      <h1>CheckList App</h1>

      {list.length > 0 && (
        <NotCompletedChecklist
          list={list}
          removeFromChecklist={removeFromChecklist}
        />
      )}
      <ChecklistForm addToChecklist={addToChecklist} />
      {completedList.length > 0 && (
        <CompletedChecklist
          completedList={completedList}
          removeFromCompletedChecklist={removeFromCompletedChecklist}
        />
      )}
    </div>
  );
}
