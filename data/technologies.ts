export type TechnologyItem = {
  id: string
  name: string
  icon: string
}

export type TechnologyCategory = {
  id: string
  title: string
  items: TechnologyItem[]
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'design',
    title: 'Design',
    items: [
      { id: 'figma', name: 'Figma', icon: '/icons/solar_figma-linear.svg' },
      { id: 'sketch', name: 'Sketch', icon: '/icons/lineicons_sketch.svg' },
      { id: 'marvel', name: 'Marvel', icon: '/icons/simple-icons_marvelapp.svg' },
      { id: 'zeplin', name: 'Zeplin', icon: '/icons/logos_zeplin.svg' },
      { id: 'storybook', name: 'Storybook', icon: '/icons/devicon_storybook.svg' },
      { id: 'maze', name: 'Maze', icon: '/icons/simple-icons_maze.svg' },
      { id: 'webflow', name: 'Webflow', icon: '/icons/lineicons_webflow.svg' },
      { id: 'lovable', name: 'Lovable', icon: '/icons/lovable.svg' },
      { id: 'make', name: 'Make', icon: '/icons/make.svg' },
      { id: 'adobe', name: 'Adobe', icon: '/icons/uil_adobe.svg' },
      { id: 'affinity', name: 'Affinity', icon: '/icons/affinity.svg' },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    items: [
      { id: 'html', name: 'HTML', icon: '/icons/flowbite_html-solid.svg' },
      { id: 'css', name: 'CSS', icon: '/icons/flowbite_css-solid.svg' },
      { id: 'typescript', name: 'TypeScript', icon: '/icons/akar-icons_typescript-fill.svg' },
      { id: 'react', name: 'React', icon: '/icons/mdi_react.svg' },
      { id: 'angular', name: 'Angular', icon: '/icons/devicon_angular.svg' },
      { id: 'vue', name: 'Vue', icon: '/icons/file-icons_vue.svg' },
      { id: 'tailwind', name: 'TailwindCSS', icon: '/icons/mdi_tailwind.svg' },
      { id: 'bootstrap', name: 'Bootstrap', icon: '/icons/lineicons_bootstrap.svg' },
      { id: 'sass', name: 'Sass', icon: '/icons/akar-icons_sass-fill.svg' },
      { id: 'git', name: 'Git', icon: '/icons/devicon_git.svg' },
      { id: 'github', name: 'GitHub', icon: '/icons/mdi_github.svg' },
      { id: 'vercel', name: 'Vercel', icon: '/icons/ri_vercel-fill.svg' },
      { id: 'bitbucket', name: 'Bitbucket', icon: '/icons/logos_bitbucket.svg' },
    ],
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    items: [
      { id: 'jira', name: 'Jira', icon: '/icons/mdi_jira.svg' },
      { id: 'asana', name: 'Asana', icon: '/icons/logos_asana-icon.svg' },
      { id: 'confluence', name: 'Confluence', icon: '/icons/devicon-plain_confluence.svg' },
      { id: 'notion', name: 'Notion', icon: '/icons/ri_notion-fill.svg' },
      { id: 'miro', name: 'Miro', icon: '/icons/logos_miro-icon.svg' },
    ],
  },
]
