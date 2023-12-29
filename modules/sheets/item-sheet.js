export default class McdmRpgItemSheet extends ItemSheet {
    /* *
    * Get the html template based on the item type
    */
    get template() {
        return `systems/mcdm-rpg/templates/sheets/${this.item.type}-sheet.html`;
    }

    /* *
    * Override getData method to also get game-specific config
    */
    getData() {
        const data = super.getData();
        data.config = CONFIG.game;
        return data;
    }
}