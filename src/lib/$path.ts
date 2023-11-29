export const pagesPath = {
  "auth": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/auth' as const, hash: url?.hash })
  },
  "data": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/data' as const, hash: url?.hash })
  },
  "developer": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/developer' as const, hash: url?.hash })
  },
  "instructions": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/instructions' as const, hash: url?.hash })
  },
  "result": {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/result' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/' as const, hash: url?.hash })
};

export type PagesPath = typeof pagesPath;
