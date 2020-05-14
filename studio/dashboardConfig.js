export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd9c057c8badcfbe59cf5f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-3-studio-nij5n5om',
                  apiId: 'b05a89f5-4a30-4339-93ab-273767173006'
                },
                {
                  buildHookId: '5ebd9c057c8badca3559d228',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-3-web-qa5j497i',
                  apiId: 'f7e79957-01ac-446c-ba7f-c03874e95d68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-portfolio-3',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-3-web-qa5j497i.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
