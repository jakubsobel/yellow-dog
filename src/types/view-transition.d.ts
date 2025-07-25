interface ViewTransitionUpdateOptions {
  update: () => void;
  types?: string[];
}

interface Document {
  startViewTransition(options: ViewTransitionUpdateOptions): ViewTransition;
  startViewTransition(callback?: () => void): ViewTransition;
}
