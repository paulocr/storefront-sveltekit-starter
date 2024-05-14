import { dev } from '$app/environment'
import { handleGraphiql } from '@kitql/all-in'
import { sequence } from '@sveltejs/kit/hooks'
import { VITE_GRAPHQL_API } from '$env/static/private'

export const handle = sequence(
  // Add graphiql
  handleGraphiql({
    endpoint: VITE_GRAPHQL_API,
    enabled: dev,
  })
)
