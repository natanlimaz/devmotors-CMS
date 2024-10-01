
export type HomeProps = {
    object: {
        slug: string;
        title: string;
        metadata: {
            banner: ImageProps;
            heading: string;
            cta_button: {
                title: string;
                url: string;
            };
            about: {
                description: string;
                banner: ImageProps;
            };
            services: ServiceProps[];
            contact: {
                email: string;
                phone: string;
                address: string;
                time: string;
            }
        };
    }
}

type ServiceProps = {
    image: ImageProps;
    description: string;
}

type ImageProps = {
    url: string;
    imgix_url: string;
}