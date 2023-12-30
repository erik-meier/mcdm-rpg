export default class McdmRpgItemSheet extends ItemSheet {
    /* *
    * Get the html template based on the item type
    */
    get template() {
        return `systems/mcdm-rpg/templates/sheets/${this.item.type}-sheet.html`;
    }
}