/* * This file is responsible for setting up the Supabase client using the provided URL and key from environment variables.
 * It uses the `createClient` function from the `@supabase/supabase-js` library to create a client instance that can be used to interact with the Supabase database.
 * The environment variables are loaded using the `dotenv` package, which allows you to keep sensitive information like API keys out of your source code.
 */

// Import the `createClient` function from the `@supabase/supabase-js` library and the `dotenv` package to load environment variables
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from a .env file into process.env
dotenv.config();
const supabaseUrl = process.env.SUBABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
// Create a Supabase client instance using the URL and key from environment variables
export const supabase = createClient(supabaseUrl, supabaseKey);