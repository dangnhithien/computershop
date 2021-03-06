import { Tooltip } from "antd";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import React, { createElement, useState } from "react";
import moment from "moment";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import styled from "styled-components";
import RateCustom from "./rateCustom";

const CommentAction = styled.span`
  display: flex;
  .comment-action {
    padding-left: 8px;
    cursor: "auto";
    line-height: 10px;
  }

  [class*="-col-rtl"] .comment-action {
    padding-right: 8px;
    padding-left: 0;
  }
`;
const Wrapper = styled.div`
  background-color: #f7f7f7;
  padding: 30px;

  .overview {
    background-color: #fff;
    min-height: 75px;
    border: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    border-radius: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;
  }
  .briefing {
    text-align: center;
    margin-right: 30px;
    margin-top: -30px;
    margin-bottom: -30px;
    padding: 30px 60px 30px 30px;
    border-right: 1px solid #d9d9d9;
  }
  .filters {
    flex: 1;
    margin-left: 10px;
  }
  .filters-item {
    margin-right: 10px;
  }
`;
const UserComment = ({ role, children }) => {
  const [likes, setLikes] = useState(156);
  const [liked, setLiked] = useState(false);

  const like = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <CommentAction onClick={like}>
        {createElement(liked ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </CommentAction>
    </Tooltip>,
  ];

  const isAdmin = () => {
    if (role === "admin") {
      return (
        <div>
          <strong>Admin</strong>
        </div>
      );
    }
    if (role === "user") {
      return <div>Đặng Nhị Thiên</div>;
    }
    return;
  };
  return (
    <Comment
      actions={actions}
      author={
        <div>
          <> {isAdmin()}</>
          <RateCustom size="13" value={4.5} />
        </div>
      }
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    >
      {children}
    </Comment>
  );
};

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push(i);
}

const { TextArea } = Input;
const Editor = () => (
  <>
    <Form.Item>
      <TextArea rows={4} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const Comments = () => {
  return (
    <Wrapper>
      <h5>ĐÁNH GIÁ SẢN PHẨM</h5>

      <div className="overview">
        <div className="briefing">
          <h1 className="rating-core">4.5</h1>
          <div className="star">
            <RateCustom size="20" value={4.5} />
          </div>
        </div>
        <div className="filters">
          <Button className="filters-item">Tất cả</Button>
          <Button className="filters-item">5 Sao(1,1k)</Button>
          <Button className="filters-item">4 Sao(1,2k)</Button>
          <Button className="filters-item">3 Sao(1k)</Button>
          <Button className="filters-item">2 Sao(45)</Button>
          <Button className="filters-item">1 Sao(0)</Button>
        </div>
      </div>
      <Comment
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={<Editor value="" />}
      />
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <UserComment role="user">
            <UserComment role="admin" />
          </UserComment>
        )}
      />
    </Wrapper>
  );
};

export default Comments;
