import 'dotenv/config'
import postgres from 'postgres'

export const sql = postgres('postgresql://nodeFromZerodb_owner:8UJNVMyep3vI@ep-misty-frost-a5b5sk4v.us-east-2.aws.neon.tech/nodeFromZerodb?sslmode=require', {
  })

export default sql