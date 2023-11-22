import { GraphQLCounter } from './graphql/counter';
import { OpenAPICounter } from './openapi/counter';
import './style.css';

export const App: React.FC = () => {
  return (
    <div>
      <OpenAPICounter />
      <GraphQLCounter />
    </div>
  );
};
