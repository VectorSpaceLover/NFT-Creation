const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { 
        layerId: 0,
        isRender: true,
        name: "Background",
        size: {
          width: 512,
          height: 512,
        },
        pos: {
          x: 0,
          y: 0,
        },
        rotation: 0,
        opacity: 100,
        randomColor: false,
      },
      { 
        layerId: 1,
        isRender: true,
        name: "Eyeball",
        size: {
          width: 512,
          height: 512,
        },
        pos: {
          x: 0,
          y: 0,
        },
        rotation: 0,
        opacity: 100,
        randomColor: false,
      },
      { 
        layerId: 2,
        isRender: true,
        name: "Eye color",
        size: {
          width: 512,
          height: 512,
        },
        pos: {
          x: 0,
          y: 0,
        },
        rotation: 0,
        opacity: 100,
        randomColor: false,
      },
      { 
        layerId: 3,
        isRender: true,
        name: "Iris",
        size: {
          width: 512,
          height: 512,
        },
        pos: {
          x: 0,
          y: 0,
        },
        rotation: 0,
        opacity: 100,
        randomColor: false,
      },
      { 
        layerId: 4,
        isRender: true,
        name: "Shine",
        size: {
          width: 512,
          height: 512,
        },
        pos: {
          x: 0,
          y: 0,
        },
        rotation: 0,
        opacity: 100,
        randomColor: false,
      },
      { 
        layerId: 5,
        isRender: true,
        name: "Bottom lid",
        size: {
          width: 512,
          height: 512,
        },
        pos: {
          x: 0,
          y: 0,
        },
        rotation: 0,
        opacity: 100,
        randomColor: false,
      },
      { 
        layerId: 6,
        isRender: true,
        name: "Top lid",
        size: {
          width: 512,
          height: 512,
        },
        pos: {
          x: 0,
          y: 0,
        },
        rotation: 0,
        opacity: 100,
        randomColor: false,
      },
    ],
    renderOrder: [ 1, 2, 3, 4, 5, 6, 7],
    randomRender: false,
    creationRate: [ 100, 100, 100, 100, 100, 100, 100 ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
