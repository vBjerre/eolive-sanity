// In the file schemas/schema.js
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import header from './header.js'

export default createSchema({
  name: 'eoliveSchema',
  types: schemaTypes.concat([
    header
  ])
})
