module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FiveUnits": "80px",
        "HalfUnit": "8px",
        "FourUnits": "64px",
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px",
        "SixUnits": "96px",
        "ThreeUnits": "48px",
        "Unit": "16px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius2": "2px",
        "Radius4": "4px",
        "Radius8": "8px"
      },
      "scale": {
        "Small": "48px",
        "Medium": "96px",
        "XSmall": "16px",
        "XXLarge": "288px",
        "MaxWidth": "1400px",
        "XLarge": "192px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}