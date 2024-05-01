import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faqs() {
  return (
    <div>
      <Accordion style={{ background: "black", color: "white" }}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon style={{color:"green"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is Qtify free to use ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "white", color: "black" }}>
          <Typography>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion style={{ background: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"green"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ background: "white", color: "black" }}>
          <Typography>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
