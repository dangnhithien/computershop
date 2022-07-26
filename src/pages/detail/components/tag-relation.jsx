import useCategory from "hooks/useCategory";
import { MdSell } from "react-icons/md";
import { Link } from "react-router-dom";
import { PATH } from "utils/const";

const requestBody = { keyword: "" };
const TagRelation = () => {
  const { categories } = useCategory(requestBody);
  return (
    categories.length > 0 && (
      <div className="tag-relation">
        <span>
          <MdSell />
          &nbsp; Đề xuất
        </span>
        <div className="tag">
          {categories?.map((e, key) => {
            return (
              <Link key={key} to={PATH.PRODUCT} state={{ categoryIds: [e.id] }}>
                <span>{e.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
};

export default TagRelation;
