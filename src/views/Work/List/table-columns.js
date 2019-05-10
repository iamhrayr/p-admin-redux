import React from 'react';
import { Tag, Avatar, Button, Switch } from 'antd';
import { Link, Redirect } from 'react-router-dom';

export default props => [
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    width: 80,
    render: thumbnail => <Avatar shape="square" size="large" src={thumbnail.url} />,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    // render: (text) => <Link to="/">{text}</Link>
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: category => category.name,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags =>
      tags.map(tag => (
        <Tag color="green" key={tag}>
          {tag.toUpperCase()}
        </Tag>
      )),
  },
  {
    title: 'Publishd',
    dataIndex: 'published',
    key: 'published',
    render: (isPublished, row) => (
      <Switch
        checkedChildren="on"
        unCheckedChildren="off"
        defaultChecked={isPublished}
        onChange={() => props.editWork({ id: row._id, input: { published: !isPublished } })}
      />
    ),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (col, row) => (
      <Button type="danger" shape="circle" icon="delete" onClick={() => props.deleteWork({ id: row._id })} />
    ),
  },
];
