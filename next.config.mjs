/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, {isServer}) => {

        // add a Rule to handle the Canvas.node binary module
        config.module.rules.push({ test: /\.node$/, use: 'raw-loader' })
        
        // Execute Canvas from being processed by NextJS in the browser
        if(!isServer) config.externals.push('canvas')

        return config
    },
    images:{
        domains:['placehold.co']
    }
};

export default nextConfig;
