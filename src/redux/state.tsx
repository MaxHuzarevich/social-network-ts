type RootStateType = {
    profilePage:profilePageType,
    dialogsPage:messagesPageType,

}

type messagesPageType = {
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
}
type profilePageType = {
    posts: Array<postsType>,
}
type postsType = {
    id: number,
    message: string,
    count: number
}
type dialogsType = {
    id: number,
    name: string
}
type messagesType = {
    id: number,
    message: string
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', count: 15},
            {id: 2, message: 'My first post', count: 20},
            {id: 3, message: 'Blabla', count: 11},
            {id: 4, message: 'Dada', count: 12}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Svetlana'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ]
    }

}
export default state;