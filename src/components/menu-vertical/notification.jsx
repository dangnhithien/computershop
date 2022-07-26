import { Badge, Empty, Tooltip } from "antd";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { PATH } from "../../utils/const";
import { StyleSubContent } from "./style/style";
const Notification = () => {
  return (
    <div className="notification">
      <Badge count={99} size="small" offset={[0, 20]}>
        <Tooltip
          overlayStyle={{ maxWidth: "500px" }}
          color={"#fff"}
          title={
            <>
              <StyleSubContent>
                <Empty
                  description="Không có thông báo mới"
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </StyleSubContent>
            </>
          }
          placement="left"
        >
          <Link to={PATH.CART} className="border-icon">
            <IoNotificationsSharp className="icon" />
          </Link>
        </Tooltip>
      </Badge>
    </div>
  );
};

export default Notification;
