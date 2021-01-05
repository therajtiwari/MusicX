import { v4 as uuidv4 } from 'uuid';


function all_songs(){

    return[
            {
            name:"Let Me Down Slowly",
            cover:"/assets/images/covers/narrated_for_you.jpg",
            artist:"Alec Benjamin",
            audio:"/assets/song_mp3/let_me_down_slowly.mp3",
            color:["#F8A56E","#99AFD4"],
            id:uuidv4(),
            active:true,

            },
            { name:"Mocking Bird",
            cover:"/assets/images/covers/encore.jpg",
            artist:"Eminem",
            audio:"/assets/song_mp3/mockingbird",
            color:["#094567","##020605"],
            id:uuidv4(),
            active:false,

            },
    ]
}

export default all_songs;