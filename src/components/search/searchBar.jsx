import { Empty } from "antd";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import PRODUCT from "../../api/product";

import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/const";
import { StyleSearchBar } from "./style/style";

const SearchBar = ({ isRedict = true, setSelectItem }) => {
  const [searchValue, setSearchValue] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function actionGetProduct(keyword) {
    setLoading(true);
    PRODUCT.search(keyword)
      .then((res) => {
        setResultSearch(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  function handleClick(item) {
    if (isRedict) {
      return navigate(PATH.DETAIL(item.id));
    } else {
      setSelectItem({ ...item });
    }
  }
  const handleInput = (e) => {
    // actionGetProduct({ keyword: e.target.value });
    setSearchValue(e.target.value);
  };

  return (
    <StyleSearchBar>
      <div className="input-wrap">
        <BiSearchAlt2 className="icon-search" />
        <input
          onChange={handleInput}
          value={searchValue}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Tìm kiếm..."
        />

        {resultSearch.length > 0 ? (
          <div className="results-wrap">
            <div className="result">
              {resultSearch.map((item) => {
                return (
                  <>
                    <div
                      className="product-item"
                      onClick={() => handleClick(item)}
                    >
                      <div className="image">
                        <img src="https://picsum.photos/300/600" />
                      </div>
                      <div className="content">
                        <div className="title">
                          laptop dell chay rat là cham
                        </div>
                        <div className="price">12.000.000 vnđ</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <>
            <div className="results-wrap display">
              <Empty />
            </div>
          </>
        )}
      </div>
    </StyleSearchBar>
  );
};

export default SearchBar;
