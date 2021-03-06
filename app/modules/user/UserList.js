import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "../../libs/request";
import { Loader } from "../components";
import { Table } from "../components/Table";

const column = [
  { label: "First Name", key: "first_name" },
  { label: "Last Name", key: "last_name" },
  { label: "Username", key: "username" },
  { label: "email", key: "email" },
  {
    label: "Is Staff",
    key: "is_staff",
    component: ({ content }) => (
      <i className={`icon ${content ? "check" : "remove"}`} />
    ),
  },
];

const UserList = () => {
  const [userList, setUserList] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    request({
      name: "user-list",
      method: "get",
    })
      .then((response) => {
        const { data } = response;
        setUserList(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        const { response } = error;
        if (response) console.error(response);
      });
  }, []);
  if (loading) return <Loader />;
  return (
    <React.Fragment>
      <div className="ui padded segment borderless">
        <Link to="/user/create" className="">
          <i className="icon plus"></i>Add User
        </Link>
      </div>
      {userList && (
        <Table numbered columnSchema={column} collection={userList} />
      )}
    </React.Fragment>
  );
};

export { UserList };
