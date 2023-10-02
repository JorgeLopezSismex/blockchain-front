import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { CompactTable } from "@table-library/react-table-library/compact";
import { usePagination } from "@table-library/react-table-library/pagination";

export default function AdminTable({ columns, nodes }) {
  let data = { nodes };

  const pagination = usePagination(data as any, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });

  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(
    pagination.state.getTotalPages(data.nodes)
  );
  const [currentPage, setCurrentPage] = useState(pagination.state.page);

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  function onPaginationChange(action: any, state: any) {
    console.log(action, state);
  }

  data = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  /* ----------------------------- Pages Function ----------------------------- */
  const toFirstPage = () => {
    if (currentPage > 0) {
      pagination.fns.onSetPage(0);
      setCurrentPage(0);
    }
  };

  const toPrevPage = () => {
    if (currentPage > 0) {
      pagination.fns.onSetPage(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const toNextPage = () => {
    if (currentPage < totalPages - 1) {
      pagination.fns.onSetPage(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const toLastPage = () => {
    if (currentPage < totalPages - 1) {
      pagination.fns.onSetPage(totalPages - 1);
      setCurrentPage(totalPages - 1);
    }
  };

  return (
    <div>
      <Row>
        <Col sm={12} md={6}></Col>
        <Col
          sm={12}
          md={6}
          style={{ marginBottom: 20 }}
          className="d-flex justify-content-end"
        >
          <Form.Control
            id="search"
            type="text"
            value={search}
            className="me-2"
            aria-label="Buscar..."
            placeholder="Buscar..."
            style={{ width: "50%" }}
            onChange={handleSearch}
          />
        </Col>
      </Row>

      <CompactTable columns={columns} data={data} pagination={pagination} />

      <Row>
        <Col sm={12} className="d-flex justify-content-end">
          <h6 style={{ float: "left" }} className="px-2 pt-2">
            {currentPage + 1} - {totalPages} de {totalPages}
          </h6>
          <Pagination>
            <Pagination.First
              onClick={toFirstPage}
              disabled={currentPage <= 0 ? true : false}
            />
            <Pagination.Prev
              onClick={toPrevPage}
              disabled={currentPage <= 0 ? true : false}
            />
            <Pagination.Next
              onClick={toNextPage}
              disabled={currentPage >= totalPages - 1 ? true : false}
            />
            <Pagination.Last
              onClick={toLastPage}
              disabled={currentPage >= totalPages - 1 ? true : false}
            />
          </Pagination>
        </Col>
      </Row>
    </div>
  );
}
