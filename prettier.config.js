// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    // @ts-expect-error - This is a valid config
    ...require('eslint-config-pixel/prettier/base'),
    plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
    importOrder: ['^react$', '^next$', '<THIRD_PARTY_MODULES>', '', '^~(.*)$'],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.0',
};
