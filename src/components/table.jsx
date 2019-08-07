import React from "react";
import TableHeader from "../components/tableHeader";
import TableBody from "../components/tableBody";

const Table = props => {
    const {columns, sortColumn, onSort, data} = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
