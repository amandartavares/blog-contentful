module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'ri2apj1m4arq',
                accessToken: 'BvGQBPrJFP2fph3aMaMiv5eifhxcEVrztaoZj2ks8qA',
                downloadLocal: true
            }
        },
        'gatsby-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark'

    ]
}