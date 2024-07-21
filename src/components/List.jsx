import useSWR from 'swr'
import Item from './Item'
import { getWikiSearchResults } from '../api/artApi'
import Title from '../styles/Title';

const List = ({ searchTerm }) => {

    const { data, error, isLoading } = useSWR(searchTerm ? searchTerm : null, getWikiSearchResults);

    return (
        <>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {data && 
         <ul>
        <Title size='1.2em' margin='20px 0'>Found Arts:</Title>
         {Object.values(data).map(result => {
             return <Item key={result.id} art={result} />
         })}
        </ul>
        }
        </>
    )
}
export default List