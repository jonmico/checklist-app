import { useState } from 'react';
import './ChecklistForm.css';

interface ChecklistFormProps {
  addToChecklist: (text: string) => void;
}

export default function ChecklistForm({ addToChecklist }: ChecklistFormProps) {
  const [value, setValue] = useState<string>('');

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    addToChecklist(value);
    setValue('');
  }

  function handleTextChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setValue(evt.target.value);
  }

  return (
    <form className='ChecklistForm' onSubmit={handleSubmit}>
      <label htmlFor='new-checklist-item'>Add a new item: </label>
      <input
        type='text'
        id='new-checklist-item'
        name='newItem'
        placeholder='Whatever you want!'
        value={value}
        onChange={handleTextChange}
      />
      <button type='submit' disabled={value === ''}>
        Submit!
      </button>
    </form>
  );
}
