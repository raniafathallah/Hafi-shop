import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import {newproducts} 
from '../data/shopitems';

export const Newproducts = () => {
    return (
        <>
        <div>
            <h1>New Products</h1>    
            <div className=' new-products' >
                            {newproducts.map((room, index) => {
                                return(
                                    <div key={index}  >
                                    <Card  className='tab-item product-item' title={room.title} subTitle=""  
                                        header={<img alt="Card" src={room.image}/>}>
                                            <span className='old-price'>
                                            <s>3700$</s>
                                            </span>
                                            <span className='product-price'> 3000$</span>
                                            <Button label="ADD TO CART" className="p-button-raised p-button-danger" />
                                    </Card>
                                    </div>
                                )})
                            }
                </div>
        </div>
        </>
    )
}
                