class PortfolioItem {
    constructor(description, featureTitles, featureDescriptions, imageName) {
        this.description = description;
        this.featureTitles = featureTitles;
        this.featureDescriptions = featureDescriptions;
        this.imageName = imageName;
    }

    static getPortfolioItems() {
        return [
            new PortfolioItem(
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
            )
        ];
    }
}

export default PortfolioItem;