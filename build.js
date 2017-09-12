({
    baseUrl: '.',
    out: 'dist/TypeCheck.js',
    optimize: 'none',
    include: ["node_modules/almond/almond", "src/TypeCheck"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.TypeCheck = root.TypeCheck || {}; \n" +
        "\t \troot.TypeCheck = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/TypeCheck'); \n" +
        "}));"
    }
})