import { Rate } from "antd";

const RateFilter = ({ request, setRequest }) => {
  const { rate } = request;
  function handleRate(e) {
    setRequest({ ...request, rate: e });
  }
  return (
    <>
      <Rate allowHalf defaultValue={rate} onChange={handleRate} />
      &nbsp;
      <span>{rate} sao trở lên</span>
    </>
  );
};

export default RateFilter;
