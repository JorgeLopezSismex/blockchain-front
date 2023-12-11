import { Fragment, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import { Col, Row, Form } from "react-bootstrap";
import { Table, Pagination, ButtonGroup } from "react-bootstrap";

import {
  flexRender,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

export default function AdminTable({
  columns,
  children,
  defaultData,
}: {
  columns: any[];
  children: React.ReactNode;
  defaultData: object[];
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    initialState: {},
  });

  console.log(columns);
  console.log(defaultData);

  return (
    <Fragment>
      <Row style={{ marginBottom: 10 }}>
        <Col sm={12} md={6}>
          <ButtonGroup aria-label="Basic example">{children}</ButtonGroup>
        </Col>
        <Col sm={12} md={6} className="d-flex justify-content-end tableFilter">
          <Form.Control
            type="text"
            name="search"
            value={filtering}
            style={{ width: "50%" }}
            placeholder="Buscar..."
            onChange={(e) => {
              setFiltering(e.target.value);
            }}
          />
        </Col>
      </Row>

      <Table responsive>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler,
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{ asc: "arriba", desc: "abajo" }[
                        header.column.getIsSorted() as string
                      ] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {table.getRowModel().rows.length == 0 ? (
          <tbody>
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                No se encontraron resultados.
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </Table>

      <Row className="d-flex align-items-center" style={{ marginTop: 10 }}>
        <Col sm={12} md={5} className="" style={{ marginBottom: 10 }}>
          Mostrando {table.getState().pagination.pageIndex + 1} de{" "}
          {table.getPageCount()}
          <select
            style={{ marginLeft: 10 }}
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} Páginas
              </option>
            ))}
          </select>
        </Col>

        <Col sm={12} md={7} className="d-flex justify-content-end">
          <Pagination style={{ marginBottom: 0 }}>
            <Pagination.First
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            />
            <Pagination.Prev
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />

            <Pagination.Next
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
            <Pagination.Last
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            />
          </Pagination>
        </Col>
      </Row>
    </Fragment>
  );
}
