export class DaemonItemSheet extends ItemSheet {
  /** @override */
  get template() {
    const path = "systems/daemon/templates/sheets";
    return `${path}/item-${this.item.type}-sheet.hbs`;
  }
}
