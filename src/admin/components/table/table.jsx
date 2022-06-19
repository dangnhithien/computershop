import { Pagination, Table } from "antd";
import React from "react";
import styled from "styled-components";

const TextAlign = styled.div`
  padding-bottom: 20px;
  .table-responsive table tbody tr td {
    text-align: left !important;
  }
  .ant-table-pagination-right {
    justify-content: center !important;
  }
`;
const TableStyle = styled.div`
  thead {
    background: #1890ff !important;
    color: #fff !important;
  }
  thead tr th {
    font-size: 14px;
    color: #fff !important;
  }
  .ant-table-filter-trigger.active {
    color: red;
  }
`;
const PaginationStyle = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

const TableCustom = ({ data, columns, total, pageSize, current }) => {
  return (
    <>
      <TextAlign>
        <div className="table-responsive pb-5">
          <TableStyle>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              scroll={false}
              className="ant-border-space"
            />
          </TableStyle>
        </div>
        <PaginationStyle>
          <Pagination
            total={85}
            showTotal={(total) => `Total ${total} items`}
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </PaginationStyle>
      </TextAlign>
    </>
  );
};

export default TableCustom;
