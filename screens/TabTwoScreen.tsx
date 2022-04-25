import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const user = useSelector((state: any) => state?.core?.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User :</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.user}>Email : {user?.email}</Text>
      <Text style={styles.user}>Nickname : {user?.nickname}</Text>
      <Text style={styles.user}>Birthdate : {user?.birthdate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  user:{
    padding: 10,
    fontSize: 16,
    width: '80%',
  },
});
