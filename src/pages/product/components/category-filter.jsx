import useCategory from "hooks/useCategory";
import { StyleContent } from "../style/style";
const requestBody = {
  keyword: "",
};
const CategoryFilter = ({ request, setRequest }) => {
  const { categoryIds } = request;
  const { categories } = useCategory(requestBody);

  function handleCategories(e) {
    const { value, checked } = e.target;

    if (checked) {
      setRequest((request) => ({
        ...request,
        categoryIds: request.categories
          ? [...request?.categoryIds, value]
          : [value],
      }));
    } else {
      setRequest((request) => ({
        ...request,
        categoryIds: request?.categoryIds?.filter((e) => e !== value),
      }));
    }
  }
  return (
    categories.length > 0 && (
      <StyleContent>
        <ul className="list">
          {categories?.map((item, key) => {
            return (
              <li key={key} className="list__item">
                <label className="label--checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={item.id}
                    onChange={handleCategories}
                  />
                  {item.name}
                </label>
              </li>
            );
          })}
        </ul>
      </StyleContent>
    )
  );
};

export default CategoryFilter;
