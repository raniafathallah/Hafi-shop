
import React, { useState, useEffect } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
//import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
//import './DataViewDemo.css';
import { allproducts } from '../../data/shopitems';
import { MultiSelect } from 'primereact/multiselect';
import './Allproducts.css';
// * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

//import MultiRangeSlider from "./component/multiRangeSlider/MultiRangeSlider";
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider';

import { Accordion, AccordionTab } from 'primereact/accordion';

import { Checkbox } from "primereact/checkbox";


const Allproducts = () => {

    function valuetext(value) {
        return `${value}$`;
      }

    const [value, setValue] = React.useState([1.4, 4.5]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // check box 
    const categories = [
        { name: 'Bed Room', key: 'A' },
        { name: 'Dining Room', key: 'M' },
        { name: 'Living Room', key: 'P' }
        // { name: 'Research', key: 'R' }
    ];
    const categories2 = [
        { name: 'Classic', key: 'A' },
        { name: 'Modern', key: 'M' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };
    //  checkbox


    const [products, setProducts] = useState(allproducts);
    const [layout, setLayout] = useState('grid');
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
    ];

    const FilterBasedOnPrice=()=>{
       alert('wowwww filter');
    }

    useEffect(() => {
        // ProductService.getProducts().then((data) => setProducts(data));
   // 
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortChange = (event) => {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            setSortOrder(-1);
            setSortField(value.substring(1, value.length));
            setSortKey(value);
        } else {
            setSortOrder(1);
            setSortField(value);
            setSortKey(value);
        }
    };

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column align-items-center p-3 w-full md:flex-row">
                    <img className="md:w-11rem  shadow-2 md:my-0 md:mr-5 mr-0 my-5 raw-list-small" src={`/${data.image}`}  alt={data.name} />
                    <div className="text-center md:text-left md:flex-1 row-list">
                        <div className="text-2xl font-bold">{data.title}</div>
                        <div className="mb-3">{data.description}</div>des dssddffffffffftttttttt
                        {/* <Rating id='left-rating' className="mb-2" value={data.rating} readOnly cancel={false}></Rating> */}
                        {/* <i className="pi pi-tag vertical-align-middle mr-2"></i> */}
                        {/* <span className="vertical-align-middle font-semibold">{data.category}</span> */}
                    </div>
                    <div className="flex md:flex-column mt-5 justify-content-between align-items-center md:w-auto w-full add-margin">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end">1000${data.price}</span>
                        <Button className="mb-2" icon="pi pi-shopping-cart" label="Add to Cart" 
                        // disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                        ></Button>
                        {/* <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}` md:w-full}>{data.inventoryStatus}</span> */}
                    </div>
                </div>
                </div>
        );
    };

    const renderGridItem = (data) => {
        return (
            <div className="col-12 md:col-3 product-block">
                <div className="m-2 border-1 surface-border card" style={{display:'block'}}>
               
                    <div className="text-center">
                        <img className="w-9 my-5 shadow-3 product-img" src={`${data.image}`}  alt={data.name} />
                        <div className="text-2xl font-bold product-title">{data.title}</div>
                        <div className="mb-3">{data.description}</div>
                        <Rating className="mb-2" value="3" readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between add-margin">
                        <span className="align-self-center text-2xl font-semibold mb-2 md:align-self-end product-price">$50{data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return renderListItem(product);
        else if (layout === 'grid') return renderGridItem(product);
    };

    const renderHeader = () => {
        return (
            <>
       
         
            <div className="grid grid-nogutter">
                {/* <div className="col-6" style={{ textAlign: 'left' }}>
                    <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />
                </div> */}
                <div className="col-12" style={{ textAlign: 'right' }}>
                    <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
                </div>
            </div>
            </>
        );
    };

    const header = renderHeader();

    return (
        <div className='products-container'>
            <div className="filter-methods-container col-2">
                <h2>price </h2>
                <MultiRangeSlider
                    min={1000}
                    max={70000}     
                    onChange={({ min, max }) => console.log(`min  = ${min}, max = ${max}`)}
                />
                <Button onClick={()=>{FilterBasedOnPrice()}}>FILTER </Button>
                <div className="card accordian-filter">
            <Accordion activeIndex={0}>
                <AccordionTab header="Category">
                    <p className="m-0">
                    <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
                     </p>
                </AccordionTab>
                <AccordionTab header="Style">
                <div className="flex flex-column gap-3">
                {categories2.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
                </AccordionTab>
            </Accordion>

        </div>
        <Button className='clear-btn'> Clear All</Button>

            </div>

        <div className="card dataview-demo">
            <DataView value={products} 
            layout={layout} header={header} 
            itemTemplate={itemTemplate} lazy paginator 
             rows={8} sortOrder={sortOrder} sortField={sortField} />
        </div>
        </div>
     
    )
};
         
export default Allproducts;
