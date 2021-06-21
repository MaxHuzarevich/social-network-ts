import {ActionsTypes, postsType, profilePageType} from "./store";

export type profilePropsType = {
    profilePage: profilePageType,
    posts: Array<postsType>,
    dispatch: (action: ActionsTypes) => void,
    messageForNewPost: string
}

export const profileReducer = (state:profilePageType,action:ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': //функция для создания нового поста
            const newPost: postsType = {                                        //отправляем
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost);   //profilePage приходит в state
            state.messageForNewPost = '';
            return state;
        case 'CHANGE-NEW-TEXT': //впечатываем
            state.messageForNewPost = action.newText;  //profilePage приходит в state
            return state;
        default:                                       //default line
            return state;
    }
}
export const addPostAC =
    (postText: string) => {
        return {
            type: 'ADD-POST',
            postText: postText
        } as const
    }
export const newTextChangeHandlerAC =
    (newText: string) => {
        return {
            type: 'CHANGE-NEW-TEXT',
            newText: newText
        } as const
    }