import * as React from "react";
import {Button} from "antd";
import ListSort from "../../shared/ListSort";

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
    <div>
      <h4>{exercise.question}</h4>
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
      {/*<SortableList items={exercise.choices} useDragHandle/>*/}
      <div style={{marginTop: 30}}>
        <Button type={'primary'}>Submit</Button>
      </div>
    </div>
  )
};

export default SortingExercise;
