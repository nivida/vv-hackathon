import * as React from "react";
import {Button, Card, Comment, List, Tooltip} from "antd";
import moment from "moment";
import PhoneOutlined from "@ant-design/icons/es/icons/PhoneOutlined";

const TeacherComments = (props) => {
  const data = [
    {
      actions: [],
      author: 'Mr. Müller',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
          enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the
          bliss of souls like mine.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(1, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
        </Tooltip>
      ),
    },
    {
      actions: [],
      author: 'Mr. Müller',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
          a large language ocean. A small river named Duden flows by their place and supplies it with the necessary.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(2, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
        </Tooltip>
      ),
    },
  ];

  return (
    <Card style={{marginTop: '50px'}}>
      <div style={{float: 'right', marginTop: '-5px'}}>
        <Tooltip title="Request Call">
          <Button type="primary" shape="circle" icon={<PhoneOutlined />} size="large" />
        </Tooltip>
      </div>
      <List
        style={{marginTop: '20px'}}
        className="comment-list"
        header={`Teacher Feedback`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
    </Card>
  )
};

export default TeacherComments;