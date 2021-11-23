import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Faq = () => {
    return (
        <section className='bg-bookmark-white py-20'>

            <div className='container'>
                {/* <!-- Heading --> */}
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className='text-3xl text-center text-bookmark-blue'>Frequently asked Questions</h1>
                    <p className="text-center text-bookmark-grey mt-4">
                    Here are some of our frequently asked questions. Please do not hesitate to contact us if you have any additional inquiries.
                    </p>
                </div>
                {/* <!-- FAQ items --> */}
                <div className='flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto'>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='text-bookmark-purple'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography><span className='flex-1 font-Poppins'>How does Car manager work?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <span className='flex-1 font-Poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='text-bookmark-purple'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography><span className='flex-1 font-Poppins'>Is it free?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <span className='flex-1 font-Poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='text-bookmark-purple'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography><span className='flex-1 font-Poppins'>Is it available in your country?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <span className='flex-1 font-Poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.</span>
                            
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                    <button type="button" className="mt-12 flex self-center shadow-md py-3 px-6 rounded-md transition duration-300 bg-bookmark-purple text-white hover:bg-bookmark-white hover:text-black">
                        More Info
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Faq
