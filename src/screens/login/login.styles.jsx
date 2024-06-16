import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 20,
  },
  inputArea: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    backgroundColor: 'blue',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: 'black',
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});
