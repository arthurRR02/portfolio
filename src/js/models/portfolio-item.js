class PortfolioItem {
    constructor(description, featureTitles, featureDescriptions) {
        this.description = description;
        this.featureTitles = featureTitles;
        this.featureDescriptions = featureDescriptions;
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
                ]
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
                ]
            )
        ];
    }
}

export default PortfolioItem;