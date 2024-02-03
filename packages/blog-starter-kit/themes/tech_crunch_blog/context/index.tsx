import { BlogData } from '@/hooks/useGetBlogPosts';
import { create } from 'zustand';

interface StoreState {
	publicationId: string | null;
	blog: BlogData | null;
	updatePublicationId: (args: string) => void;
	updateBlogData: (args: BlogData) => void;
}

const useContext = create<StoreState>((set) => ({
	publicationId: null,
	blog: null,
	updatePublicationId: (args) => set({ publicationId: args }),
	updateBlogData: (args) => set({ blog: args }),
}));

export default useContext;
