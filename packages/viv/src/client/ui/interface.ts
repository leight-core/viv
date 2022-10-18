export interface IVisibleContext {
    readonly visible: boolean;

    setVisible(visible: boolean): void;

    show(): void;

    hide(): void;
}
