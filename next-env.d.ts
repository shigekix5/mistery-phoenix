/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare namespace JSX {
    interface IntrinsicElements {
        // mongatariで使用するタグ
        'visual-novel': any,
        'language-selection-screen': any,
        'loading-screen': any,
        'main-screen': any,
        'main-menu': any,
        'game-screen': any,
        'dialog-log': any,
        'text-box': any,
        'quick-menu': any,
        'gallery-screen': any,
        'credits-screen': any,
        'load-screen': any,
        'save-screen': any,
        'settings-screen': any,
        'help-screen': any
    }
};

declare module '@monogatari/core';