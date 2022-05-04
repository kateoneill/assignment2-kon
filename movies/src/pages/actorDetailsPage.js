import React from "react";
import { useParams } from 'react-router-dom';
import CastDetails from "../components/castDetails";
import PageTemplate from "../components/templateActorPage";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorPage = (props) => {
  const { id } = useParams();

  const { data: cast, error, isLoading, isError } = useQuery(
    ["cast", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {cast ? (
        <>
          <PageTemplate cast={cast}>
            <CastDetails cast={cast} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for cast details</p>
      )}
    </>
  );
};

export default ActorPage;