import { UploadOutlined } from "@ant-design/icons";
import { Button, Col, Input, notification, Row, Select, Upload } from "antd";
import CUSTOMER from "api/customer.js";
import SpinCustom from "components/spin/Spin";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useStoreUser from "store/personal.js";
import { AWARD } from "utils/addresss/award";
import { DISTRICT } from "utils/addresss/district";
import { PROVINCE } from "utils/addresss/province";
const { Option } = Select;

const Info = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, control, watch, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      dob: "2022-07-07T13:11:01.022Z",
      gender: true,
      mail: "",
      phoneNumber: "",
      addressId: "",
      address: {
        id: "",
        cityCode: "",
        city: "",
        districtCode: "",
        district: "",
        wardCode: "",
        ward: "",
        stayingAddress: "",
      },
    },
  });
  const userProfile = useStoreUser((state) => state.profile);
  useEffect(() => {
    // if (!userProfile.id) {
    //   return;
    // }
    setLoading(true);
    CUSTOMER.search({ userId: userProfile.id })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data.length) {
      reset({ ...data.at(3), email: userProfile.email });
    }
  }, [data]);

  const actionPutForm = (values) => {
    delete values.address.id;
    const request = {
      id: data[3].id,
      userId: userProfile.id,
      mail: userProfile.email,
      ...values,
      ...values.address,
    };
    setLoading(true);
    CUSTOMER.put(request)
      .then((res) => {
        setLoading(false);
        notification.success({
          message: "Cập nhật thông tin thành công",
          placement: "topRight",
        });
      })
      .catch((error) => {
        notification.error({
          message: "Xảy ra lỗi",
          placement: "topRight",
        });
        setLoading(false);
      });
  };

  return (
    <Row gutter={[24, 0]} className="main">
      {loading ? (
        <SpinCustom />
      ) : (
        <>
          <Col span={16}>
            <h5 className="title">Hồ sơ của tôi</h5>

            <form onSubmit={handleSubmit(actionPutForm)} method="post">
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <span className="label" style={{ display: "inline-block" }}>
                    Email
                  </span>
                  &nbsp;
                  <span
                    style={{ fontSize: 16, fontWeight: "600", marginLeft: 16 }}
                  >
                    {userProfile.email}
                  </span>
                  {/* <Controller
                    name="email"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  /> */}
                </Col>

                <Col span={24}>
                  <span className="label">Họ tên</span>
                  <Controller
                    name="name"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  />
                </Col>

                <Col span={24}>
                  <span className="label">Địa chỉ</span>
                  <Controller
                    name="address.cityCode"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => {
                      return (
                        <Select
                          {...field}
                          onChange={(value, option) => {
                            field.onChange(value);
                            setValue("address.district", "");
                            setValue("address.ward", "");
                            setValue("address.districtCode", "");
                            setValue("address.wardCode", "");
                            setValue("address.city", option.children);
                          }}
                          style={{
                            width: 200,
                            marginRight: 8,
                          }}
                          placeholder="Chọn tỉnh"
                        >
                          {PROVINCE.map((element, key) => {
                            return (
                              <>
                                <Option key={key} value={element.province_id}>
                                  {element.province_name}
                                </Option>
                              </>
                            );
                          })}
                        </Select>
                      );
                    }}
                  />

                  <Controller
                    name="address.districtCode"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => {
                      return (
                        <Select
                          {...field}
                          onChange={(value, option) => {
                            field.onChange(value);

                            setValue("address.ward", "");
                            setValue("address.wardCode", "");
                            setValue("address.district", option.children);
                          }}
                          style={{
                            width: 200,
                            marginRight: 8,
                          }}
                          placeholder="Chọn huyện"
                          disabled={!watch("address.cityCode")}
                        >
                          {DISTRICT.map((element, key) => {
                            if (
                              element.province_id !== watch("address.cityCode")
                            )
                              return;
                            return (
                              <>
                                <Option key={key} value={element.district_id}>
                                  {element.district_name}
                                </Option>
                              </>
                            );
                          })}
                        </Select>
                      );
                    }}
                  />
                  <Controller
                    name="address.wardCode"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => {
                      return (
                        <Select
                          {...field}
                          onChange={(value, option) => {
                            field.onChange(value);
                            setValue("address.ward", option.children);
                          }}
                          style={{
                            width: 200,
                          }}
                          placeholder="Chọn xã"
                          disabled={!watch("address.districtCode")}
                        >
                          {AWARD.map((element, key) => {
                            if (
                              element.district_id !==
                              watch("address.districtCode")
                            )
                              return;
                            return (
                              <>
                                <Option key={key} value={element.ward_id}>
                                  {element.ward_name}
                                </Option>
                              </>
                            );
                          })}
                        </Select>
                      );
                    }}
                  />
                  <Controller
                    name="address.stayingAddress"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => {
                      return (
                        <Input
                          {...field}
                          placeholder="tên đường/số nhà"
                          style={{ marginTop: 12 }}
                        />
                      );
                    }}
                  />
                </Col>

                <Col span={24}>
                  <span className="label">Số điện thoại</span>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} />}
                  />
                </Col>

                <Col span={24}>
                  <span className="label">Giới tính</span>
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Chọn giới tính"
                        style={{ width: 120 }}
                      >
                        <Option value={true}>Nam </Option>
                        <Option value={false}>Nữ</Option>
                      </Select>
                    )}
                  />
                </Col>

                <Col span={24}>
                  <Button type="primary" htmlType="submit" className="btn-save">
                    lưu
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
          <Col
            span={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row
              gutter={[24, 0]}
              style={{
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Col>
                <div className="image">
                  <img src="https://picsum.photos/200/300?random=1" alt="" />
                </div>
              </Col>

              <Col className="upload-img">
                <Upload>
                  <Button icon={<UploadOutlined />}>Chọn hình</Button>
                </Upload>
              </Col>
            </Row>
          </Col>
        </>
      )}
    </Row>
  );
};
export default Info;
