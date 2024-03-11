// hooks/useRevenue.ts
import { useEffect } from "react";

import { IDocument } from "../../domain/slices/Documents.slice";
import { useStore } from "../../domain/state/store";

const DEFAULT_DOCUMENTS: IDocument[] = [
  {
    locator: "Document 1",
    name: "Document A",
    date: "2021-07-01",
  },
  {
    locator: "Document 2",
    name: "Document B",
    date: "2021-07-01",
  },
  {
    locator: "Document 3",
    name: "Document C",
    date: "2021-07-01",
  },
];

export const useDocuments = () => {
  const { documents, actions } = useStore((state) => ({
    documents: state.documents,
    actions: state.documentsActions,
  }));

  useEffect(() => {
    if (!documents) {
      actions.setDocuments({
        ...DEFAULT_DOCUMENTS,
      });
    }
  }, [actions, documents]);

  return {
    documents,
    actions,
  };
};
