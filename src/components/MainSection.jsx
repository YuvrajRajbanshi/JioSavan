import { useState, useEffect } from "react"
import axios from 'axios';
import AlbumItem from "./AlbumItem";
const MainSection = () => {
    const [albums, setAlbums] = useState([]);
    const [trending, setTrending] = useState([]);


    const getHomePageData = async () => {
        const res = await axios.get("https://saavn.me/modules?language=hindi")

        const { data } = res.data;
        console.log(data)



    };
    useEffect(() => {
        getHomePageData()
    }, [])
    return (
        <div>
            {
                // if we write 100 of props it is going to be dificult so we will use 
                // different method which can help us to improve out 
                // optimization of code that's it 
                // albums?.map((album) => <AlbumItem key={album.id} name={album.name} />)


                // here is the another method here we don't have to write 100 of props just ... that's it
                albums?.map((album) => <AlbumItem key={album.id} {...album} />)
            }

        </div>
    )
}

export default MainSection