const path = require("path");

module.exports = {
  template: (variables, { tpl }) => {
    return tpl`    
    ${variables.imports};

    ${variables.interfaces};

    export const ${variables.componentName} = (${variables.props}) => (
      ${variables.jsx}
    );
  `;
  },
  indexTemplate: (files) => {
    return files
      .map(({ path: filePath }) => {
        const basename = path.basename(filePath, path.extname(filePath));
        const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;

        return `export * from './${exportName}';`;
      })
      .join("\n");
  },
  filenameCase: "kebab",
  typescript: true,
  svgoConfig: {
    plugins: [
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ ariaHidden: "true" }],
        },
      },
      {
        name: "convertColors",
        params: {
          currentColor: true,
        },
      },
      {
        name: "removeViewBox",
        active: false,
      },
      "removeDimensions",
    ],
  },
};
