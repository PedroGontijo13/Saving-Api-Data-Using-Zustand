'use client'
import { useEffect } from 'react';
import useStore from '../(store)/store';

export default function Repo() {
  const storeRepos = useStore((state) => state.repos);
  const addRepos = useStore((state) => state.saveRepos);

  useEffect(() => {
    const fetchDataAndSave = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const repos = await response.json();
      addRepos(repos);
    };

    fetchDataAndSave();
  }, [addRepos]);

  return (
    <div className="w-full">
      <h3 className='text-xl mb-2'>Repos: </h3>
      <pre className='text-base'>{JSON.stringify(storeRepos, null, 2)}</pre>
    </div>
  );
}
