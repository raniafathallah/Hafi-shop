import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { useState } from 'react';
import {bedroomitems,diningitems,gardenitems,livingitems} 
from '../data/shopitems';

export const ShopByItem = () => {
    return (
        <>
        <div>
            <h1>Shop By Item</h1>
            <TabView>
                   <TabPanel header="Living Room ">
                    <div className='tab-items'>
                            {livingitems.map((room, index) => {
                                return(
                                    <div key={index}  >
                                    <Card  className='tab-item' title={room.title} subTitle=""  
                                        header={<img alt="Card" src={room.image}/>}>
                                    </Card>
                                    </div>
                                )})
                            }
                        </div>
                   </TabPanel>
                    <TabPanel header="Bed Room">
                        <div className='tab-items'>
                            {bedroomitems.map((room, index) => {
                                return(
                                    <div key={index}  >
                                    <Card  className='tab-item' title={room.title} subTitle="" 
                                        header={<img alt="Card" src={room.image}/>}>
                                    </Card>
                                    </div>
                                )})
                            }
                        </div>
                     </TabPanel>
                    <TabPanel header="Dining Room">
                    <div className='tab-items'>
                            {diningitems.map((room, index) => {
                                return(
                                    <div key={index}  >
                                    <Card  className='tab-item' title={room.title} subTitle=""  
                                        header={<img alt="Card" src={room.image}/>}>
                                    </Card>
                                    </div>
                                )})
                            }
                        </div>
                    </TabPanel>
                    <TabPanel header="Garden Furniture" >
                    <div className='tab-items'>
                            {gardenitems.map((room, index) => {
                                return(
                                    <div key={index}  >
                                    <Card  className='tab-item' title={room.title} subTitle=""   
                                        header={<img alt="Card" src={room.image}/>}>
                                    </Card>
                                    </div>
                                )})
                            }
                        </div>

                    </TabPanel>
            </TabView>
        </div>
        </>
    )
}
                