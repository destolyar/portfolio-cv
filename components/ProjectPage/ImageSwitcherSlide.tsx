import Image from 'next/image'

export const ImageSwitcherSlide = ({ imagePath }: any) => {
    return(
        <div style={{height: "100%", width: "100%"}}>
            <img src={imagePath}/>
        </div>
    )
}