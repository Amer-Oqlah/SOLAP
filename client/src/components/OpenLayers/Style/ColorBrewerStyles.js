import colorbrewer from "colorbrewer";
import { Stroke, Fill, Style } from "ol/style";

const ColorBrewerStyles = {};
for (const rampId in colorbrewer) {
  if (rampId === "schemeGroups") {
    continue;
  }

  ColorBrewerStyles[rampId] = {};

  for (const rampSize in colorbrewer[rampId]) {
    ColorBrewerStyles[rampId][rampSize] = [];
    for (let i = 0; i < colorbrewer[rampId][rampSize].length; i++) {
      ColorBrewerStyles[rampId][rampSize].push(
        new Style({
          stroke: new Stroke({
            color: "rgba(0, 0, 0, 0.2)",
            width: 2
          }),
          fill: new Fill({
            color: colorbrewer[rampId][rampSize][i]
          })
        })
      );
    }
  }
}

export default ColorBrewerStyles;
