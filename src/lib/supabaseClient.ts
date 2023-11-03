import { createClient } from '@supabase/supabase-js';
import type { Database } from '../supabase';

const supabaseUrl = 'https://bsehhmxcpatkccvvrugo.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZWhobXhjcGF0a2NjdnZydWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMzAxMTQsImV4cCI6MjAxMzkwNjExNH0.H5s3tBFrhrCQu-0m-Moupz3y5zTvRDjNv5BOE1c4B2Q';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
