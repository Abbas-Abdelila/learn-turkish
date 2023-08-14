import NextImage from 'next/image'

interface ImageProps {
    width: number
    height: number
    alt: string
    className?: string
    src: string
}

export const Image = ({width, height, alt, className, src} : ImageProps) => {
  return <NextImage src={src} height={height} alt={alt} className={className} />
}

export default Image