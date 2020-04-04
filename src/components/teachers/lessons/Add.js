import {observer} from "mobx-react-lite";
import * as React from "react";
import LessonForm from "./LessonForm";
import {StoreContext} from "../../../repositories/rootRepo";
import {useContext} from "react";

const Add = async () => {
  const store = useContext(StoreContext);
  const [assignments, setAssignments] = useState(null);
  const [students, setStudents] = useState(null);

  useEffect(() => {
    store.assignmentRepo.getAll().then(setAssignments);
    store.userRepo.getAllStudents().then(setStudents);
  }, []);

  const handleSubmit = () => {
    // TODO: Save: store.lessonRepository
  };

  return (
    <LessonForm onSubmit={handleSubmit} assignments={assignments} students={students} />
  )
};

export default observer(Add);