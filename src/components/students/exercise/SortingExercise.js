import * as React from "react";
import ListSort from "../../shared/ListSort";
import SubmittableExercise from "./shared/SubmittableExercise";

const SortingExercise = ({exercise}) => {
  const items = exercise.choices.map((item, i) => {
    return (
      <div key={i} className={`list-sort-demo-list`}>
        <div className={`list-sort-demo-text`}>
          <p>{item}</p>
        </div>
      </div>
    );
  });

  return (
    <SubmittableExercise exercise={exercise} title={exercise.question}>
      <div className={`list-sort-demo-wrapper`}>
        <div className={'list-sort-demo'}>
          <ListSort
            dragClassName="list-drag-selected"
            appearAnim={{animConfig: {marginTop: [5, 30], opacity: [1, 0]}}}
          >
            {items}
          </ListSort>
        </div>
      </div>
    </SubmittableExercise>
  )
};

export default SortingExercise;
