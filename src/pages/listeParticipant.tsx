import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ListeParticipant = () => {

    const [participant, setParticipant] = useState<any[]>([]);

 useEffect(() => {
   loadData();
   //loadDistrictData();
 }, []);
    
    const loadData = async () => {
    const response = await axios.get('https://trova.vip/participant/all');
    console.log("liste assemble");
    console.log(response.data);
    setParticipant(response.data);
    localStorage.setItem('participant', response.data.length)
   }
    
    
const columns = [
  {
    title: 'Nom',
    dataIndex: 'nomParticipant',
    key: 'nomParticipant',
  },
  {
    title: 'Prenoms',
    dataIndex: 'prenomParticipant',
    key: 'prenomParticipant',
  },
  {
    title: 'Telephone',
    dataIndex: 'telephoneParticipant',
    key: 'telephoneParticipant',
  },
  {
    title: 'Email',
    dataIndex: 'emailParticipant',
    key: 'emailParticipant',
  },
];


   

    return (
        <div className='liste'>
            <br/><br/>
            <p style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>Bienvenue sur la liste des participants</p>
            <br/>
           <Table dataSource={participant} columns={columns} />;
        </div>
    );
}


export default ListeParticipant;