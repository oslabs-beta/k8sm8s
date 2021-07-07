import React from 'react';
import { useTable, useSortBy } from 'react-table';

import '../../styles/table.css';

// TODO: move styling to CSS. 
// TODO: potentially incorporate filtering: https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/filtering

const Table = ({ data, headers }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: headers,
    data,
  }, useSortBy);

  const tableProps = getTableProps();
  const tableBodyProps = getTableBodyProps();

  const headerComponents = headerGroups.map(headerGroup => (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(column => (
        <th
          {...column.getHeaderProps(column.getSortByToggleProps())}
          style={{
            borderBottom: 'solid 3px red',
            background: 'aliceblue',
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          {column.render('Header')}
          <span>
            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
          </span>
        </th>
      ))}
    </tr>
  ));

  const rowsComponents = rows.map(row => {
    prepareRow(row);

    return (
      <tr {...row.getRowProps()}>
        {row.cells.map(cell => {
          return (
            <td
              {...cell.getCellProps()}
              style={{
                padding: '10px',
                border: 'solid 1px gray',
                background: 'papayawhip',
              }}
            >
              {cell.render('Cell')}
            </td>
          )
        })}
      </tr>
    )
  });

  return (
    <table {...tableProps}>
      <thead>
        {headerComponents}
      </thead>
      <tbody {...tableBodyProps}>
        {rowsComponents}
      </tbody>
    </table>
  )
};

export default Table;