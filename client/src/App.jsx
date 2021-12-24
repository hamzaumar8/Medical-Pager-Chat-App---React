import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer ,ChannelListContainer, Auth} from './components/index';
import './App.css';


const apiKey = "paadqtuv2tvx";
const client =  StreamChat.getInstance(apiKey);

const authToken = false;


const App = () => {
    if(!authToken) return <Auth />
    return (
        <div className='app__wrapper'>
            <Chat client={client} theme="team light">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    )
}

export default App;
