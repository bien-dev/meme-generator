import React, {useState, useEffect} from 'react'

export default function Meme() {
    const[memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = useState("")

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMeme(data.data.memes))
    })

    function randomImage() {
        const randomIndex = Math.floor((Math.random()*allMeme.length) + 1)
        const url = allMeme[randomIndex].url

        setMemeImage(pre => ({
            ...pre,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prev => ({
            ...prev,
            [name]: value
        }))
    }
        
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form__input"
                    name="topText"
                    onChange={handleChange}
                    value={memeImage.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form__input"
                    name="bottomText"
                    onChange={handleChange}
                    value={memeImage.bottomText}
                />
                <button className="form__button"
                    onClick={randomImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className='meme'>
                <img 
                    src={memeImage.randomImage} alt="meme image" 
                    className="main-image"
                />
                <h2 className='meme__text top'>{memeImage.topText}</h2>
                <h2 className='meme__text bottom'>{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}