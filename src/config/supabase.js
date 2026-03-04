/* * This file is responsible for setting up the Supabase client using the provided URL and key from environment variables.
 * It uses the `createClient` function from the `@supabase/supabase-js` library to create a client instance that can be used to interact with the Supabase database.
 * The environment variables are loaded using the `dotenv` package, which allows you to keep sensitive information like API keys out of your source code.
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();
const supabaseUrl = process.env.SUBABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);