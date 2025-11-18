# 部署指南

## Nginx 部署详细步骤

### 1. 构建生产版本

```bash
# 在项目根目录执行
npm run build
```

构建完成后，`dist/` 目录包含所有需要部署的文件。

### 2. 上传文件到服务器

#### 方式一：使用 SCP 命令

```bash
# 将 dist 目录上传到服务器
scp -r dist/* user@your-server:/var/www/anjet-sender/dist/
```

#### 方式二：使用 FTP/SFTP 工具

使用 FileZilla、WinSCP 等工具将 `dist/` 目录下的所有文件上传到服务器的 `/var/www/anjet-sender/dist/` 目录。

#### 方式三：使用 Git（如果服务器有 Git）

```bash
# 在服务器上
cd /var/www/anjet-sender
git pull
npm run build
```

### 3. 安装 Nginx（如果未安装）

#### Ubuntu/Debian

```bash
sudo apt update
sudo apt install nginx
```

#### CentOS/RHEL

```bash
sudo yum install nginx
# 或
sudo dnf install nginx
```

### 4. 配置 Nginx

#### 步骤 1：创建配置文件

```bash
# 编辑或创建配置文件
sudo nano /etc/nginx/sites-available/anjet-sender
# 或
sudo nano /etc/nginx/conf.d/anjet-sender.conf
```

#### 步骤 2：复制配置内容

将 `nginx.conf.example` 文件中的配置复制到上述文件中，并根据实际情况修改：

- `server_name`: 改为你的域名
- `root`: 改为实际的部署路径（例如：`/var/www/anjet-sender/dist`）

#### 步骤 3：创建软链接（如果使用 sites-available）

```bash
sudo ln -s /etc/nginx/sites-available/anjet-sender /etc/nginx/sites-enabled/
```

#### 步骤 4：测试配置

```bash
# 测试 Nginx 配置是否正确
sudo nginx -t
```

如果显示 `syntax is ok` 和 `test is successful`，说明配置正确。

#### 步骤 5：重启 Nginx

```bash
# 重启 Nginx 服务
sudo systemctl restart nginx

# 或
sudo service nginx restart
```

### 5. 设置文件权限

```bash
# 确保 Nginx 可以读取文件
sudo chown -R www-data:www-data /var/www/anjet-sender/dist
sudo chmod -R 755 /var/www/anjet-sender/dist
```

### 6. 配置防火墙（如果需要）

```bash
# Ubuntu/Debian (UFW)
sudo ufw allow 'Nginx Full'
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# CentOS/RHEL (firewalld)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### 7. 配置域名 DNS

在域名管理后台添加 A 记录，将域名指向服务器 IP 地址：

```
类型: A
主机记录: @ 或 www
记录值: 你的服务器IP地址
TTL: 600
```

### 8. 验证部署

1. 在浏览器访问你的域名：`http://www.anjet-sender.com`
2. 检查所有页面是否正常显示
3. 测试中英文切换功能
4. 测试移动端显示

### 9. 配置 HTTPS（推荐）

#### 使用 Let's Encrypt 免费证书

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 自动配置 SSL
sudo certbot --nginx -d www.anjet-sender.com -d anjet-sender.com

# 证书会自动续期
```

### 10. 常见问题排查

#### 问题 1：404 错误

**原因**：SPA 路由配置不正确

**解决**：确保配置中有 `try_files $uri $uri/ /index.html;`

#### 问题 2：静态资源加载失败

**原因**：路径配置错误或文件权限问题

**解决**：
```bash
# 检查文件是否存在
ls -la /var/www/anjet-sender/dist/assets/

# 检查权限
sudo chmod -R 755 /var/www/anjet-sender/dist
```

#### 问题 3：中文乱码

**原因**：字符编码配置缺失

**解决**：在配置中添加 `charset utf-8;`

#### 问题 4：图片无法显示

**原因**：图片路径错误

**解决**：检查 `dist/images/` 目录是否存在，确保图片文件已正确上传

### 11. 性能优化建议

1. **启用 Gzip 压缩**：已在配置中启用
2. **静态资源缓存**：已在配置中设置
3. **CDN 加速**：建议将静态资源（图片、CSS、JS）放到 CDN
4. **HTTP/2**：使用 HTTPS 时自动启用 HTTP/2

### 12. 更新部署

当需要更新网站时：

```bash
# 1. 在本地构建
npm run build

# 2. 上传新的 dist 文件到服务器
scp -r dist/* user@your-server:/var/www/anjet-sender/dist/

# 3. 重启 Nginx（通常不需要，但建议执行）
sudo systemctl reload nginx
```

### 13. 监控和日志

查看访问日志：
```bash
sudo tail -f /var/log/nginx/anjet-sender-access.log
```

查看错误日志：
```bash
sudo tail -f /var/log/nginx/anjet-sender-error.log
```

---

## 其他部署方式

### 使用 Docker

```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
COPY nginx.conf.example /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 使用 PM2 + Express

如果需要 Node.js 服务器，可以使用 PM2 管理进程。

---

**部署完成后，记得测试所有功能是否正常！**

