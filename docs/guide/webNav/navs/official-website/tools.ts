// tools
export const toolsList: ICard2[] = [
  {
    name: 'pnpm',
    img: '/docs/images/official/pnpm.svg',
    zhSrc: 'https://pnpm.io/zh/motivation',
    otherStr: 'https://pnpm.nodejs.cn/',
    otherStrDesc: '社区中文',
  },
  {
    name: 'yarn',
    img: '/docs/images/official/yarn.svg',
    imgStyle: { width: '80px' },
    enSrc: 'https://yarnpkg.com/getting-started/install',
    zhSrc: 'https://yarn.nodejs.cn/',
  },
  {
    name: 'npm',
    img: '/docs/images/official/npm.svg',
    enSrc: 'https://www.npmjs.com/',
    zhSrc: 'https://npm.nodejs.cn/',
    otherStr: 'https://www.npmmirror.com/',
    otherStrDesc: 'npmmirror',
  },
  {
    name: 'Vite',
    img: '/docs/images/official/vite.svg',
    src: 'https://cn.vitejs.dev/',
  },
  {
    name: 'webpack',
    img: '/docs/images/official/webpack.svg',
    src: 'https://webpack.docschina.org/concepts/',
  },
  {
    name: 'Rollup',
    img: '/docs/images/official/rollup.svg',
    zhSrc: 'https://cn.rollupjs.org/',
    otherStr: 'https://rollup.nodejs.cn/',
    otherStrDesc: '社区中文',
  },
  {
    name: 'Babel',
    img: '/docs/images/official/babel.svg',
    imgStyle: { width: '100px' },
    src: 'https://babel.nodejs.cn/',
  },

  {
    name: 'Eslint',
    img: '/docs/images/official/eslint.svg',
    enSrc: 'https://eslint.org/docs/latest/use/getting-started',
    zhSrc: 'https://eslint.nodejs.cn/',
  },
  {
    name: 'Prettier',
    img: '/docs/images/official/prettier.svg',
    src: 'https://prettier.nodejs.cn/docs/en/install.html',
  },
  {
    name: 'stylelint',
    img: '/docs/images/official/stylelint.svg',
    imgStyle: { width: '100px' },
    tooltip: 'CSS/SCSS/Less 代码检查工具',
    enSrc: 'https://stylelint.docschina.org/user-guide/plugins/',
    zhSrc: 'https://stylelint.nodejs.cn/',
  },
  {
    name: 'Biome ',
    img: '/docs/images/official/Biome.svg',
    imgStyle: { width: '100px', height: '30px' },
    desc: '格式化工具',
    tooltip: '快速格式化工具(Prettier的rust版本)',
    src: 'https://biomejs.dev/zh-cn/',
  },
  // @ts-expect-error
  {},
]