import type { RepoType } from './resolveRepoType';
export declare const editLinkPatterns: Record<Exclude<RepoType, null>, string>;
export declare const resolveEditLink: ({ docsRepo, docsBranch, docsDir, path, editLinkPattern, }: {
    docsRepo: string;
    docsBranch: string;
    docsDir: string;
    path: string;
    editLinkPattern?: string | undefined;
}) => string | null;
