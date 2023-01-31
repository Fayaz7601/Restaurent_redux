import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Reviews({ reviewdata }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button className='mt-3'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Reviews
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        {
                            reviewdata.map(item => 
                                <div className='p-2 mt-1'>
                                   <h6>{item.name} {item.date}</h6>
                                   <h6>{item.rating} {item.comments}</h6>

                                </div>
                            )
                        }

                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Reviews
