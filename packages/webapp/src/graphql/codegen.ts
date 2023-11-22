import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4100/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/graphql/generated/client.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },
}

export default config
