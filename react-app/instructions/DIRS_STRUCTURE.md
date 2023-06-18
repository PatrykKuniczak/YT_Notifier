CREATE INSIDE SRC:

```
'assets' - Save here img and etc.,

'data' - Save here global styles and themes:
  'themes':
    *-theme.[js/ts],
  'mixins':
    *-mixin.[js/ts]
  global-styles.[js/ts]
    
'pages':
    *.page.[jsx/tsx],

'layouts' - Save here a part of page e.g navbar,

'components' - Save here the smaller part or page, e.g buttons:
  'ui' - Components without any fuctionallity,
  'fuctional' - E.g input,
  
  Each should have these subdirectories:
    - atomic - For the smallest part
    - micro - For group of atomic components 
    - makro - For group of micro components (Group of macro components should be saved in 'layouts' directory)
      Makro should have subdirectories for grouping components with they logic
      e.g. 'searchBar':
        search-bar.tsx,
        useSearchBar.ts
  
'routes':
    *.route.[jsx/tsx],

'hooks',

'utils' - Save here function, which isn't a React hook,

'interfaces':
    *.interface.[js/ts],

'types':
    common.types.[js/ts] - For common/ungrouped types, 
    *.type.[js/ts],

'services' - Save here all queries,

'config',

'consts'
```
