export default class McdmRpgItemSheet extends ItemSheet {
    get template() {
        return `systems/mcdm-rpg/templates/sheets/${this.item.type}-sheet.html`;
    }
}