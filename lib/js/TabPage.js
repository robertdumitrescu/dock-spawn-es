import { TabHandle } from "./TabHandle.js";
import { PanelContainer } from "./PanelContainer.js";
export class TabPage {
    constructor(host, container) {
        if (arguments.length === 0) {
            return;
        }
        this.selected = false;
        this.host = host;
        this.container = container;
        this.handle = new TabHandle(this);
        this.containerElement = container.containerElement;
        if (container instanceof PanelContainer) {
            this.panel = container;
            this.panel.onTitleChanged = this.onTitleChanged.bind(this);
        }
    }
    onTitleChanged( /*sender, title*/) {
        this.handle.updateTitle();
    }
    destroy() {
        this.handle.destroy();
        if (this.container instanceof PanelContainer) {
            let panel = this.container;
            delete panel.onTitleChanged;
        }
    }
    onSelected() {
        this.host.onTabPageSelected(this);
        if (this.container instanceof PanelContainer) {
            let panel = this.container;
            panel.dockManager.notifyOnTabChange(this);
        }
    }
    setSelected(flag) {
        this.selected = flag;
        this.handle.setSelected(flag);
        if (!this._initContent)
            this.host.contentElement.appendChild(this.containerElement);
        this._initContent = true;
        if (this.selected) {
            this.containerElement.style.display = 'block';
            // force a resize again
            let width = this.host.contentElement.clientWidth;
            let height = this.host.contentElement.clientHeight;
            this.container.resize(width, height);
            this.host.dockManager.activePanel = this.container;
        }
        else {
            this.containerElement.style.display = 'none';
        }
    }
    resize(width, height) {
        this.container.resize(width, height);
    }
}
//# sourceMappingURL=TabPage.js.map