export interface StateContextType {
    activeMenu: boolean;
    setactiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    screenSize: any; // Change 'any' to the appropriate type
    setscreenSize: React.Dispatch<React.SetStateAction<any>>; // Change 'any' to the appropriate type
}
