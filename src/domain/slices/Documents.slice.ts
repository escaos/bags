import { StateCreator } from "zustand";

export interface IDocument {
  locator: string;
  name: string;
  date: string;
}

type State = {
  documents?: IDocument[];
};

type Actions = {
  documentsActions: {
    setDocuments: (documents: IDocument[]) => void;
    clearDocuments: () => void;
  };
};

export type DocumentsSlice = State & Actions;

export const createDocumentsSlice: StateCreator<DocumentsSlice> = (set) => {
  return {
    documentsActions: {
      setDocuments: (documents: IDocument[]) => set(() => ({ documents })),
      clearDocuments: () => set(() => ({ documents: undefined })),
    },
  };
};
