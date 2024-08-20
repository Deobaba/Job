import { LoaderFunctionArgs } from "react-router";


export const JobLoader = async ({ params }:  LoaderFunctionArgs ) => {
    const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
    const data = await res.json();
    return data;
  };
  