import Image from 'next/image';

interface DevImgProps {
    containerStyles: string;
    imgSrc: string;
}

export default function DevImg({containerStyles, imgSrc}: DevImgProps) {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority alt='photo de profil'/>
        </div>
    );
}
