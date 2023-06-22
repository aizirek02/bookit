import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

function UserForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Input size="large" placeholder="Name" prefix={<UserOutlined />} />
      <br />
      <Input size="large" placeholder="Surname" prefix={<UserOutlined />} />
      <br />
      <Button type="primary" block>
        Submit
      </Button>
    </>
  );
}
export default UserForm;
