import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react'


export default function ChartRoom() {
    const navigation = useNavigation();
    return (
        <View>
            <ListItem bottomDivider onPress={() => {navigation.navigate('ChatMessage')}}>
                <Avatar
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                />
                <ListItem.Content>
                    <ListItem.Title>Aaron</ListItem.Title>
                    <ListItem.Subtitle>Last Message</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                  <ListItem.Title right></ListItem.Title>
                  <ListItem.Subtitle right>12:17 am</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => {navigation.navigate('Audio')}}>
                <Avatar
                    rounded
                    source={{ uri: "https://img2.baidu.com/it/u=440922581,501700109&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400" }}
                />
                <ListItem.Content>
                    <ListItem.Title>Brandon</ListItem.Title>
                    <ListItem.Subtitle>Last Message.......</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                  <ListItem.Title right></ListItem.Title>
                  <ListItem.Subtitle right>8:23 pm</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => {navigation.navigate('EditInfo')}}>
                <Avatar 
                    rounded
                    source={{ uri: "https://pic.imeitou.com/uploads/allimg/221021/8-221021100443.jpg" }} />
                <ListItem.Content>
                    <ListItem.Title>Coty</ListItem.Title>
                    <ListItem.Subtitle>Last Message.......</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                  <ListItem.Title right></ListItem.Title>
                  <ListItem.Subtitle right>1:47 pm</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => {navigation.navigate('ChartRecords')}}>
                <Avatar 
                    rounded
                    source={{ uri: "https://www.yxwoo.com/uploads/images/20210108/20210108133202_62921.jpg" }} />
                <ListItem.Content>
                    <ListItem.Title>Ada</ListItem.Title>
                    <ListItem.Subtitle>Last Message.......</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content right>
                  <ListItem.Title right></ListItem.Title>
                  <ListItem.Subtitle right>9:51 pm</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}

const styles = StyleSheet.create({})