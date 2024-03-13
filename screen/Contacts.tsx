import { StyleSheet, Text, View } from 'react-native'
import { List, MD3Colors, Divider, Avatar } from 'react-native-paper';
import React from 'react'

export default function ChartRoom() {
    return (
        <View>
            <List.Section style={{ backgroundColor: "white", marginVertical: 0}}>
                <List.Subheader style={{ backgroundColor: "#f2f2f2"}}>A</List.Subheader>
                <List.Item title="Aaron" left={() => <Avatar.Image style={{marginLeft: 10}} size={35} source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg"}} />} />
                <List.Item title="Ada" left={() => <Avatar.Image style={{marginLeft: 10}} size={35} source={{ uri: "https://www.yxwoo.com/uploads/images/20210108/20210108133202_62921.jpg"}} />} />
                <List.Item title="Alan" left={() => <Avatar.Image style={{marginLeft: 10}} size={35} source={{ uri: "https://img1.baidu.com/it/u=1374839552,1542830804&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"}} />} />
            </List.Section>
            <List.Section style={{ backgroundColor: "white", marginVertical: 0}}>
                <List.Subheader style={{ backgroundColor: "#f2f2f2"}}>B</List.Subheader>
                <List.Item title="Brandon" left={() => <Avatar.Image style={{marginLeft: 10}} size={35} source={{ uri: "https://img2.baidu.com/it/u=440922581,501700109&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"}} />} />
                <List.Item title="Blake" left={() => <Avatar.Image style={{marginLeft: 10}} size={35} source={{ uri: "https://img0.baidu.com/it/u=1115952691,2512428087&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=380"}} />} />
            </List.Section>
            <List.Section style={{ backgroundColor: "white", marginVertical: 0}}>
                <List.Subheader style={{ backgroundColor: "#f2f2f2"}}>C</List.Subheader>
                <List.Item title="Coty" left={() => <Avatar.Image style={{marginLeft: 10}} size={35} source={{ uri: "https://pic.imeitou.com/uploads/allimg/221021/8-221021100443.jpg"}} />} />
                <List.Item title="Calan" left={() => <Avatar.Image style={{marginLeft: 10}} size={35} source={{ uri: "https://img2.baidu.com/it/u=2772867770,3568435507&fm=253&fmt=auto&app=138&f=JPEG?w=420&h=420"}} />} />
            </List.Section>
        </View>
    )
}

const styles = StyleSheet.create({})