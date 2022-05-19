import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Text } from 'react-native';

import TaskForm from '../components/TaskForm';
import TaskButtons from '../components/TaskButtons';

import useTaskForm from '../hooks/useTaskForm';
import EmptyTaskList from '../components/EmptyTaskList';

const TaskListScreen = () => {
  const { isActive, handleIsActive } = useTaskForm();
  const [task, setTask] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.containerText}>Lista de Tareas</Text>

      {isActive && <TaskForm />}

      {!isActive && task.length === 0 && <EmptyTaskList />}

      <TaskButtons isActive={isActive} handleIsActive={handleIsActive} />
    </SafeAreaView>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  containerText: {
    fontSize: 20,
    marginTop: 10,
  },
});
