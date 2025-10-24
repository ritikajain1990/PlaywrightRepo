export class BasePage {
    constructor(page) {
        this.page = page;

    }
    async handleAlerts(page, action, alerttext = '') {
        page.once('dialog', async (dialog) => {
            if (action == "accept") {
                await dialog.accept(alerttext)
            }
            else {
                await dialog.dismiss();
            }

        })
    }

    async navigateToNewPage(context, clickAction) {

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            clickAction() // should trigger opening a new page
        ])

        return newPage;
    }
}