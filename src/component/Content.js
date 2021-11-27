import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Table} from 'antd';
import {Row, Col} from 'antd';
import './css/Content.css'


function Content(){
    const[post, setPosts] = useState([]) 

    useEffect(() =>{
        axios.get(`http://localhost:4000/books`)
        .then(date =>
            setPosts(date.data))
       
    }, [])

    const columns =[
        {
            title:'Book Name',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title:'Author',
            dataIndex: 'author',
            key: 'author',
            filters:[
                {
                    text :  'Allen B. Downey',
                    value: 'Allen B. Downey',
                },
                {
                    text :  'Jon Bentley',
                    value: 'Jon Bentley',
                },
                {
                    text :  'Alexander K. Dewdney',
                    value: 'Alexander K. Dewdney',
                },
                {
                    text :  'Brian W. Kernighan and Phillip J. Plauger',
                    value: 'Brian W. Kernighan and Phillip J. Plauger',
                },
            ],
            onFilter :(value,item) => item.author.includes(value)
        }
    ]

  
const dataSource = post.map(item => ({...item, key:item.id}))
    
console.log("Posts: ", post)

    return(
        <div className ='content'>
        <Row> 
            <Col xs ={24} md ={{span: 12, offset: 6}}>
       <Table  
       dataSource ={dataSource}
       columns ={columns}
       pagination ={{
           defaultPageSize : '5',
           showSizeChanger:true,
           pageSizeOptions: [1,3,5,10,15,20]

       }}
       />
       </Col>
       </Row>
       </div>
    )
}

export default Content;