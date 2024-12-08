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
                "portfolioKotlinAndroidApp",
                "portfolioPokedexDescription",
                [
                    "portfolioPokedexHomeTitle",
                    "portfolioPokedexSearchTitle",
                    "portfolioPokedexDetailTitle"
                ],
                [
                    "portfolioPokedexHomeDescription",
                    "portfolioPokedexSearchDescription",
                    "portfolioPokedexDetailDescription"
                ],
                "pokedex"
            )
        ];
    }
}

export default PortfolioItem;