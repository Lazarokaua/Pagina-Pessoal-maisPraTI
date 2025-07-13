import { StaticImageData } from "next/image"


interface ProjectCardProps {
    url: string
    srcImg: string
    titleProject: string
    descriptionProject: string
    mobileAvaible?: boolean
}

export function ProjectCard({url, srcImg, titleProject, descriptionProject, mobileAvaible}: ProjectCardProps) {
    return (
        <div className="grid grid-cols-1 px-6 py-4 text-slate-600">
            <a href={url} target="_blank"><img src={srcImg}  className="w-96 h-44 cursor-pointer rounded-lg transition-all duration-300"/></a>

            <h4 className="font-bold pt-4 pb-2">{titleProject}</h4>

            <p className="pb-2">{descriptionProject}</p>

            {mobileAvaible ? <p>Disponível para Mobile</p> : null}
        </div>
    )
}
