export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			auditorium: {
				Row: {
					created_at: string;
					id: number;
					theater: number | null;
				};
				Insert: {
					created_at?: string;
					id?: number;
					theater?: number | null;
				};
				Update: {
					created_at?: string;
					id?: number;
					theater?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'auditorium_theater_fkey';
						columns: ['theater'];
						isOneToOne: false;
						referencedRelation: 'theater';
						referencedColumns: ['id'];
					}
				];
			};
			city: {
				Row: {
					created_at: string;
					id: number;
					name: string | null;
				};
				Insert: {
					created_at?: string;
					id?: number;
					name?: string | null;
				};
				Update: {
					created_at?: string;
					id?: number;
					name?: string | null;
				};
				Relationships: [];
			};
			movie: {
				Row: {
					created_at: string;
					descr: string | null;
					id: number;
					img_poster: string | null;
					name: string | null;
					showcase_img: string | null;
				};
				Insert: {
					created_at?: string;
					descr?: string | null;
					id?: number;
					img_poster?: string | null;
					name?: string | null;
					showcase_img?: string | null;
				};
				Update: {
					created_at?: string;
					descr?: string | null;
					id?: number;
					img_poster?: string | null;
					name?: string | null;
					showcase_img?: string | null;
				};
				Relationships: [];
			};
			movie_img: {
				Row: {
					created_at: string;
					id: number;
					img: string | null;
					name: string | null;
				};
				Insert: {
					created_at?: string;
					id?: number;
					img?: string | null;
					name?: string | null;
				};
				Update: {
					created_at?: string;
					id?: number;
					img?: string | null;
					name?: string | null;
				};
				Relationships: [];
			};
			movie_movie_img: {
				Row: {
					created_at: string;
					id: number;
					movie: number | null;
					movie_img: number | null;
				};
				Insert: {
					created_at?: string;
					id?: number;
					movie?: number | null;
					movie_img?: number | null;
				};
				Update: {
					created_at?: string;
					id?: number;
					movie?: number | null;
					movie_img?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'movie_movie_img_movie_fkey';
						columns: ['movie'];
						isOneToOne: false;
						referencedRelation: 'movie';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'movie_movie_img_movie_img_fkey';
						columns: ['movie_img'];
						isOneToOne: false;
						referencedRelation: 'movie_img';
						referencedColumns: ['id'];
					}
				];
			};
			seat: {
				Row: {
					auditorium: number | null;
					created_at: string;
					id: number;
					s_id: string | null;
				};
				Insert: {
					auditorium?: number | null;
					created_at?: string;
					id?: number;
					s_id?: string | null;
				};
				Update: {
					auditorium?: number | null;
					created_at?: string;
					id?: number;
					s_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'seat_auditorium_fkey';
						columns: ['auditorium'];
						isOneToOne: false;
						referencedRelation: 'auditorium';
						referencedColumns: ['id'];
					}
				];
			};
			theater: {
				Row: {
					city: number | null;
					created_at: string;
					id: number;
					name: string | null;
				};
				Insert: {
					city?: number | null;
					created_at?: string;
					id?: number;
					name?: string | null;
				};
				Update: {
					city?: number | null;
					created_at?: string;
					id?: number;
					name?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'theater_city_fkey';
						columns: ['city'];
						isOneToOne: false;
						referencedRelation: 'city';
						referencedColumns: ['id'];
					}
				];
			};
			user: {
				Row: {
					address: string | null;
					city: string | null;
					email: string | null;
					first_name: string | null;
					id: string;
					last_name: string | null;
					phone: string | null;
					zip: string | null;
				};
				Insert: {
					address?: string | null;
					city?: string | null;
					email?: string | null;
					first_name?: string | null;
					id: string;
					last_name?: string | null;
					phone?: string | null;
					zip?: string | null;
				};
				Update: {
					address?: string | null;
					city?: string | null;
					email?: string | null;
					first_name?: string | null;
					id?: string;
					last_name?: string | null;
					phone?: string | null;
					zip?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'user_id_fkey';
						columns: ['id'];
						isOneToOne: true;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
