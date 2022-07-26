import { Radio, Space } from "antd";
import useSupplier from "hooks/useSupplier";
import { StyleContent } from "../style/style";
const requestBody = {
  keyword: "",
};
const SupplierFilter = ({ request, setRequest }) => {
  const { supplierId } = request;
  const { suppliers } = useSupplier(requestBody);
  function handleSupplier(e) {
    setRequest({ ...request, supplierId: e.target.value });
  }
  return (
    suppliers.length > 0 && (
      <StyleContent>
        <Radio.Group
          value={supplierId}
          buttonStyle="solid"
          onChange={handleSupplier}
        >
          <Space direction="vertical">
            {suppliers.map((e, key) => {
              return (
                <Radio key={key} value={e.id}>
                  {e.name}
                </Radio>
              );
            })}
          </Space>
        </Radio.Group>
      </StyleContent>
    )
  );
};

export default SupplierFilter;
