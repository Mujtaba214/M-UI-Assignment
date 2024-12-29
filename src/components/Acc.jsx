import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Acc() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Comprehensive IT Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our IT services include:

                        Managed IT Solutions: Ensuring your systems run smoothly with proactive monitoring and support.
                        Cloud Services: Scalable and secure cloud computing tailored to your business needs.
                        Cybersecurity: Protecting your business with advanced threat detection and response solutions.
                        IT Consulting: Expert advice to optimize your IT strategy and align it with your business goals.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Custom Software Development</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We specialize in:

                        Web Applications: Robust, scalable, and user-friendly web solutions.
                        Mobile Applications: Cutting-edge apps for Android, iOS, and cross-platform development.
                        Enterprise Software: Tailored solutions to streamline operations and boost productivity.
                        AI & Machine Learning: Innovative tools to enhance decision-making and automate processes.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">IT Training & Certifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Empower your team with our training programs:

                        Certified Training Courses: Industry-recognized certifications like AWS, Cisco, and Microsoft.
                        Tech Workshops: Hands-on learning in trending areas such as DevOps, AI, and Cloud Computing.
                        Customized Programs: Tailored training to meet your organization’s specific skill requirements.
                        Online Learning: Flexible, self-paced courses accessible from anywhere.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
