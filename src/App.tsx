import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppPropsType} from './redux/state';


const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={state.dialogsPage}/>}/>

                    <Route path='/profile' render={() => <Profile
                        posts={state.profilePage.posts}
                        message={state.profilePage.messageForNewPost}
                        addPostCallback={props.store.addPost.bind(props.store)}
                        changeNewTextCallback={props.store.changeNewText.bind(props.store)}
                        profilePage={state.profilePage}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
