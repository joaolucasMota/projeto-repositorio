import { Container, Form, SubmitButton } from "./styles";
import {FaGithub, FaPlus} from 'react-icons/fa';
import { useState, useCallback } from "react";
import api from '../../services/api.js';

export default function Main(){

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setloading] = useState(false);

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        
        async function submit(){
            const response = await api.get(`repos/${newRepo}`);

            const data ={
                name: response.data.full_name,
        }
        setRepositorios([...repositorios,data]);
        setNewRepo('');
        }

        submit();

    },[newRepo, repositorios]);

    return(
        <Container>
            <h1>
                <FaGithub size = {25}/>
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Adicionar repositórios"
                value={newRepo}
                onChange={(e) => setNewRepo(e.target.value) }
                />

                <SubmitButton>
                    <FaPlus color='#fff' size={14}/>
                </SubmitButton>
            </Form>
        </Container>
    )
}