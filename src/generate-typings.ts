import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
console.log('before definition')
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
console.log('after definition')
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.schema.ts'),
  outputAs: 'class',
});