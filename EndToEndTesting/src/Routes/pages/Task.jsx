import React, { useState } from "react";
import Header from "../../components/Header";
import TaskControl from "../../components/TaskControl";
import TaskList from "../../components/TaskList";
import Modal from "../../components/Modal";
import NewTask from "../../components/NewTask";
import "../../index.css";

const TaskPage = () => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [appliedFilter, setAppliedFilter] = useState("all");

  const displayedTasks = tasks.filter((task) => {
    if (appliedFilter === "all") {
      return true;
    }
    return task.category === appliedFilter;
  });

  function startAddTaskHandler() {
    setIsAddingTask(true);
  }

  function cancelAddTaskHandler() {
    setIsAddingTask(false);
  }

  function addTaskHandler(taskData) {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          id: Math.random().toString(),
          ...taskData,
        },
      ];
    });
    setIsAddingTask(false);
  }

  function setFilterHandler(category) {
    setAppliedFilter(category);
  }
  return (
    <div className="task-container">
      {isAddingTask && (
        <Modal onClose={cancelAddTaskHandler}>
          <NewTask onAddTask={addTaskHandler} onCancel={cancelAddTaskHandler} />
        </Modal>
      )}
      <Header />
      <div>
        <TaskControl
          onStartAddTask={startAddTaskHandler}
          onSetFilter={setFilterHandler}
        />
        <TaskList tasks={displayedTasks} />
      </div>
    </div>
  );
};
export { TaskPage };
