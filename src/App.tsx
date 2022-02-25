import FormColor from './component/FormColor';
import { useState } from 'react';
import DisplayColor from './component/DisplayColor';
import "./App.scss";
import Filter from './component/Filter';

let defaultValue: string[] = ['#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E', '#16A085', '#27AE60', '#2980B9', '#8E44AD', '#2C3E50', '#F1C40F', '#E67E22', '#E74C3C', '#ECF0F1', '#95A5A6', '#F39C12', '#D35400', '#C0392B', '#BDC3C7', '#7F8C8D']

const App = () => {
  const [hex, setHex] = useState<string[]>(defaultValue);
  const [rgb, setRgb] = useState<Number[][]>([[0, 0, 0]]);


  const handleForm = (color: string) => {
    setHex([...hex, color])

    //convert HexToRgb
    HexToRgb(hex)
  }

  const HexToRgb = (hex: string[]) => {

    //parse string hex to rgb
    const parse = hex.map(color => {
      let r: number = parseInt(color[1] + color[2], 16);
      let g: number = parseInt(color[3] + color[4], 16);
      let b: number = parseInt(color[5] + color[6], 16);
      const parseRgb = `rgb(${r}, ${g}, ${b})`

      return [r, g, b]
    })

    setRgb([...rgb, ...parse])
  }

  const handleFilter = (e: string) => {

    if (e) {
      //validate if rgb > 127
      const validRgb = rgb.filter(item => {
        return (item[0] > Number(e) || item[1] > Number(e) || item[2] > Number(e));
      })
      setRgb(validRgb);

      //convert rgb to hex color
      const red = rgb.map(item => { return item[0] })
      const green = rgb.map(item => { return item[1] })
      const blue = rgb.map(item => { return item[2] })
      const componentToHex = (c: Number) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }

      const rgbToHex = (r: Number, g: Number, b: Number) => {
        let hexH = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        setHex([hexH])

      }
      rgbToHex(red[1], green[1], blue[1])
    }else {
      setHex([...hex])
    }
  }

  return (
    <div>
      <FormColor handleForm={handleForm} />
      <Filter handleFilter={handleFilter} />
      <DisplayColor color={hex} />
    </div>
  );
};

export default App;