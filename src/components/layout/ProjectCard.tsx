import Image from "next/image"

interface ProjectCardProps {
    url: string
    srcImg: string
    titleProject: string
    descriptionProject: string
    mobileAvaible?: boolean
}

export function ProjectCard({ url, srcImg, titleProject, descriptionProject, mobileAvaible }: ProjectCardProps) {
    return (
        <div className="grid grid-cols-1 px-6 py-4 text-slate-600 group">
            <a href={url} target="_blank">
                <Image
                    src={srcImg}
                    alt={titleProject}
                    width={384}
                    height={176}
                    className="w-full max-w-md h-44 sm:h-56 object-cover cursor-pointer rounded-lg transition-transform duration-300 group-hover:scale-105"
                    priority
                />
            </a>

            <h4 className="font-bold pt-4 pb-2">{titleProject}</h4>

            <p className="pb-2">{descriptionProject}</p>

            {mobileAvaible ? <p>Disponível para Mobile</p> : null}
        </div>
    )
}
