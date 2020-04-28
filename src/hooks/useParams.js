import QueryString from 'query-string';
import { useLocation } from 'react-router-dom';

export const useParams = () => {
  const params = useLocation().search;
  return QueryString.parse(params);
};
