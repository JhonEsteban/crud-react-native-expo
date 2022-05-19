import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TaskForm = () => {
  const [task, setTask] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChange={(value) => setTask(value)}
        value={task}
        placeholder='Escribir tarea'
      />

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Crear tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  input: {
    marginTop: 16,
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 5,
  },
  createButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#0c1fd6',
    borderRadius: 5,
  },
  createButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
