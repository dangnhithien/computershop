import { Button, Card, Col, Input, notification, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdDelete, MdDoubleArrow } from "react-icons/md";

import styled from "styled-components";
import SUPPLIERS from "../../api/suppliers";
import SpinCustom from "../components/loading/spinCustom";
import TableCustom from "../components/table/table";

const { TextArea } = Input;

const Group = styled.div`
  /* margin-bottom: 20px; */
  padding: 5px;
  h6 {
    font-weight: bold;
  }
  .btn-save {
    height: 30px;
    font-size: 16px;
  }
`;
// table code start

const Supplier = () => {
  const [md, setMd] = useState(4);
  const [loading, setLoading] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [data, setData] = useState([]);

  const newSupplier = useRef({
    name: "",
    description: "",
  });

  useEffect(() => {
    actionGetAllSupplier({ keyword: "" });
  }, []);
  function actionGetAllSupplier(keyword) {
    setLoading(true);
    SUPPLIERS.search(keyword)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
      });
  }
  function actionCreateSupplier() {
    setLoading(true);
    SUPPLIERS.create(newSupplier.current)
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        actionGetAllSupplier({ keyword: "" });
        setLoading(false);
      })
      .catch((res) => {
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
        setLoading(false);
      });
  }
  function actionDeleteSupplier(id) {
    setLoading(true);
    SUPPLIERS.delete({ id: id })
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        actionGetAllSupplier({ keyword: "" });
        setLoading(false);
      })
      .catch((res) => {
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
        setLoading(false);
      });
  }

  const columns = [
    {
      title: "tên nhãn hàng",
      key: "name",
      dataIndex: "name",
      render: (_, { name }) => {
        return (
          <>
            <p>{name}</p>
          </>
        );
      },
      width: "20%",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",

      render: (_, { description }) => {
        return (
          <>
            <div>{description}</div>
          </>
        );
      },
      width: "70%",
    },

    {
      title: "",
      key: "employed",
      render: (_, { id }) => {
        return (
          <>
            <div className="ant-employed">
              <Button
                type="link"
                className="darkbtn"
                style={{ fontSize: 25 }}
                onClick={() => actionDeleteSupplier(id)}
              >
                <MdDelete />
              </Button>
            </div>
          </>
        );
      },
    },
  ];
  function changeMd() {
    if (md == 4) {
      setMd(0);
      return;
    }
    setMd(4);
  }
  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col span={md}></Col>
          <Col span={24} md={16} className="mb-24">
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Nhãn hàng"
              style={{ height: 520 }}
              extra={
                md == 4
                  ? [
                      <Button
                        className="custom"
                        onClick={changeMd}
                        style={{ fontSize: 16, border: "none" }}
                      >
                        Thêm
                        <MdDoubleArrow />
                      </Button>,
                    ]
                  : ""
              }
            >
              {loading ? (
                <SpinCustom />
              ) : (
                <TableCustom columns={columns} data={data} />
              )}
            </Card>
          </Col>
          {md === 0 ? (
            <Col span={24} md={8} className="mb-24" style={{ height: 520 }}>
              <Card
                bordered={false}
                bodyStyle={{ paddingTop: 0 }}
                className="header-solid h-full  ant-list-yes"
                title={
                  <h5 className="font-semibold m-0">Thêm loại sản phẩm</h5>
                }
                extra={[
                  <div
                    className="custom"
                    onClick={changeMd}
                    style={{ fontSize: 18, border: "none", cursor: "pointer" }}
                  >
                    <FaTimes />
                  </div>,
                ]}
              >
                <Row gutter={[24, 0]}>
                  <Col xs="24" xl={24}>
                    <Group>
                      <div className="Name-supplier">
                        <h6>Tên nhãn hàng</h6>
                        <Input
                          showCount
                          maxLength={256}
                          onChange={(element) =>
                            (newSupplier.current.name = element?.target.value)
                          }
                        />
                      </div>
                    </Group>
                    <Group>
                      <div className="address">
                        <h6>Mô tả</h6>
                        <TextArea
                          showCount
                          maxLength={1000}
                          style={{ height: "150px" }}
                          onChange={(element) =>
                            (newSupplier.current.description =
                              element?.target.value)
                          }
                        />
                      </div>
                    </Group>
                  </Col>
                </Row>

                <div className="mt-5 ml-15 pb-15 ">
                  <Button
                    type="primary"
                    style={{ width: 320 }}
                    onClick={actionCreateSupplier}
                    loading={loading}
                  >
                    Lưu
                  </Button>
                </div>
              </Card>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </div>
    </>
  );
};

export default Supplier;
