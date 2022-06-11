import type {
    GetStaticPathsResult,
    GetStaticPropsContext,
    GetStaticPropsResult,
} from 'next'

type PageParams = {
   uuid: string
}

type ContentPageProps = {
   title: string
   description: string
}

export default const AllChamps = ({ title, description }: ServicePageProps): JSX.Element => {
    return (
        <>
             <h1>{title}</h1>
             <p>{description}</p>
        </>
    )
}

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<PageParams>): Promise<
    GetStaticPropsResult<ContentPageProps>
> => {
    const { title, description } = await fetch(".../entity", { uuid: params.uuid })
    return {
        props: {
            title,
            description,
        },
    }
}

export const getStaticPaths = async ({}): Promise<
    GetStaticPathsResult<PageParams>
> => {
    return {
        paths: { params: { uuid: "54b659a1-3f20-4440-90b5-9107bd62b5ca" }},
        fallback: false,
    }
}
