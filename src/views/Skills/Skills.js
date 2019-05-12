import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { skillActions, skillTypes, skillSelectors } from 'Store/skill';
import statusSelector from 'Store/utils/statusSelector';

// components
import SkillsList from './SkillsList';

const Skills = ({
  fetchSkills,
  skills,
  editSkill,
  addEmptySkill,
  publishSkill,
  fetchSkillsStatus: { loading, error, done },
}) => {
  useEffect(() => {
    if (!done) {
      fetchSkills();
    }
  }, []);

  return (
    <div>
      <h1>Skills</h1>
      {loading && 'Loading...'}
      {error && `Error! ${error.message}`}
      {done && (
        <SkillsList skills={skills} editSkill={editSkill} addEmptySkill={addEmptySkill} publishSkill={publishSkill} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  skills: skillSelectors.getSkillList(state),
  fetchSkillsStatus: statusSelector(state, skillTypes.FETCH_SKILLS),
});

export default connect(
  mapStateToProps,
  {
    fetchSkills: skillActions.fetchSkills,
    editSkill: skillActions.editSkill,
    addEmptySkill: skillActions.addEmptySkill,
    publishSkill: skillActions.publishSkill,
  },
)(React.memo(Skills));
