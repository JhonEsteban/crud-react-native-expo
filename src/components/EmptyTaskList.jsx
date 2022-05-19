import { StyleSheet, Text, View } from 'react-native';

const EmptyTaskList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No hay tareas creadas!</Text>
    </View>
  );
};

export default EmptyTaskList;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 20,
    backgroundColor: '#d60c0c',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
