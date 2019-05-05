import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";

// queries & mutations
import ADD_WORK from "Graphql/work/addWork.gql";
import WORKS_QUERY from "Graphql/work/worksQuery.gql";

import AddEditWorkForm from "../shared/AddEditWorkForm";

export default () => (
  <Mutation
    mutation={ADD_WORK}
    update={(cache, { data: { addWork } }) => {
      const { works } = cache.readQuery({ query: WORKS_QUERY });

      cache.writeQuery({
        query: WORKS_QUERY,
        data: { works: [...works, addWork] }
      });
    }}
  >
    {(addWork, { loading }) => (
      <AddEditWorkForm onSubmit={addWork} onSubmitLoading={loading} />
    )}
  </Mutation>
);
