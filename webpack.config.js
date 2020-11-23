module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    modules: {
                        mode: (resourcePath) => {
                            if (
                                /_animation.module.[c,sc,sa]ss$/i.test(
                                    resourcePath
                                )
                            ) {
                                return "global";
                            }

                            return "pure";
                        },
                    },
                },
            },
        ],
    },
};
