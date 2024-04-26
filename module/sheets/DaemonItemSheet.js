export class DaemonItemSheet extends ItemSheet {
  /** @override */
  get template() {
    const path = "systems/daemon/templates/sheets";
    return `${path}/item-${this.item.type}-sheet.hbs`;
  }

  getData() {
    const data = super.getData();

    data.config = CONFIG.daemon;

    return data;
  }
}
