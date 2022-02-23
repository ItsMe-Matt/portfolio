import Image from "next/image";

export default function ImageSrc({
    src="/CompassPlus/test1.png",
    type="1",
    
}){
    console.log(type)
    if (type === "1") {
        return <Image
            src={src}
            height={1920}
            width={1080}
            layout="responsive"
     />
    } else if (type === "2") {
        return <Image
            src={src}
            height={1440}
            width={1080}
            layout="responsive"
     />
    }
    

}