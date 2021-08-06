import Image from 'next/image'

export const SiteBanner = () => {
    return (
        <div className="container">
            <Image
                src="/images/sb_banner.jpg"
                width={1600}
                height={1100}
                alt="Shawn Bahramy"
            />
        </div>
    )
}

export default SiteBanner