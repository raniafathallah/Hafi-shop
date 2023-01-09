import ReactDOM from 'react-dom';

import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

export const Menu = () => {
    const items = [
        {
            label: 'Rooms',
            items: [
               {
                   label: 'Bed Room ',
               },
               {
                   label: 'Dinning Room',
               },
               {
                   label: 'LIving Room',
               }
           ]
        },
        {
            label: 'Garden Furinture',
            items: [
               {
                   label: 'Relax chair',
               },
               {
                   label: 'Hammock',
               }
           ]
        },
        {
            label: 'Shop',
            items: [
                {
                    label: 'Chairs',
                },
                {
                    label: 'Sofas',
                    command:(event)=>{ 
                         window.location.hash = "/fileupload"; 
                    window.alert("dkdkkdk");  
                    }
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Categories ',
            items: [
                {
                    label: 'Bags & Backpacks',
                },
                {
                    label: 'Decoration',
                },
                {
                    label: 'Interior',
                }
            ]
        }
        ,
        {
            label: '',
            icon: 'pi pi-heart',
            className:'float-right', 
        }
        ,
        {
            label: 'Cart',
            icon: '',
        }
        ,
        {
            label: 'Sign In',

        }
    ];

    const start = <div style={{display:'flex'}}>
     <img alt="logo" src="/images/logo.png" 
     onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>
     <InputText placeholder="Search" type="text" />
    </div>;
   
    

    return (
        <div  >
            <div className="card">
                <Menubar model={items} start={start}  />
            </div>
        </div>
    );
}
                
