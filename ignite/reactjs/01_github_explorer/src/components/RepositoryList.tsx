import {useState, useEffect} from 'react';

import "../styles/repositories.scss";

import { RepositoryItem } from "./RepositoryItem";

interface Repository {
    name: string;
    description: string;
    html_url:string;

}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    
    //cuidado para não colocar o segundo parametro = causa looping
    useEffect(() => {
        fetch('https://api.github.com/users/guilhermefn1011/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []) 

    return (
        <section className="Repository-List">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository =>{
                    return  <RepositoryItem key={repository.name} //react usar key referencia com map
                    repository = {repository}/>
                } )}
            
            </ul>
        </section>
    );
}