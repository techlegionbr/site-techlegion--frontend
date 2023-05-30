interface TypeFontGoogle {
  name: string;
  weights: number[];
}

const fontsGoogle: TypeFontGoogle[] = [
  {
    name: "Montserrat",
    weights: [400, 700],
  },
  {
    name: "Poppins",
    weights: [100, 400, 700],
  },
  {
    name: "Open+Sans",
    weights: [100, 400, 700],
  },
];

const stringFontsMap = fontsGoogle
  .map((font) => `family=${font.name}:wght@${font.weights.join(";")}`)
  .join("&");
const importFontsURL = `https://fonts.googleapis.com/css2?${stringFontsMap}&display=swap`;

const googleFontsConfig = {
  import: importFontsURL,
};

export default googleFontsConfig;
