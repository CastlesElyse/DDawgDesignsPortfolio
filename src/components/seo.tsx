import { Helmet } from "react-helmet-async"
import seo from "../assets/content/seo.json";

const SEO = (props: any) => {

    const page = props.page;

    const seoData = seo.filter((item) => item.page === page)[0]

    return (
        <Helmet>
            <title>{seoData.title}</title>
            <meta name='description' content={seoData.description} />
            <meta name="keywords" content={seoData.keywords} />
        </Helmet>
    )
}

export default SEO