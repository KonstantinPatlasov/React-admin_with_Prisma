// in src/posts.js
import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  TextInput,
  SelectInput,
  SimpleForm,
  Filter,
  SimpleList,
  Responsive
} from "react-admin";

export const PostList = props => (
  <List {...props} filters={<PostFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="author.id" reference="User">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="text" />
          <TextField source="slug" />
          <TextField source="summary" />
          <TextField source="image" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput label="User" source="author.id" reference="User">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="text" />
      <TextInput source="slug" />
      <TextInput source="summary" />
      <TextInput source="image" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="User" source="author.id" reference="User">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="text" />
      <TextInput source="slug" />
      <TextInput source="summary" />
      <TextInput source="image" />
    </SimpleForm>
  </Create>
);

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="author.id" reference="User" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
