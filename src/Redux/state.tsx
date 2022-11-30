import React from 'react';
import {v1} from "uuid";


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}

export type ProfilePageType = {
    postData: PostDataType[]
}

export type dialogsPageType = {
    dialogData: DialogDataType[]
    messageData: MessageDataType[]
}

export type PostDataType = {
    id: string
    message: string
    like: number
}
export type DialogDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: string
    message: string
}

export let state:StateType = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hi', like: 1},
            {id: v1(), message: 'How', like: 2},
            {id: v1(), message: 'Are you here?', like: 2},
            {id: v1(), message: 'Hiddd', like: 5},
            {id: v1(), message: 'ddd', like: 4},
            {id: v1(), message: 'cdcdsc', like: 3},
            {id: v1(), message: 'dcad', like: 65},
            {id: v1(), message: 'acad', like: 0},
        ]
    },
    dialogsPage: {
        dialogData: [
            {id: v1(), name:"Alex", },
            {id: v1(), name:"Margo", },
            {id: v1(), name:"Sko", },
            {id: v1(), name:"Mako", },
            {id: v1(), name:"George", },
            {id: v1(), name:"Max", },
        ],
        messageData:[
            {id: v1(), message: 'Hieee'},
            {id: v1(), message: 'dsde'},
            {id: v1(), message: 'wdwedwed'},
            {id: v1(), message: 'dedewd'},
            {id: v1(), message: 'dwwd'},
            {id: v1(), message: 'ewdw'},

        ]
    }
}




