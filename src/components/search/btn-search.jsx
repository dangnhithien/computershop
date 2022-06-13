import React, { useState } from "react";
import styled from "styled-components";
import img from "../../assets/images/banner_images/banner-img2770x496.jpg";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import { Input, AutoComplete } from "antd";
import { ImSearch } from "react-icons/im";

const SuggestSearch = styled.div`
  padding: 5px;
  margin: 0 -15px;

  .suggest-search {
    display: flex;
    color: black;
  }
  .content {
    margin-left: 10px;
  }
  .title {
    font-size: 16px;
  }
  .price {
    font-size: 12px;
  }
`;

const datas = [
  {
    title: "laptop dell",
  },
  {
    title: "laptop dell",
  },
  {
    title: "laptop dell",
  },
  {
    title: "laptop dell",
  },
  {
    title: "laptop dell",
  },
  {
    title: "laptop dell",
  },
];
const BtnSearch = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  console.log(options);
  const onSelect = (value) => {
    console.log("onSelect", value);
  };
  return (
    <>
      <div className="header-search">
        <AutoComplete
          dropdownMatchSelectWidth={400}
          style={{
            width: "100%",
          }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Input.Search
            size="large"
            placeholder="tìm kiếm sản phẩm ..."
            enterButton={
              <button className="default-search-style-input-btn">
                <ImSearch />
              </button>
            }
          />
        </AutoComplete>
      </div>
    </>
  );
};

export default BtnSearch;

const searchResult = () =>
  datas.map((e, idx) => {
    return {
      value: "query" + idx,
      label: (
        <SuggestSearch>
          <Link to="/detail" className="suggest-search">
            <Avatar shape="square" size={49} src={img} />
            <div className="content">
              <strong className="title">{e.title}</strong>
              <div className="price">9000.000.000</div>
            </div>
          </Link>
        </SuggestSearch>
      ),
    };
  });
