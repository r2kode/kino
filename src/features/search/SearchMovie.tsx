import { useSearchMovieQuery } from '../../app/services/movies';

export function SearchMovie() {
  const { data, isLoading } = useSearchMovieQuery('aliens');
  // console.log(data);
  return (
    <div>
      <h2>SearchMovie</h2>
      <div>{!isLoading ? JSON.stringify(data) : null}</div>
    </div>
  );
}
