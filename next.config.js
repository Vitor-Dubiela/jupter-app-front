/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    env: {
        apiUrl: 'http://localhost:5065/api'
    }
}

module.exports = nextConfig
