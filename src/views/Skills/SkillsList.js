import React from 'react';
import { Button, List } from 'antd';

// components
import SkillItem from './SkillItem';

// export default ({ move, swap, push, insert, form }) => (
const SkillsList = ({ skills, editSkill }) => (
  <>
    <List
      bordered={false}
      dataSource={skills}
      renderItem={(item, index) => <SkillItem skillData={item} editSkill={editSkill} />}
    />
    <Button
      type="primary"
      icon="plus-circle"
      // onClick={() => props.push({ name: "", percent: "", color: "red" })}
    >
      Add new Skill
    </Button>
  </>
);

export default React.memo(SkillsList);
