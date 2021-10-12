
function onHomePage() {
    return CardService.newCardBuilder()
        .addSection(createHomePageSection())
        .build()
}

function createHomePageSection() {
    var storedQueries = createHomePageWidget()
    var newQuery = createNewQuery()

    return CardService.newCardSection()
        .addWidget(storedQueries)
        .addWidget(newQuery)
}

function createHomePageWidget() {
    return CardService.newGrid()
        .setNumColumns(2)
        .addItem(CardService.newGridItem()
            .setTitle("Search query")
        )
        .addItem(CardService.newGridItem()
            .setTitle("Action")
        )
    // return CardService.newTextParagraph()
    // .setText("Hello World")
}

function createNewQuery() {
    return CardService.newTextInput()
        .setHint("Your search query here")
        .setMultiline(false)
        .setFieldName("query")
}

function addQuery() {
    return CardService.newAction()
        .setFunctionName(updateQueriesStorage())
}
