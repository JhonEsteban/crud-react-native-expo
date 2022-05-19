import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const TaskButtons = ({ isActive, handleIsActive }) => {
  return (
    <View style={styles.buttons}>
      {isActive && (
        <TouchableOpacity style={styles.removeButton} onPress={handleIsActive}>
          <Text style={styles.removeButtonText}>-</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.addButton} onPress={handleIsActive}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskButtons;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    position: 'absolute',
    top: screenHeight - 85,
    right: 10,
  },
  addButton: {
    width: 60,
    height: 60,

    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 25,
  },
  removeButton: {
    width: 60,
    height: 60,
    backgroundColor: '#d60c0c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 30,
  },
});
