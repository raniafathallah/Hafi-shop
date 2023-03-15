import ReactDOM from 'react-dom';

import React, { useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import  { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Login } from './Login';

import { useNavigate } from "react-router-dom";

export const Menu = () => {
    const navigate = useNavigate();

    
    const [localUser,setLocalUser]=useState();
    const fetchLocalStorage = async () => {
        const local_User= await JSON.parse(localStorage.getItem('user'));
        setLocalUser(local_User);
         console.log(local_User);
                }   
    useEffect(() => {
        setInterval(() => {
            fetchLocalStorage();
        }, 3000);
    }, []);
    
const [isLogin,setIsLogin]=useState(false);
     const [displayBasic, setDisplayBasic] = useState(false);
     const dialogFuncMap = {
         'displayBasic': setDisplayBasic
     }
 
     const onClick = (name, position) => {
         dialogFuncMap[`${name}`](true);
 

     }
 
     const onHide = (name) => {
         dialogFuncMap[`${name}`](false);
     }
 

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
                    command:(event)=>{ 
                        navigate('/shop'); 
                    }
                },
                {
                    label: 'Sofas',
                    command:(event)=>{ 
                        navigate('/shop'); 
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
                            ],
                            command:(event)=>{ 
                                navigate('/shop'); 
                            }
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List',
                            command:(event)=>{ 
                                navigate('/shop'); 
                            }
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
            command:(event)=>{ 
               onClick('displayBasic'); 
            },
            className:localUser?"hideLink":"activeLink"
        },
        {
            label:localUser?localUser.name:'',
            items: localUser?[
                {
                    label: 'Change Password',
                },
                {
                    label: 'Account Setting',
                },
                {
                    label: 'Log Out',
                    command:(event)=>{ 
                    localStorage.removeItem('user'); 
                    setTimeout(() => {
                        window.location.reload();
                      }, 1000);
                     }
                }
            ]:'',

        }
    ];

    const start = <div style={{display:'flex'}}>
     <img alt="logo" src="/images/logo.png" onClick={()=>{navigate("/shop")}}
     onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>
     <InputText placeholder="Search" type="text" />
    </div>;
   
    

   

    return (
        <div  >
            <div className="card">
                <Menubar model={items} start={start}  />

                <div className="dialog-demo">
            <div className="card">

<Dialog  visible={displayBasic} style={{ width: '50vw' }}  onHide={() => onHide('displayBasic')}>
     <Login  />
</Dialog>

</div>
        </div>
            </div>
        </div>
    );
}
                
