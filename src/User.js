// in src/users.js
import React from "react";
import { List, Datagrid, EmailField, TextField } from "react-admin";

export const UserList = props => (
  <List title="Все пользователи" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="bio" />
      <TextField source="title" />
      <EmailField source="email" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="profile_image" />
    </Datagrid>
  </List>
);
