import React from 'react';
import { Button, List } from 'antd';
import uuidv4 from 'uuid/v4';

// components
import SkillItem from './SkillItem';

// export default ({ move, swap, push, insert, form }) => (
const SkillsList = ({ skills, editSkill, addEmptySkill, publishSkill }) => (
  <>
    <List
      bordered={false}
      dataSource={skills}
      renderItem={(item, index) => <SkillItem skillData={item} editSkill={editSkill} publishSkill={publishSkill} />}
    />
    <Button
      type="primary"
      icon="plus-circle"
      onClick={() => addEmptySkill({ localId: uuidv4(), name: '', percent: '', color: 'red', isNew: true })}
    >
      Add new Skill
    </Button>
  </>
);

export default React.memo(SkillsList);
