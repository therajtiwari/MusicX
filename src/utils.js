import { v4 as uuidv4 } from 'uuid';


function all_songs(){

    return[
        {
    name:"Let Me Down Slowly",
    cover:"./assets/images/covers/narrated_for_you",
    artist:"Alec Benjamin",
    audio:",/assets/song_mp3/let_me_down_slowly.mp3",
    color:["#F8A56E","#99AFD4"],
    id:uuidv4(),
    active=true,

},
{ name:"fsf",
cover:"./assets/images/covers/encore",
artist:"Eminem",
audio:"./assets/song_mp3/mockingbird",
color:["#094567","##020605"],
id:uuidv4(),
active=true,

},
    ]
}