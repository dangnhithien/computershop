import { Typography } from "antd";
import SearchBar from "components/search/searchBar";

const { Text, Title } = Typography;
const Empty = () => {
  return (
    <div className="box-empty">
      <Title level={5}>Tìm sản phẩm để so sánh</Title>
      <SearchBar />
    </div>
  );
};

export default Empty;
