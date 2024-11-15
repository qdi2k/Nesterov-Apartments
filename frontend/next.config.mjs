function defineConfig(config) {
  return config
}

export default defineConfig({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true}}]
    })
    return config
  }
})