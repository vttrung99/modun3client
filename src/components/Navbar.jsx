import React, { useEffect } from 'react'
/* Antd */
import axios from 'axios'
import { AutoComplete, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../stores/slices/cart'

export default function Navbar() {
  const [nums,setnums]= useState(0)
  let userStore = useSelector(store => store.userStore)
let cartStore = useSelector(store => store.cartStore)
const dispath = useDispatch()
useEffect(() => {
  //fetch - axios
  if (userStore.data == null) {
    return
  }
  axios.get(`http://localhost:4000/apis/v1/purchase/${userStore?.data.id}`)
    .then(res => {
      // console.log("res",userStore.data);
      dispath(cartActions.setCartData(res.data.data))
    }).catch(err => {
      // console.log("lỗi axios",err);
    })
}, [userStore.data])
useEffect(() => {
  console.log("cartStore.data222222", cartStore.data
  );
}, [cartStore.data])
 
  useEffect(()=>{
    setnums(cartStore.data?.cart_details.length)
    console.log("nums",nums);
  },[cartStore.data?.cart_details.length])
  
  // console.log("🚀 ~ file: Navbar.jsx:14 ~ Navbar ~ nums:", nums)
  useEffect(() => {
    console.log("cartStore.data444444", cartStore.data

    );
  }, [cartStore.data])
  const renderTitle = (title) => (
    <span>
      {title}
      <a
        style={{
          float: 'right',
        }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* more */}
      </a>
    </span>
  );

  const renderItem = (title, count) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle('Libraries'),
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
      label: renderTitle('Solutions'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: renderTitle('Articles'),
      options: [renderItem('AntDesign design language', 100000)],
    },
  ];

  const [menu, setMenu] = useState([
    "Home", "About", "Contacts", "Policies"
  ]);
 
  return (
    <nav>
      <div className="nav_content">
        <div className="left_content">
          {/* Logo */}
          <img src={`${process.env.REACT_APP_SERVER_HOST}logo1.png`} className="logo" />
        </div>
        <div className="middle_content">
          {
            menu.map((item, index) => (
              <div className="item" key={Date.now() * Math.random()}>{item}</div>
            ))
          }
        </div>
        <div className="right_content">
          {/* Search */}
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={500}
            style={{
              width: 250,
            }}
            options={options}
          >
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
          {/* Wishlist */}
          <i className="fa-regular fa-heart">{nums}</i>
         
          {/* Cart */}
          {/* <i  className="fa-solid fa-bag-shopping"></i> */}
          <a href="/cart" className="fa-solid fa-bag-shopping"></a>
        </div>
      </div>
    </nav>
  )
}
