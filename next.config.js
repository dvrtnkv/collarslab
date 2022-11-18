/**
 * @type {import('next').NextConfig}
 */
const nextBuildId = require('next-build-id')
const withPWA = require('next-pwa')({
	disable: process.env.NODE_ENV === 'development',
	dest: 'public'
})
module.exports = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	generateBuildId: () => nextBuildId({ dir: __dirname })
})
