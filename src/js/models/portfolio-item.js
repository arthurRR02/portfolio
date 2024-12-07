class PortfolioItem {
    constructor(madeWithLabel, description, featureTitles, featureDescriptions, imageName) {
        this.madeWithLabel = madeWithLabel
        this.description = description;
        this.featureTitles = featureTitles;
        this.featureDescriptions = featureDescriptions;
        this.imageName = imageName;
    }

    static getPortfolioItems() {
        return [
            new PortfolioItem(
                "portfolioFlutterWebsite",
                "portfolioElsoDescription",
                [
                    "portfolioElsoHomeTitle",
                    "portfolioElsoFaqTitle",
                    "portfolioElsoTestimonialTitle",
                    "portfolioElsoTextsTitle"
                ],
                [
                    "portfolioElsoHomeDescription",
                    "portfolioElsoFaqDescription",
                    "portfolioElsoTestimonialsDescription",
                    "portfolioElsoTextsDescription"
                ],
                "elso_site"
            ),
            new PortfolioItem(
                "portfolioFlutterWebsite",
                "portfolioIndividuarDescription",
                [
                    "portfolioIndividuarMainPageTitle", 
                    "portfolioIndividuarLocationTitle",
                    "portfolioIndividuarFormTitle",
                    "portfolioIndividuarContactTitle"
                ],
                [
                    "portfolioIndividuarMainPageDescription",
                    "portfolioIndividuarLocationDescription",
                    "portfolioIndividuarFormDescription",
                    "portfolioIndividuarContactDescription",
                ],
                "individuar_site"
            ),
            new PortfolioItem(
                "mock",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum id culpa aliquam ullam molestias, dignissimos fugiat odit ad dicta est quam odio laboriosam natus asperiores eaque ipsam voluptatum aspernatur.",
                [
                    "Lorem",
                    "Lorem",
                    "Lorem",
                    "Lorem"
                ],
                [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum id culpa aliquam ullam molestias, dignissimos fugiat odit ad dicta est quam odio laboriosam natus asperiores eaque ipsam voluptatum aspernatur.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum id culpa aliquam ullam molestias, dignissimos fugiat odit ad dicta est quam odio laboriosam natus asperiores eaque ipsam voluptatum aspernatur.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum id culpa aliquam ullam molestias, dignissimos fugiat odit ad dicta est quam odio laboriosam natus asperiores eaque ipsam voluptatum aspernatur.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum id culpa aliquam ullam molestias, dignissimos fugiat odit ad dicta est quam odio laboriosam natus asperiores eaque ipsam voluptatum aspernatur."
                ],
                "portfolio_site"
            )
        ];
    }
}

export default PortfolioItem;