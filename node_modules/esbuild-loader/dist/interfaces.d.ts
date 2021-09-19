import { transform, TransformOptions } from 'esbuild';
import { Except } from 'type-fest';
declare type Filter = string | RegExp;
declare type Implementation = {
    transform: typeof transform;
};
declare type LoaderOptions = Except<TransformOptions, 'sourcemap' | 'sourcefile'> & {
    /** Pass a custom esbuild implementation */
    implementation?: Implementation;
};
declare type MinifyPluginOptions = Except<TransformOptions, 'sourcefile'> & {
    include?: Filter | Filter[];
    exclude?: Filter | Filter[];
    css?: boolean;
    /** Pass a custom esbuild implementation */
    implementation?: Implementation;
};
export { LoaderOptions, MinifyPluginOptions, };
