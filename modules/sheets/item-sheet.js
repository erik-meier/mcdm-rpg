export default class McdmRpgItemSheet extends ItemSheet {
    
    static get defaultOptions () {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["mcdm-rpg", "sheet", "item"]
        });
    }
    
    /* *
    * Get the html template based on the item type
    */
    get template() {
        return `systems/mcdm-rpg/templates/sheets/${this.item.type}-sheet.html`;
    }
}