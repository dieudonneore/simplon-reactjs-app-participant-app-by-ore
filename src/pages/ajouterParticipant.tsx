import { Alert, Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AjoutParticipant = () => {

    const [form] = Form.useForm();
    const [participant, setParticipant] = useState<any[]>([]);
    const navigation = useNavigate();


    useEffect(() => {
        loadData();
    }, []);

    const onFinish = async () => {
        const values = await form.validateFields();
        console.log( values);
        try {
      const response = await axios.post('http://62.171.178.129:3000/participant/add', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

        if (response.status === 201) {
          console.error('data:', response.data);
            form.resetFields(); 
            await navigation("/");
      } else {
        console.error('Server returned an error:', response.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
    nomParticipant?: string;
    prenomParticipant?: string;
    telephoneParticipant?: string;
    emailParticipant?: string;
    };

    const loadData = async () => {
        const response = await axios.get('http://62.171.178.129:3000/participant/all');
        console.log("liste assemble");
        console.log(response.data);
        setParticipant(response.data);
        localStorage.setItem('participant', response.data.length)
    }


    return (
        <div className='create' style={{ margin: 'auto' }}>
            <br/><br/><br/>
            <p style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>Bienvenue sur le formulaire d'enregistrement participants</p>
            <br/><br/>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, margin: 'auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="nom du participant"
                    name="nomParticipant"
                    rules={[{ required: true, message: 'Enter le nom du participant svp!' }]}
                    >
                        <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="prenom du participant"
                    name="prenomParticipant"
                    rules={[{ required: true, message: 'Enter le prenom du participant svp!' }]}
                    >
                        <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="telephone du participant"
                    name="telephoneParticipant"
                    rules={[{ required: true, message: 'Enter le telephone du participant svp!' }]}
                    >
                        <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label="email du participant"
                    name="emailParticipant"
                    rules={[{ required: true, message: 'Enter email du participant svp!' }]}
                    >
                        <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Enregistrer
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default AjoutParticipant;