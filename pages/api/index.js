const api = async (req, res) => {
    const data = {
        title: 'API',
        description: 'API description',
        url: 'https://api.github.com/users/octocat',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {
            'name': 'octocat',
            'blog': 'https://octodex.github.com/',
            'public_repos': 2,
            'public_gists': 1,
            'followers': 100,
            'following': 0,
            'created_at': '2011-01-26T19:10:09Z',
            'updated_at': '2011-01-26T19:10:09Z'
        }

    }
    res.json(data);
}
export default api