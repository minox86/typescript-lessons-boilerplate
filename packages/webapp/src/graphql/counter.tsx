import { GraphQLClient, gql } from 'graphql-request'
import { useCallback, useEffect, useState } from 'react'
import { getSdk } from './generated/client'

export const getValueQuery = gql`
  query GetValue {
    value {
      value
    }
  }
`

export const increaseMutation = gql`
  mutation Increase($amount: Int!) {
    increase(input: { amount: $amount }) {
      value
    }
  }
`

const client = new GraphQLClient('http://localhost:4100/graphql')
const sdk = getSdk(client)

export const GraphQLCounter: React.FC = () => {
  const [value, setValue] = useState<number | undefined>()
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    sdk
      .GetValue()
      .then((response) => {
        setValue(response.value.value)
      })
      .catch((e) => {
        setError(e.message)
      })
  }, [setValue])

  const onButtonClick = useCallback(async () => {
    const increment = 1
    try {
      setError(undefined)
      await sdk.Increase({ amount: increment })
      const response = await sdk.GetValue()
      setValue(response.value.value)
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      }
    }
  }, [setValue])

  return (
    <div>
      <p>
        <b>GraphQL Example</b>
      </p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!error && (
        <p>
          <span>Counter Value: {value}</span>{' '}
          <span>
            <button onClick={onButtonClick}>+1</button>
          </span>
        </p>
      )}
    </div>
  )
}
