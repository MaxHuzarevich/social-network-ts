import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {appPropsType} from './redux/state';


const App = (props: appPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={props.store.dialogsPage}/>}/>

                    <Route path='/profile' render={() => <Profile
                        // posts={state.profilePage.posts}                  //34
                        // message={state.profilePage.messageForNewPost}    //34
                        // addPostCallBack={addPost}
                        // changeNewTextCallback={newTextChangeHandler}
                        profilePage={props.store.profilePage}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
