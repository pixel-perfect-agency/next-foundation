module.exports = {
    bracketSpacing: true,
    bracketSameLine: true,
    singleQuote: true,
    trailingComma: 'all',
    arrowParens: 'avoid',
    tabWidth: 4,
    printWidth: 100,
    quoteProps: 'consistent',
    importOrder: ['^react$', '^next$', '<THIRD_PARTY_MODULES>', '^~(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};
