import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type IncreaseInput = {
  amount: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  increase: Scalars['Boolean']['output'];
};


export type MutationIncreaseArgs = {
  input: IncreaseInput;
};

export type Query = {
  __typename?: 'Query';
  value: ValueResult;
};

export type ValueResult = {
  __typename?: 'ValueResult';
  value: Scalars['Int']['output'];
};

export type GetValueQueryVariables = Exact<{ [key: string]: never; }>;


export type GetValueQuery = { __typename?: 'Query', value: { __typename?: 'ValueResult', value: number } };

export type IncreaseMutationVariables = Exact<{
  amount: Scalars['Int']['input'];
}>;


export type IncreaseMutation = { __typename?: 'Mutation', increase: boolean };


export const GetValueDocument = gql`
    query GetValue {
  value {
    value
  }
}
    `;
export const IncreaseDocument = gql`
    mutation Increase($amount: Int!) {
  increase(input: {amount: $amount})
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetValue(variables?: GetValueQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetValueQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetValueQuery>(GetValueDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetValue', 'query');
    },
    Increase(variables: IncreaseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IncreaseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<IncreaseMutation>(IncreaseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Increase', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;