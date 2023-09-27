import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { CompactTable } from "@table-library/react-table-library/compact";
import { usePagination } from "@table-library/react-table-library/pagination";

const issuers = [
    {
        emiterId: "1",
        name: "Jorge Alberto",
        mail: "jalopez@sismex.com",
        phone: "231231231",
        address: "asdasda",
        stateId: 1,
        verification:{
            id: 1,
            name: "sin verificar",
            description: "description"
        },
        profile: {
            id: 1,
            name: "emisor",
            description: "sdfsdfsfsdf"
        }
    },
    {
        emiterId: "2",
        name: "Brando Francisco",
        mail: "bfrancisco@sismex.com",
        phone: "0123456789",
        address: "su casa",
        stateId: 2,
        verification:{
            id: 2,
            name: "sin verificar",
            description: "description"
        },
        profile: {
            id: 2,
            name: "emisor",
            description: "sdfsdfsfsdf"
        }
    },
    {
        emiterId: "3",
        name: "Yadira Ayala",
        mail: "yayala@sismex.com",
        phone: "9876543210",
        address: "cachamia",
        stateId: 3,
        verification:{
            id: 3,
            name: "sin verificar",
            description: "description"
        },
        profile: {
            id: 3,
            name: "emisor",
            description: "sdfsdfsfsdf"
        }
    },
];


//⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙
export default function RequestTable(){
    let data = { issuers };

    const pagination = usePagination(data as any, {
      state: {
        page: 0,
        size: 10,
      },
      onChange: onPaginationChange,
    });

    const [search, setSearch] = useState("");
    const [totalPages, setTotalPages] = useState(
        pagination.state.getTotalPages(data.issuers)
    );
    const [currentPage, setCurrentPage] = useState(pagination.state.page);

    const handleSearch = (event: any) => {
        setSearch(event.target.value);
    };
    
    function onPaginationChange(action: any, state: any) {
      console.log(action, state);
    }

    data = {
        issuers: data.issuers.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };

//⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙
    const toFirstPage = () => {
        if (currentPage > 0){
            pagination.fns.onSetPage(0);
            setCurrentPage(0);
        }
    }

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

    return(
        <div>
            <Row>
                <Col sm={12} md={6} style={{marginBottom: 20}}>
                    <p>Esta es la tablita o(*°▽°*)o</p>
                </Col>
                <Col sm={12} md={6} style={{marginBottom: 20}} className="d-flex justify-content-end">
                    <Form.Control
                        id="search"
                        type="text"
                        value={search}
                        className="me-2"
                        aria-label="Buscar..."
                        placeholder="Buscar..."
                        style={{width: "50%"}}
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