import * as React from "react";
import ReactDOM from "react-dom/client";
import { Fragment, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import { IssuerData } from "@/types/issuers";

import Moment from "react-moment";

import Table from "react-bootstrap/Table";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";

import { EnvelopeFill } from "react-bootstrap-icons";
import { PencilFill, Check2, XLg } from "react-bootstrap-icons";

// import "./index.css";

import {
  createColumnHelper,
  flexRender,
  getFilteredRowModel,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import moment from "moment";
import { Fragment_Mono } from "next/font/google";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: IssuerData[] = [
  {
    issuerId: 2,
    name: "Pedro Martinez",
    email: "pmartinez@sismex.com",
    phone: "8181818181",
    stateId: 0,
    roleId: 1,
    roleName: "Administrador",
    roleDescription: "Administrador del sistema",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 2,
    lastValidationSubmit: null,
  },
  {
    issuerId: 3,
    name: "MyCompanyName",
    email: "jalopez@sismex.com",
    phone: "8149481123",
    stateId: 0,
    roleId: 1,
    roleName: "Administrador",
    roleDescription: "Administrador del sistema",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: "MyLegalCompayName",
    zipCode: "64560",
    country: "México",
    state: "Nuevo León",
    city: "Monterrey",
    suburb: "Nueva Madero",
    externalNumber: "3277",
    internalNumber: "3277",
    description: "Esta es mi descripción",
    rfc: "1234567890",
    street: "Cuarta Privada",
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 3,
    lastValidationSubmit: null,
  },
  {
    issuerId: 10,
    name: "string",
    email: "yayalaa@sismex.com",
    phone: "string",
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 10,
    lastValidationSubmit: null,
  },
  {
    issuerId: 12,
    name: "Brando Francisco Vargas",
    email: "bfrancisco@sismex.com",
    phone: "132312312312",
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 12,
    lastValidationSubmit: null,
  },
  {
    issuerId: 13,
    name: "string",
    email: "emhernandez@sismex.com",
    phone: "string",
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 13,
    lastValidationSubmit: null,
  },
  {
    issuerId: 14,
    name: "string",
    email: "jreyna@sismex.com",
    phone: "string",
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 14,
    lastValidationSubmit: null,
  },
  {
    issuerId: 15,
    name: null,
    email: "test@testing.com",
    phone: null,
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 15,
    lastValidationSubmit: null,
  },
  {
    issuerId: 18,
    name: "Johan Gerardo Herrera Garcia",
    email: "jherrera@sismex.com",
    phone: "123123123",
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 18,
    lastValidationSubmit: null,
  },
  {
    issuerId: 19,
    name: null,
    email: "yayala@sismex.com",
    phone: null,
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 19,
    lastValidationSubmit: null,
  },
  {
    issuerId: 20,
    name: null,
    email: "bfr@siscsdaa.com",
    phone: null,
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 20,
    lastValidationSubmit: null,
  },
  {
    issuerId: 21,
    name: null,
    email: "nerage6071@gekme.com",
    phone: null,
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 21,
    lastValidationSubmit: null,
  },
  {
    issuerId: 22,
    name: null,
    email: "mejaf51967@fesgrid.com",
    phone: null,
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 22,
    lastValidationSubmit: null,
  },
  {
    issuerId: 23,
    name: null,
    email: "makeyam410@fesgrid.com",
    phone: null,
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 23,
    lastValidationSubmit: null,
  },
  {
    issuerId: 24,
    name: null,
    email: "M10@fesgrid.com",
    phone: null,
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 24,
    lastValidationSubmit: null,
  },
  {
    issuerId: 37,
    name: null,
    email: "cedore7610@finghy.com",
    phone: null,
    stateId: 0,
    roleId: 2,
    roleName: "Emisor",
    roleDescription: "Emisor de certificados",
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: "Sin verificar",
    legalName: null,
    zipCode: null,
    country: null,
    state: null,
    city: null,
    suburb: null,
    externalNumber: null,
    internalNumber: null,
    description: null,
    rfc: null,
    street: null,
    createdAt: "2023-10-05T20:52:41.247",
    createdBy: 37,
    lastValidationSubmit: null,
  },
];

const columnHelper = createColumnHelper<IssuerData>();

const columns = [
  columnHelper.accessor("issuerId", {
    header: () => "Id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => "Nombre",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: () => "Correo Electrónico",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("roleName", {
    header: () => "Rol asignado",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    header: () => "Fecha de registro",
    cell: (info) => moment(info.getValue()).format("DD/MM/YYYY"),
  }),
  columnHelper.accessor("issuerVerificationStatusName", {
    header: () => "Estado de Verificación",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastValidationSubmit", {
    header: () => "Última solicitud de verificación",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastValidationSubmit", {
    header: () => "Acciones",
    cell: (info) => {
      return (
        <div>
          <Button variant="primary">
            <PencilFill></PencilFill>
          </Button>
          <Button variant="primary">
            <Check2></Check2>
          </Button>
          <Button variant="primary">
            <XLg></XLg>
          </Button>

          {/* <Button variant="primary">
            <EnvelopeFill></EnvelopeFill>
          </Button> */}
        </div>
      );
    },
  }),
];

export default function App() {
  console.log(moment("2014-02-27T10:00:00").format("DD-MM-YYYY"));

  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <Fragment>
      <Row style={{ marginBottom: 10 }}>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}>
          <Form.Control
            type="text"
            placeholder="Buscar..."
            name="firstName"
            value={filtering}
            onChange={(e) => {
              setFiltering(e.target.value);
              console.log(data);
            }}
          />
        </Col>
      </Row>

      <Table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
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
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </Table>

      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
    </Fragment>
  );
}
