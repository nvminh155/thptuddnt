import { Text } from '@/components/ui/text';
import { StyleSheet } from 'react-native';



export default function NotFoundScreen() {
  return (
    <Text>
      nout found 
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
