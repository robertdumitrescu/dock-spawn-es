import { TabPage } from "./TabPage.js";
import { UndockInitiator } from "./UndockInitiator.js";
import { EventHandler } from "./EventHandler.js";
/**
 * A tab handle represents the tab button on the tab strip
 */
export declare class TabHandle {
    parent: TabPage;
    elementBase: HTMLDivElement;
    elementText: HTMLDivElement;
    elementCloseButton: HTMLDivElement;
    undockInitiator: UndockInitiator;
    mouseClickHandler: EventHandler;
    mouseDownHandler: EventHandler;
    closeButtonHandler: EventHandler;
    auxClickHandler: EventHandler;
    contextMenuHandler: EventHandler;
    moveThreshold: number;
    zIndexCounter: number;
    mouseMoveHandler: EventHandler;
    touchMoveHandler: EventHandler;
    mouseUpHandler: EventHandler;
    touchUpHandler: EventHandler;
    stargDragPosition: any;
    dragged: boolean;
    eventListeners: any[];
    undockListener: {
        onDockEnabled: (e: any) => void;
        onHideCloseButton: (e: any) => void;
    };
    prev: number;
    current: number;
    direction: number;
    _ctxMenu: HTMLDivElement;
    _removeCtxMenuBound: any;
    constructor(parent: TabPage);
    addListener(listener: any): void;
    removeListener(listener: any): void;
    undockEnabled(state: boolean): void;
    oncontextMenuClicked(e: MouseEvent): void;
    _removeCtxMenu(): void;
    onMouseDown(e: any): void;
    onMouseUp(): void;
    generateMoveTabEvent(event: any, pos: any): void;
    moveTabEvent(that: any, state: any): void;
    onMouseMove(e: any): void;
    hideCloseButton(state: any): void;
    updateTitle(): void;
    destroy(): void;
    _performUndock(e: any, dragOffset: any): import("./Dialog.js").Dialog;
    onMouseClicked(e: any): void;
    onCloseButtonClicked(e: any): void;
    setSelected(isSelected: boolean): void;
    setZIndex(zIndex: number): void;
    _bringToFront(element: HTMLElement): void;
}
