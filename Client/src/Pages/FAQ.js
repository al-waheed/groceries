import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextHeaderStyle} from "../Util/Style";

export default function FAQ() {
  return (
    <div className=' mx-16 my-10'>
	<div className='mb-6'>
	<TextHeaderStyle>FAQ</TextHeaderStyle>
	</div>
      <Accordion style={{background:'#FDECEC', borderRadius:'0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  Our return policy is straightforward: You can return your purchase hassle-free within 5 days.
          </Typography>
        </AccordionDetails>
      </Accordion>
	  <Accordion style={{background:'#FDECEC', borderRadius:'0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Do you offer international shipping?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  No, we do not offer international shipping. Our shipping services are currently limited to 
		  domestic destinations. However, we are constantly evaluating our options and may consider 
		  expanding our shipping services in the future to include international destinations.
          </Typography>
        </AccordionDetails>
      </Accordion>
	  <Accordion style={{background:'#FDECEC', borderRadius:'0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>What payment method do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  We accept payments through Stripe, a secure and widely trusted online payment processing platform. 
		  With Stripe, you can conveniently make payments using various methods, including major credit and 
		  debit cards like Visa, MasterCard and American Express. 
          </Typography>
        </AccordionDetails>
      </Accordion>
	  <Accordion style={{background:'#FDECEC', borderRadius:'0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>How do i contact customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  You can contact us through E-mail and Phone call. This is most convenient method of reaching 
		  our customer care.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}