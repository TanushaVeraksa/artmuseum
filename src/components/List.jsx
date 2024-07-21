import useSWR from 'swr'
import Item from './Item'
import { getWikiSearchResults } from '../api/artApi'

const List = ({ searchTerm }) => {

    const { data, error, isLoading } = useSWR(searchTerm ? searchTerm : null, getWikiSearchResults);

    return (
        <>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {data && 
         <ul>
         {Object.values(data).map(result => {
             return <Item key={result.id} art={result} />
         })}
        </ul>
        }
        </>
    )
}
export default List