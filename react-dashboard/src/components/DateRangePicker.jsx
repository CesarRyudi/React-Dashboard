import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { tokens } from '../theme';
import { useTheme } from '@mui/material'; 
import  InputBase  from "@mui/material/InputBase";
import * as locales from 'react-date-range/dist/locale';


import './Style/styles.css'; 
import './Style/default.css'; 




const DateRangePickerComp = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [range, setRange] = useState([
        {
            startDate: addDays(new Date(), -7),
            endDate: new Date(),
            color: colors.blueAccent[300],
            locale: 'Portuguese',
            key: 'selection',
        
        }
    ])

    const [open, setOpen] = useState(false)

    const refOne = useRef(null)


    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)

    }, [])

    const hideOnEscape = (e) => {
        console.log(e.key)
        if(e.key === "Escape") setOpen(false)
    }

    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if( refOne.current && !refOne.current.contains(e.target) ) setOpen(false)

    }


  return (
    <div className="calendarWrap">

        {/* <input 
            style={{backgroundColor: colors.blueAccent[700], color:colors.grey[100] }}
            value={ ` ${format(range[0].startDate, "dd/MM/yyyy")} a ${format(range[0].endDate, "dd/MM/yyyy")} ` }
            readOnly
            className="inputBox"
            onClick={ () => setOpen(open => !open)}
        /> */}

        <InputBase 
        sx={{ ml:1, mt:0.5 ,flex:1 }} 
        placeholder="Search"
        value={ ` ${format(range[0].startDate, "dd/MM/yyyy")} a ${format(range[0].endDate, "dd/MM/yyyy")} ` }
        readOnly
        onClick={ () => setOpen(open => !open)}

        />
        
        <div ref={refOne}>

        {open &&
        <DateRangePicker
        //   style={{ background:"#3d91ff", color: colors.grey[100]}}
          onChange = { item => setRange([item.selection]) }
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction="horizontal"
          preventSnapRefocus={true}
          color = {colors.redAccent[700]}
          calendarFocus="backwards"
          className="calendarElement"
          locale = {locales.pt}
          style = {{
            fromDot: {backgroundColor: 'rgb(100, 0, 34)'},
            toDot: {backgroundColor: 'rgb(0, 135, 255)'},
            fromDate: {color: 'rgb(0, 255, 100)', backgroundColor: 'rgb(255, 100, 100)'},
            toDate: {backgroundColor: 'rgb(40, 90, 75)'},
            betweenDates: {color: 'rgb(200, 0, 34)', backgroundColor: 'rgb(200, 150, 100)'},
            hoverCell: {color: 'rgb(200, 0, 34)'},
            customRangeButtons: {backgroundColor: 'rgb(40, 90, 75)'},
            customRangeSelected: {backgroundColor: 'rgb(100, 90, 200)'},
            standaloneLayout:{display:'flex', maxWidth:'fit-content'}
        }}
        />
        }
        </div>

        </div>
  )
}

export default DateRangePickerComp;