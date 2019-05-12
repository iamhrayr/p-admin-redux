import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { skillActions, skillTypes, skillSelectors } from 'Store/skill';
import statusSelector from 'Store/utils/statusSelector';

// components
import SkillsList from './SkillsList';

const Skills = ({ fetchSkills, skills, fetchSkillsStatus: { loading, error, done } }) => {
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
      {done && <SkillsList skills={skills} />}
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
  },
)(React.memo(Skills));
