import { useState } from 'react';

const FilterForm = ({ filters, setFilters, handleSubmit, className }) => {
  const [fields, setFields] = useState('');
  const [fields2, setFields2] = useState('');
  const [fields3, setFields3] = useState('');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  console.log(filters);

  return (
    <div className={`${className}filter-form flex flex-col gap-4 sticky top-0 right-0`}>
      <div className='flex gap-2'>
        <select
          name='fields'
          id='fields'
          onChange={(e) => setFields(e.target.value)}
        >
          <option value=''>select</option>
          <option value='name'>name</option>
          <option value='active'>active</option>
          <option value='divisi'>divisi</option>
          <option value='dueDate'>dueDate</option>
          <option value='status'>status</option>
        </select>

        {fields === 'dueDate' ? (
          ''
        ) : (
          <select
            name='operators'
            id='operators'
            value={filters.operators}
            onChange={handleInputChange}
          >
            <option value=''>select operator</option>
            <option value='='>is</option>
            <option value='!='>is not</option>
          </select>
        )}
        {fields === 'name' && (
          <input
            type='text'
            name='name'
            value={filters.name}
            onChange={handleInputChange}
          />
        )}
        {fields === 'divisi' && (
          <select
            name='divisi'
            id='divisi'
            value={filters.divisi}
            onChange={handleInputChange}
          >
            <option value=''>select divisi</option>
            <option value='kantor'>kantor</option>
            <option value='supir'>supir</option>
            <option value='kernek'>kernek</option>
            <option value='meja'>meja</option>
            <option value='kursi'>kursi</option>
          </select>
        )}
        {fields === 'active' && (
          <select
            name='active'
            id='active'
            value={filters.active}
            onChange={handleInputChange}
          >
            <option value=''>select active</option>
            <option value='true'>on</option>
            <option value='false'>off</option>
          </select>
        )}
        {fields === 'status' && (
          <select
            name='status'
            id='status'
            value={filters.status}
            onChange={handleInputChange}
          >
            <option value=''>select status</option>
            <option value='contract'>contract</option>
            <option value='permanent'>permanent</option>
          </select>
        )}
        {fields === 'dueDate' && (
          <label
            htmlFor='dueDate'
            className='flex gap-2'
          >
            <input
              type='date'
              name='startDate'
              value={filters.startDate}
              onChange={handleInputChange}
            />
            <input
              type='date'
              name='endDate'
              value={filters.endDate}
              onChange={handleInputChange}
            />
          </label>
        )}
        {fields === '' && <input type='text' />}
      </div>

      <div className='flex gap-2'>
        <select
          name='fields'
          id='fields'
          onChange={(e) => setFields2(e.target.value)}
        >
          <option value=''>select</option>
          <option value='name'>name</option>
          <option value='active'>active</option>
          <option value='divisi'>divisi</option>
          <option value='dueDate'>dueDate</option>
          <option value='status'>status</option>
        </select>

        {fields2 === 'dueDate' ? (
          ''
        ) : (
          <select
            name='operators'
            id='operators'
            value={filters.operators}
            onChange={handleInputChange}
          >
            <option value=''>select operator</option>
            <option value='='>is</option>
            <option value='!='>is not</option>
          </select>
        )}
        {fields2 === 'name' && (
          <input
            type='text'
            name='name'
            value={filters.name}
            onChange={handleInputChange}
          />
        )}
        {fields2 === 'divisi' && (
          <select
            name='divisi'
            id='divisi'
            value={filters.divisi}
            onChange={handleInputChange}
          >
            <option value=''>select divisi</option>
            <option value='kantor'>kantor</option>
            <option value='supir'>supir</option>
            <option value='kernek'>kernek</option>
            <option value='meja'>meja</option>
            <option value='kursi'>kursi</option>
          </select>
        )}
        {fields2 === 'active' && (
          <select
            name='active'
            id='active'
            value={filters.active}
            onChange={handleInputChange}
          >
            <option value=''>select active</option>
            <option value='true'>on</option>
            <option value='false'>off</option>
          </select>
        )}
        {fields2 === 'status' && (
          <select
            name='status'
            id='status'
            value={filters.status}
            onChange={handleInputChange}
          >
            <option value=''>select status</option>
            <option value='contract'>contract</option>
            <option value='permanent'>permanent</option>
          </select>
        )}
        {fields2 === 'dueDate' && (
          <label
            htmlFor='dueDate'
            className='flex gap-2'
          >
            <input
              type='date'
              name='startDate'
              value={filters.startDate}
              onChange={handleInputChange}
            />
            <input
              type='date'
              name='endDate'
              value={filters.endDate}
              onChange={handleInputChange}
            />
          </label>
        )}
        {fields2 === '' && <input type='text' />}
      </div>

      <div className='flex gap-2'>
        <select
          name='fields'
          id='fields'
          onChange={(e) => setFields3(e.target.value)}
        >
          <option value=''>select</option>
          <option value='name'>name</option>
          <option value='active'>active</option>
          <option value='divisi'>divisi</option>
          <option value='dueDate'>dueDate</option>
          <option value='status'>status</option>
        </select>

        {fields3 === 'dueDate' ? (
          ''
        ) : (
          <select
            name='operators'
            id='operators'
            value={filters.operators}
            onChange={handleInputChange}
          >
            <option value=''>select operator</option>
            <option value='='>is</option>
            <option value='!='>is not</option>
          </select>
        )}
        {fields3 === 'name' && (
          <input
            type='text'
            name='name'
            value={filters.name}
            onChange={handleInputChange}
          />
        )}
        {fields3 === 'divisi' && (
          <select
            name='divisi'
            id='divisi'
            value={filters.divisi}
            onChange={handleInputChange}
          >
            <option value=''>select divisi</option>
            <option value='kantor'>kantor</option>
            <option value='supir'>supir</option>
            <option value='kernek'>kernek</option>
            <option value='meja'>meja</option>
            <option value='kursi'>kursi</option>
          </select>
        )}
        {fields3 === 'active' && (
          <select
            name='active'
            id='active'
            value={filters.active}
            onChange={handleInputChange}
          >
            <option value=''>select active</option>
            <option value='true'>on</option>
            <option value='false'>off</option>
          </select>
        )}
        {fields3 === 'status' && (
          <select
            name='status'
            id='status'
            value={filters.status}
            onChange={handleInputChange}
          >
            <option value=''>select status</option>
            <option value='contract'>contract</option>
            <option value='permanent'>permanent</option>
          </select>
        )}
        {fields3 === 'dueDate' && (
          <label
            htmlFor='dueDate'
            className='flex gap-2'
          >
            <input
              type='date'
              name='startDate'
              value={filters.startDate}
              onChange={handleInputChange}
            />
            <input
              type='date'
              name='endDate'
              value={filters.endDate}
              onChange={handleInputChange}
            />
          </label>
        )}
        {fields3 === '' && <input type='text' />}
      </div>

      <div className='px-2 py-2 bg-slate-400 text-center '>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FilterForm;
