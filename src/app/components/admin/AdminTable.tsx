import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { CompactTable } from "@table-library/react-table-library/compact";
import { usePagination } from "@table-library/react-table-library/pagination";

const nodes = [
  {
    id: "0",
    name: "Jorge",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Alberto",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Yadira",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Elizabeth",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Brando",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Emmanuel",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Johan",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Gerardo",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Juan",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Alberto",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Pedro",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Eduardo",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Gustavo",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Jaime",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "123",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
  {
    id: "0",
    name: "Shopping List",
    deadline: new Date(2020, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: 3,
  },
];

const columns = [
  { label: "Task", renderCell: (item) => item.name },
  {
    label: "Deadline",
    renderCell: (item) =>
      item.deadline.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
  },
  { label: "Type", renderCell: (item) => item.type },
  {
    label: "Complete",
    renderCell: (item) => item.isComplete.toString(),
  },
  { label: "Tasks", renderCell: (item) => item.nodes },
];

export default function AdminTable() {
  let data = { nodes };

  const pagination = usePagination(data, {
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

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  function onPaginationChange(action, state) {
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
        <Col sm={12} md={6} style={{ marginBottom: 20 }}>
          <ButtonGroup style={{}} aria-label="Basic example">
            <Button variant="primary">Nueva invitación</Button>
          </ButtonGroup>
        </Col>

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
          <h6 style={{ float: "left" }}>
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
