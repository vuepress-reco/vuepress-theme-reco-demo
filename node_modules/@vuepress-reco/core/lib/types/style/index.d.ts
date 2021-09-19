export declare type ClassificationPageOptions = {
    type: 'frontmatter';
    frontmatterKey: string;
    path: string;
    layout: string;
    pagination?: number;
};
export declare type OrdinaryPageOptions = {
    path: string;
    layout: string;
};
export declare type PageOptions = ClassificationPageOptions | OrdinaryPageOptions;
export declare type StylePageOptions = Array<PageOptions>;
export declare type StyleOptions = {
    pages: StylePageOptions;
    onInitialized: (app: any) => void;
    clientAppEnhanceFiles: string;
    clientAppSetupFiles: string;
    plugins: any;
};
