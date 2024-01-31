import { create } from 'zustand';

interface StoreState {
	publicationId: string;
	updatePublicationId: (args: string) => void;
}

export const useStore = create<StoreState>((set) => ({
	publicationId: '',
	updatePublicationId: (args: string) => set({ publicationId: args }),
}));
