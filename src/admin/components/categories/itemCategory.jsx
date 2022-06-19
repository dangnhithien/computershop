import { Input, InputNumber, notification, Popconfirm, Tag } from "antd";
import { useRef, useState } from "react";

import { FaSave } from "react-icons/fa";
import { Select } from "antd";

import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";
import CATEGORIES from "../../../api/categories";
const { Option } = Select;

const ItemCategory = ({ item }) => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const data = useRef({
    id: "e27fda91-854c-46db-cee9-08da5062d043",
    name: "",
    description: "",
    slug: "thien",
    level: 0,
    order: 0,
    isShowed: true,
    parentId: "936DA01F-9ABD-4d9d-80C7-02AF85C822A8",
  });

  function actionPutData() {
    console.log("1");
    setLoading(true);
    console.log(data.current);
    CATEGORIES.put(data.current)
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
      });
  }
  function actionDeleteData() {
    setLoading(true);
    CATEGORIES.delete(data.current)
      .then((res) => {
        notification.success({
          message: " Thành công",
          placement: "topRight",
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        notification.error({
          message: "Không thành công",
          placement: "topRight",
        });
      });
  }
  return (
    <>
      {edit ? (
        <>
          <InputNumber
            min={1}
            max={50}
            size="large"
            className="order"
            defaultValue={item.order}
            required
            ref={(element) => (data.current.order = parseInt(element?.value))}
          />
          <div className="content">
            <Input className="name" defaultValue={item.name} required />
            <Input
              className="description"
              defaultValue={item.description}
              required
              ref={(element) => (data.current.name = element?.input?.value)}
            />
          </div>
          <div className="active">
            <Select
              defaultValue="lucy"
              style={{
                width: 120,
                marginLeft: 10,
              }}
              onChange={(value) => {
                data.current.isShowed = value;
              }}
            >
              <Option value={true}>Hiện</Option>
              <Option value={false}>Ẩn</Option>
            </Select>
          </div>
          <div className="action">
            <Popconfirm
              title="Bạn có muốn thay đổi ?"
              onConfirm={actionPutData}
              onCancel={() => setEdit(false)}
              okText="yes"
              cancelText="No"
            >
              <FaSave className="icon save" />
            </Popconfirm>
          </div>
        </>
      ) : (
        <>
          <div className="order">{item.order}</div>
          <div className="content">
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
          </div>
          <div className="active">
            <Tag color="#87d068" className="tag-active">
              Hiện
            </Tag>
          </div>
          <div className="action">
            <Popconfirm
              title="Bạn có muốn xóa ?"
              onConfirm={actionDeleteData}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <MdDelete className="icon delete" />
            </Popconfirm>

            <MdOutlineModeEditOutline
              className="icon edit"
              onClick={() => setEdit(true)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ItemCategory;
