import { useEffect, useState } from 'react';
import Container from '../common/Container'
import Button from '../common/Button'
import { instance } from '../../services/api'
import BookCard from '../common/BookCard';

export default function Material() {
  const [books, setBooks] = useState([]);

  async function getMaterial() {
    try {
      const response = await instance.get('/fondo-regional?size=4');
      console.log(response);
      setBooks(response?.data?.content)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=> {
    getMaterial();
  }, [])

  return (
    <div className='bg-stone-800'>
      <Container className={'!my-0 py-15 text-white max-w-7xl'}>
        <div className="flex flex-col items-center gap-2 mb-5">
          <h2 className="text-4xl font-bold">Material Consultado</h2>
          <span className="text-white/80 ">
            Acceda a todo el material del Fondo Regional digitalizado, para usted
          </span>
        </div>

        <div className='grid grid-cols-4 place-items-center'>
          {
            books.map(book => (
              <BookCard key={book.itemnumber} data={book} />
            )) 
          }
        </div>
    
        <div className="flex justify-center my-10">
          <Button href="/material" text={'Ver todo el material'}/>
        </div>
      </Container>
    </div>
  )
}