module.exports = {
  apps: [
    {
      name: "test", // 替换成你自己的任意名称
      script: "main.js", // 替换成你自己的项目入口文件
      env: {
        COMMON_VARIABLE: "true",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      // user: "iZbp1i5bth3hh7nnscm8maZ", // 替换成你自己的主机名
      user: "张云杰", // 替换成你自己的主机名
      host: "8.139.6.25", // 替换成你自己的主机 ip
      port: "9000", // 替换成你自己的端口号
      ref: "origin/main", // 替换成你自己的分支
      repo: "git@github.com:idigan/share-footerball.git", // 替换成你自己的仓库地址
      ssh_options: "StrictHostKeyChecking=no",
      path: "/root/test", // 替换成你自己要在服务器上部署的目录
      "pre-deploy": "git fetch --all",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
    },
  },
};
