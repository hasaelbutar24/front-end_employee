import axios from 'axios';
import { Container } from '../../components';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tables, Tbody, Thead } from '../../components/Tables';
import { useMemo } from 'react';
import { usePagination, useTable } from 'react-table';
import FilterForm from '../../components/Filters/FiltersForm';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    name: '',
    divisi: '',
    status: '',
    duDate: '',
    operators: '',
    startDate: '',
    endDate: '',
    active: '',
  });

  const [data, setData] = useState([]);

  const fetchEmployees = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/users').catch((err) => console.log(err));
    // const url = 'http://localhost:3000/api/v1/users/search?numericFilters=';
    // const responseFilter = await axios.get(url);

    const isFilterUsed = Object.values(filters).some((value) => value !== '');

    if (isFilterUsed) {
      const employee = data.employee.map((employee, index) => {
        const { name, status, active, deuDate, divisi } = employee;
        const startDate = deuDate && deuDate.startDate ? deuDate.startDate : '';

        return {
          id: index + 1,
          name: String(name),
          status: String(status),
          divisi: String(divisi),
          dueDate: String(startDate),
          active: Boolean(active),
        };
      });
      setEmployees(employee);
    } else {
      const employees = response.data.employees.map((employee, index) => {
        const { name, status, active, deuDate, divisi } = employee;
        const startDate = deuDate && deuDate.startDate ? deuDate.startDate : '';

        return {
          id: index + 1,
          name: String(name),
          status: String(status),
          divisi: String(divisi),
          dueDate: String(startDate),
          active: Boolean(active),
        };
        w;
      });

      setEmployees(employees);
    }
  };

  const handleSubmit = () => {
    const queryString = Object.entries(filters)
      .filter(([key, value]) => value !== '' && key !== 'operators') // Filter properti dengan nilai tidak kosong
      .map(([key, value]) => {
        console.log(key);
        if (key === 'startDate') {
          return `startDate${'>='}${filters.startDate}`;
        }
        if (key === 'endDate') {
          return `endDate${'<='}${filters.endDate}`;
        } else {
          return `${key}${filters.operators}${encodeURIComponent(value)}`;
        }
      }) // Format properti sebagai string query
      .join(','); // Gabungkan semua properti dengan '&' sebagai pemisah

    // Kirim permintaan dengan URL yang sesuai
    fetch(`http://localhost:3000/api/v1/users/search?numericFilters=${queryString}`)
      .then(async (data) => {
        // Lakukan sesuatu dengan data yang diterima
        const dataResponse = await data.json();
        setData(dataResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const employeesData = useMemo(() => [...employees], [employees]);
  const employeesColumns = useMemo(
    () =>
      employees[0]
        ? Object.keys(employees[0])
            .filter((key) => key !== '')
            .map((key) => {
              return { Header: key, accessor: (row) => (key === 'active' ? (row[key] ? 'on' : 'off') : row[key]) };
            })
        : [],
    [employees]
  );

  const tableInstance = useTable(
    {
      columns: employeesColumns,
      data: employeesData,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = tableInstance;

  const getAllData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/users');
      const employees = response.data.employees.map((employee, index) => {
        const { name, status, active, deuDate, divisi } = employee;
        const startDate = deuDate && deuDate.startDate ? deuDate.startDate : '';

        return {
          id: index + 1,
          name: String(name),
          status: String(status),
          divisi: String(divisi),
          dueDate: String(startDate),
          active: Boolean(active),
        };
      });
      setEmployees(employees);
    } catch (error) {
      console.log(error);
    }
  };

  const showFilter = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  console.log(data);
  return (
    <Container title={'employee'}>
      <div className='flex gap-8  ml-4 items-center py-2 px-4'>
        <div className='bg-slate-500 px-2 py-2 rounded-lg font-semibold text-white shadow-md'>
          <button
            className='capitalize'
            onClick={getAllData}
          >
            get all data
          </button>
        </div>
        <div className='bg-slate-500 px-4 py-2 rounded-lg font-semibold text-white shadow-md'>
          <button
            className='capitalize'
            onClick={showFilter}
          >
            filter
          </button>
        </div>
        <div>
          {!showFilters && (
            <FilterForm
              className='text-black bg-slate-300 px-4 py-3 rounded-lg shadow-lg'
              handleSubmit={handleSubmit}
              filters={filters}
              setFilters={setFilters}
              setData={setData}
            />
          )}
        </div>
      </div>
      <Tables getTableProps={getTableProps}>
        <Thead>
          {headerGroups.map((headerGroup, i) => (
            <tr
              key={i}
              {...headerGroup.getHeaderGroupProps()}
              className='tr'
            >
              {headerGroup.headers.map((column, i) => (
                <th
                  key={i}
                  className='th bg-slate-100'
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);

            return (
              <tr
                key={i}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, i) => (
                  <td
                    className='td'
                    key={i}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </Tbody>
      </Tables>
      <div className='flex items-center gap-2 mt-2'>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className='px-2 py-1 bg-slate-500 rounded-md'
        >
          Previous
        </button>
        <span className='cursor-default'>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className='px-4 py-1 bg-slate-500 rounded-md'
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Employees;
