import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar, Icon, Divider, } from '@rneui/themed';
import React from 'react'

export default function ChartRoom() {
    return (
        <View>
            <ListItem style={{ marginTop: 20}}
            >
                <Avatar
                    size={70}
                    source={{ uri: "https://img0.baidu.com/it/u=3141797936,2644688093&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" }}
                />
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: "bold", marginBottom: 10 }}>
                        Skybiubiubiu
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        userID: 1321212121
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron size={40} />
            </ListItem>

            <Divider width={20} color="#f2f2f2" />
            <ListItem bottomDivider>
                <Icon name="inbox" type="material-community" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>修改个人信息</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={25}/>
            </ListItem>
            <Divider width={10} color="#f2f2f2" />
            <ListItem bottomDivider>
                <Icon name="alert-octagon" type="material-community" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>公告</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={25}/>
            </ListItem>
            <ListItem bottomDivider>
                <Icon name="trash-can-outline" type="material-community" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>清除缓存</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={25}/>
            </ListItem>
            <ListItem bottomDivider>
                <Icon name="brightness-5" type="material-community" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>设置</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={25}/>
            </ListItem>
        </View>
    )
}

const styles = StyleSheet.create({})