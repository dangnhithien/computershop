import { Empty } from "antd";
import { useEffect, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import PRODUCT from "../../api/product";

import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../utils/const";
import { StyleSearchBar } from "./style/style";
import parseMoney from "../../utils/parseMoney";
import SpinCustom from "../spin/Spin";

const SearchBar = ({ isRedict = true, setSelectItem }) => {
  const [searchValue, setSearchValue] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchValue("");
    setResultSearch([]);
  }, [location.pathname]);

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
    if (timeoutRef) clearTimeout(timeoutRef.current);
    setTimeout(() => {
      actionGetProduct({ keyword: e.target.value });
    }, 500);
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
          onBlur={() => setBlur(true)}
          onFocus={() => setBlur(false)}
        />

        {resultSearch.length > 0 && !blur ? (
          <div className="results-wrap">
            <div className="result">
              {loading ? (
                <SpinCustom />
              ) : (
                resultSearch.map((item) => {
                  return (
                    <>
                      <div
                        className="product-item"
                        onMouseDown={() => handleClick(item)}
                        // onClick={() => handleClick(item)}
                      >
                        <div className="image">
                          <img
                            src="https://picsum.photos/300/600"
                            alt="image"
                          />
                        </div>
                        <div className="content">
                          <div className="title">{item.name}</div>
                          <div className="price">
                            &#8363; {parseMoney(item.productPrice ?? 12000000)}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
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
