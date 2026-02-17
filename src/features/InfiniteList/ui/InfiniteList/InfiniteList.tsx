import type { ReactNode } from "react";

interface InfiniteListProps {
  children: ReactNode;
  itemsLength: number;
  isLoading: boolean;
  hasNextPage: boolean;
  emptyState: ReactNode;
  ref: (node?: Element | null) => void;
}

export const InfiniteList = (props: InfiniteListProps) => {
  const { children, ref, emptyState, isLoading, hasNextPage, itemsLength } = props;

  const showEmptyState = !isLoading && itemsLength === 0;

  return (
    <div>
      {children}

      {hasNextPage ? <div ref={ref} /> : null}

      {showEmptyState ? emptyState : null}
    </div>
  );
};
