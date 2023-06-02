import { View, Text } from 'react-native';

import styles from './about.style';

const About = ({ info, posted }) => {
  // Format the 'posted' prop into the local date
  const formattedDate = new Date(posted).toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      <Text>
        Posted on:
        {formattedDate}
      </Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
