import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
	Configuration as WebpackConfig,
		HotModuleReplacementPlugin,
} from 'webpack';
import {
	Configuration as WebpackDevServerConfig,
} from 'webpack-dev-server';

type Configuration = WebpackConfig & {
	devServer?: WebpackDevServerConfig;
};