/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  CheckBox,
  ButtonGroup,
  Icon,
  ListItem,
  Avatar,
  FAB,
  Dialog
} from '@rneui/themed';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Stack,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [selectedIndex, setSelectedIndex] = React.useState([]);

  const [visible, setVisible] = React.useState(true);

  const [visible1, setVisible1] = React.useState(false);

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <View>
      <Text>hello world</Text>
      <Button
        color="secondary"
        title="点击"
        onPress={() => {
          console.log('121212');
        }}></Button>
      <CheckBox checked title="Label" />
      <CheckBox checked disabled title="Label" />
      <ButtonGroup
        selectMultiple
        buttonStyle={{padding: 10}}
        selectedButtonStyle={{backgroundColor: '#e2e2e2'}}
        buttons={[
          <Icon name="format-bold" />,
          <Icon name="format-italic" />,
          <Icon name="format-underline" />,
        ]}
        selectedIndexes={selectedIndex}
        onPress={setSelectedIndex}
      />

      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
        />
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          icon={{
            name: 'person-outline',
            type: 'material',
            size: 26,
          }}
          containerStyle={{backgroundColor: '#c2c2c2'}}
        />
        <ListItem.Content>
          <ListItem.Title>Alba King</ListItem.Title>
          <ListItem.Subtitle>Vice President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <Avatar rounded title="A" containerStyle={{backgroundColor: 'grey'}} />
        <ListItem.Content>
          <ListItem.Title>Adam Eva</ListItem.Title>
          <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          flexGrow: 1,
        }}>
        <Text style={{color: '#397af8', paddingVertical: 10}}>Small Size</Text>
        <FAB
          loading
          visible={visible}
          icon={{name: 'add', color: 'white'}}
          size="small"
        />
        <Text style={{color: '#397af8', paddingVertical: 10}}>Large Size</Text>
        <FAB
          visible={visible}
          icon={{name: 'add', color: 'white'}}
          color="green"
        />
        <Text style={{color: '#397af8', paddingVertical: 10}}>
          Primary Color
        </Text>
        <FAB
          visible={visible}
          title="Navigate"
          upperCase
          icon={{name: 'place', color: 'white'}}
        />

        <Text style={{color: '#397af8', paddingVertical: 10}}>Disabled</Text>

        <FAB
          visible={visible}
          disabled
          title="Extended"
          icon={{
            name: 'place',
            color: 'white',
          }}
        />
        <FAB
          visible={visible}
          onPress={() => setVisible(!visible)}
          placement="right"
          title="Hide"
          icon={{name: 'delete', color: 'white'}}
          color="red"
        />
        <FAB
          visible={!visible}
          onPress={() => setVisible(!visible)}
          placement="left"
          title="Show"
          icon={{name: 'edit', color: 'white'}}
          color="green"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
