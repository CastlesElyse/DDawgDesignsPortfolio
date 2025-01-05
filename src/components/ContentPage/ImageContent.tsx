import { ImageProps } from "./ContentTypes"

export const ImageContent = (imageData: ImageProps) => {
    return (
        <>
            <div id="magazine-img">
                <img src={require(`../../assets/images/${imageData.imgLarge}`)} alt={imageData.alt} />
            </div>
        </>
    )
}