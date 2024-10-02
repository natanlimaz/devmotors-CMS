import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";
import { Metadata } from "next";
import { Content } from "./components/content";
import styles from "./styles.module.scss";
import { Suspense } from "react";
import { LoadingPost } from "./components/loading";

export async function generateMetadata({ params: { slug } }: {
    params: { slug: string }
}): Promise<Metadata> {

    try {

        const { objects }: PostProps = await getItemBySlug(slug)
        .catch(() => {
            return  {
                title: "DevMotors - Sua oficina especializada!",
                description: "Oficina para contratação de serviços em veículos",
            }
        });

        return {
            title: `DevMotors - ${objects[0].title}`,
            description: `${objects[0].metadata.description.text}`,
            openGraph: {
                title: `DevMotors - ${objects[0].title}`,
                images: [`${objects[0].metadata.banner.url}`]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true
                }
            }
        }

    }
    catch(error) {
        return  {
            title: "DevMotors - Sua oficina especializada!",
            description: "Oficina para contratação de serviços em veículos",
        }
    }

    return {

    }
}

export default async function Post({ params: { slug } }: {
    params: { slug: string }
}) {

    return (
        <>  
            <Suspense fallback={<LoadingPost />}>
                <Content slug={slug} />
            </Suspense>
        </>
    );
}